/*!
 * supabase-shim-ps.js — PS Shikshak ERP (STANDALONE Worker — UMS se alag)
 * ─────────────────────────────────────────────────────────────────
 * Ye file Supabase JS client (supabase-js CDN) ki jagah leti hai
 * for DATABASE calls (ps_gradation, ps_users, ps_settings,
 * ps_pw_reset_log, ps_online_users) — sab ab APNE ALAG Cloudflare
 * Worker (D1-backed, ps-shikshak-db) ko hit karte hain — UMS ke
 * Worker se koi connection/mix nahi hai.
 *
 * Storage (document uploads, "ums-documents" bucket) abhi bhi
 * REAL Supabase (dgzdessdyrxhsbjxeahi project) use karta hai,
 * jaisa UMS shim mein bhi hai — dono ERPs same bucket share karte
 * hain, isliye wo project active rehna chahiye.
 *
 * Online Users / row-lock / data-update broadcasts Worker+D1
 * polling se chalte hain (Supabase Realtime dependency nahi hai).
 *
 * SETUP (ek hi baar):
 * 1) index.html mein Supabase CDN <script> tag WAHI RAKHO (Storage
 *    ke liye chahiye), is shim ko uske TURANT BAAD load karo,
 *    app.js SE PEHLE:
 *      <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
 *      <script src="supabase-shim-ps.js"></script>
 *      <script src="app_updated.js"></script>
 * 2) Neeche WORKER_SECRET set karo (same value jo Worker ke
 *    env.WORKER_SECRET mein hai).
 * ─────────────────────────────────────────────────────────────────
 */
(function () {
  "use strict";

  // ── PS Worker URL (deployed) ──
  var WORKER_URL = "https://ps-shikshak-worker.devrai1782.workers.dev";

  // ── ⚠️ YAHAN APNA WORKER_SECRET DAALO (PS Worker ke env.WORKER_SECRET se match hona chahiye) ──
  var WORKER_SECRET = "PS2026SECRET";

  var PRESENCE_POLL_MS = 6000;
  var HEARTBEAT_STALE_WINDOW_MS = 300000; // matches app's own 5-min .gte() cutoff

  function buildQS(params) {
    var parts = [];
    Object.keys(params).forEach(function (k) {
      if (params[k] === undefined || params[k] === null) return;
      parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(params[k]));
    });
    return parts.length ? "?" + parts.join("&") : "";
  }

  async function _fetchJson(path, opts) {
    opts = opts || {};
    var headers = Object.assign(
      { "Content-Type": "application/json", "X-PS-Secret": WORKER_SECRET },
      opts.headers || {}
    );
    var res;
    try {
      res = await fetch(WORKER_URL + path, {
        method: opts.method || "GET",
        headers: headers,
        body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined
      });
    } catch (netErr) {
      return { data: null, error: { message: "Network error: " + netErr.message } };
    }
    if (res.status === 204) return { data: null, error: null };
    var text = await res.text();
    var parsed = null;
    try { parsed = text ? JSON.parse(text) : null; } catch (e) { parsed = text; }
    if (!res.ok) {
      var msg = (parsed && parsed.error) ? parsed.error : ("HTTP " + res.status);
      return { data: null, error: { message: msg, code: res.status === 401 ? "401" : undefined } };
    }
    return { data: parsed, error: null };
  }

  // ── Chainable query-builder — mimics the subset of supabase-js used in app.js ──
  function makeQueryBuilder(table) {
    var state = {
      table: table,
      action: "select",
      filters: {},
      inFilters: {},     // { col: [values] } → .in("key", [...])
      gteFilters: {},    // { col: val } → .gte("last_seen", cutoff)
      order: null,
      rangeFrom: null,
      rangeTo: null,
      isSingle: false,
      isMaybeSingle: false,
      isNeqAllId: false, // delete().neq("id", 0) → delete ALL
      isInIds: false,    // delete().in("id", [...])
      inIdsList: null,
      payload: null,
      upsertOpts: null,
      selectCols: null
    };

    var builder = {
      select: function (cols) { state.selectCols = cols; return builder; },
      eq: function (col, val) { state.filters[col] = val; return builder; },
      neq: function (col, val) {
        if (col === "id" && (val === 0 || val === "0")) state.isNeqAllId = true;
        return builder;
      },
      in: function (col, vals) {
        if (col === "id") { state.isInIds = true; state.inIdsList = vals; }
        else state.inFilters[col] = vals;
        return builder;
      },
      gte: function (col, val) { state.gteFilters[col] = val; return builder; },
      order: function (col, opts) { state.order = { col: col, ascending: !opts || opts.ascending !== false }; return builder; },
      limit: function (_n) { return builder; },
      range: function (from, to) { state.rangeFrom = from; state.rangeTo = to; return builder; },
      single: function () { state.isSingle = true; return builder; },
      maybeSingle: function () { state.isMaybeSingle = true; return builder; },
      insert: function (payload) { state.action = "insert"; state.payload = payload; return builder; },
      update: function (payload) { state.action = "update"; state.payload = payload; return builder; },
      upsert: function (payload, opts) { state.action = "upsert"; state.payload = payload; state.upsertOpts = opts || {}; return builder; },
      delete: function () { state.action = "delete"; return builder; },
      then: function (resolve, reject) { _execute(state).then(resolve, reject); },
      catch: function (reject) { return _execute(state).catch(reject); }
    };
    return builder;
  }

  async function _execute(state) {
    var t = state.table;

    // ═══════════ ps_gradation ═══════════
    if (t === "ps_gradation") {
      if (state.action === "select") {
        var r = await _fetchJson("/gradation", { method: "GET" });
        if (r.error) return r;
        var all = (r.data && r.data.data) || [];
        if (state.order && state.order.col) {
          var oc = state.order.col, asc = state.order.ascending ? 1 : -1;
          all = all.slice().sort(function (x, y) {
            var xv = x[oc], yv = y[oc];
            return (xv > yv ? 1 : xv < yv ? -1 : 0) * asc;
          });
        }
        if (state.rangeFrom !== null) all = all.slice(state.rangeFrom, state.rangeTo + 1);
        return { data: all, error: null };
      }
      if (state.action === "insert") {
        var rows = Array.isArray(state.payload) ? state.payload : [state.payload];
        var results = [];
        var lastError = null;
        for (var i = 0; i < rows.length; i++) {
          var ir = await _fetchJson("/gradation", { method: "POST", body: rows[i] });
          if (ir.error) { lastError = ir.error; break; }
          results.push({ id: ir.data && ir.data.id, ...rows[i] });
        }
        if (lastError) return { data: null, error: lastError };
        if (state.isSingle) return { data: results[0] || null, error: null };
        return { data: results, error: null };
      }
      if (state.action === "update") {
        if (state.filters.id === undefined) return { data: null, error: { message: "update() needs .eq('id', ...)" } };
        return _fetchJson("/gradation/" + state.filters.id, { method: "PUT", body: state.payload });
      }
      if (state.action === "delete") {
        if (state.isNeqAllId) return _fetchJson("/gradation/all", { method: "DELETE" });
        if (state.isInIds) return _fetchJson("/gradation/bulk", { method: "DELETE", body: { ids: state.inIdsList } });
        if (state.filters.id !== undefined) return _fetchJson("/gradation/" + state.filters.id, { method: "DELETE" });
        return { data: null, error: { message: "delete() needs .eq('id', ...) or a supported bulk pattern" } };
      }
    }

    // ═══════════ ps_users ═══════════
    if (t === "ps_users") {
      if (state.action === "select") {
        var ru = await _fetchJson("/users", { method: "GET" });
        if (ru.error) return ru;
        return { data: (ru.data && ru.data.data) || [], error: null };
      }
      if (state.action === "insert") {
        return _fetchJson("/users", { method: "POST", body: state.payload });
      }
      if (state.action === "update") {
        if (state.filters.user_id === undefined) return { data: null, error: { message: "update() needs .eq('user_id', ...)" } };
        return _fetchJson("/users/" + encodeURIComponent(state.filters.user_id), { method: "PUT", body: state.payload });
      }
      if (state.action === "delete") {
        if (state.filters.user_id === undefined) return { data: null, error: { message: "delete() needs .eq('user_id', ...)" } };
        return _fetchJson("/users/" + encodeURIComponent(state.filters.user_id), { method: "DELETE" });
      }
    }

    // ═══════════ ps_settings ═══════════
    if (t === "ps_settings") {
      if (state.action === "select") {
        if (state.inFilters.key) {
          var rk = await _fetchJson("/settings" + buildQS({ keys: state.inFilters.key.join(",") }), { method: "GET" });
          if (rk.error) return rk;
          return { data: (rk.data && rk.data.data) || [], error: null };
        }
        if (state.filters.key !== undefined) {
          var rs = await _fetchJson("/settings/" + encodeURIComponent(state.filters.key), { method: "GET" });
          if (rs.error) return rs;
          var row = { key: state.filters.key, value: rs.data && rs.data.value };
          if (state.isSingle || state.isMaybeSingle) return { data: (row.value === null ? null : row), error: null };
          return { data: [row], error: null };
        }
        var ra = await _fetchJson("/settings", { method: "GET" });
        if (ra.error) return ra;
        return { data: (ra.data && ra.data.data) || [], error: null };
      }
      if (state.action === "upsert") {
        var key = state.payload.key;
        var value = state.payload.value;
        return _fetchJson("/settings/" + encodeURIComponent(key), { method: "PUT", body: { value: value } });
      }
    }

    // ═══════════ ps_pw_reset_log ═══════════
    if (t === "ps_pw_reset_log") {
      if (state.action === "insert") {
        return _fetchJson("/pw-reset-log", { method: "POST", body: state.payload });
      }
    }

    // ═══════════ ps_online_users ═══════════
    if (t === "ps_online_users") {
      if (state.action === "upsert") {
        return _fetchJson("/online-users", { method: "POST", body: state.payload });
      }
      if (state.action === "select") {
        var since = state.gteFilters.last_seen;
        var ro = await _fetchJson("/online-users" + buildQS({ since: since }), { method: "GET" });
        if (ro.error) return ro;
        return { data: (ro.data && ro.data.data) || [], error: null };
      }
      if (state.action === "delete") {
        if (state.filters.user_id === undefined) return { data: null, error: { message: "delete() needs .eq('user_id', ...)" } };
        return _fetchJson("/online-users/" + encodeURIComponent(state.filters.user_id), { method: "DELETE" });
      }
    }

    return { data: null, error: { message: "supabase-shim-ps: unhandled table/action → " + t + "/" + state.action } };
  }

  // ═══════════════════════════════════════════════════════════════════
  // Polling-based channel — mimics supabase-js broadcast API
  // (on/subscribe/send/removeChannel) for "ps-gradation-collab" channel,
  // backed by Worker + D1 instead of Supabase Realtime.
  // ═══════════════════════════════════════════════════════════════════
  function makePollingChannel(_topic) {
    var handlers = { broadcast: {} };
    var pollTimer = null;
    var mySender = (window.currentUser || "unknown") + ":" + Math.random().toString(36).slice(2, 8);
    var sinceTs = Date.now();
    var stopped = false;

    async function pollOnce() {
      if (stopped) return;
      var re = await _fetchJson("/broadcast-events" + buildQS({ since: sinceTs }), { method: "GET" });
      if (!stopped && !re.error && re.data) {
        var events = re.data.data || [];
        events.forEach(function (ev) {
          if (ev.sender === mySender) return;
          var list = handlers.broadcast[ev.event] || [];
          var payload = ev.payload;
          if (typeof payload === "string") { try { payload = JSON.parse(payload); } catch (e) {} }
          list.forEach(function (fn) { fn({ payload: payload }); });
        });
        sinceTs = re.data.serverTime || Date.now();
      }
    }

    var api = {
      on: function (type, filter, cb) {
        if (type === "broadcast" && filter && filter.event) {
          handlers.broadcast[filter.event] = handlers.broadcast[filter.event] || [];
          handlers.broadcast[filter.event].push(cb);
        }
        return api;
      },
      subscribe: function (cb) {
        pollOnce().then(function () {
          if (cb) cb("SUBSCRIBED");
          pollTimer = setInterval(pollOnce, PRESENCE_POLL_MS);
        });
        return api;
      },
      send: async function (msg) {
        if (!msg || msg.type !== "broadcast") return;
        return _fetchJson("/broadcast", {
          method: "POST",
          body: { event: msg.event, payload: JSON.stringify(msg.payload || {}), sender: mySender }
        });
      },
      _stopPolling: function () {
        stopped = true;
        if (pollTimer) clearInterval(pollTimer);
        pollTimer = null;
      }
    };
    return api;
  }

  // ── Capture the REAL supabase-js client (for Storage only) ──
  var _RealCreateClient = (window.supabase && window.supabase.createClient)
    ? window.supabase.createClient
    : null;

  if (!_RealCreateClient) {
    console.warn("[supabase-shim-ps] Real supabase-js not found — did you keep the CDN <script> tag? Storage (documents) will not work.");
  }

  // ── Drop-in replacement for `window.supabase.createClient(url, key)` ──
  window.supabase = {
    createClient: function (url, key) {
      var realClient = _RealCreateClient ? _RealCreateClient(url, key) : null;
      return {
        from: function (table) { return makeQueryBuilder(table); },
        storage: realClient ? realClient.storage : {
          from: function () {
            return {
              upload: async function () { return { data: null, error: { message: "Storage unavailable — real Supabase client failed to load" } }; },
              getPublicUrl: function () { return { data: { publicUrl: "" } }; },
              download: async function () { return { data: null, error: { message: "Storage unavailable" } }; },
              list: async function () { return { data: [], error: null }; },
              remove: async function () { return { data: null, error: null }; }
            };
          }
        },
        channel: function (topic) { return makePollingChannel(topic); },
        removeChannel: function (ch) { if (ch && ch._stopPolling) ch._stopPolling(); }
      };
    }
  };

  console.log("[supabase-shim-ps] Active — DB calls → Worker:", WORKER_URL, "(ps-shikshak-db) | Storage → Supabase (still required, keep it alive) | Realtime → Worker polling");
})();
