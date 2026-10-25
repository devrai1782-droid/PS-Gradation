(function () {
  document.addEventListener("contextmenu", function (_0x43e8fc) {
    _0x43e8fc.preventDefault();
    return false;
  });
  document.addEventListener("keydown", function (_0x1d4293) {
    if (_0x1d4293.key === "F12") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.shiftKey && _0x1d4293.key === "I") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.shiftKey && _0x1d4293.key === "J") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.shiftKey && _0x1d4293.key === "C") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.key.toLowerCase() === "u") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.key.toLowerCase() === "s") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.key.toLowerCase() === "a") {
      _0x1d4293.preventDefault();
      return false;
    }
    if (_0x1d4293.ctrlKey && _0x1d4293.key.toLowerCase() === "p") {
      _0x1d4293.preventDefault();
      return false;
    }
  }, true);
  document.addEventListener("selectstart", function (_0x402472) {
    _0x402472.preventDefault();
    return false;
  });
  document.addEventListener("dragstart", function (_0x4152b9) {
    _0x4152b9.preventDefault();
    return false;
  });
  document.addEventListener("copy", function (_0xe05f50) {
    _0xe05f50.preventDefault();
    return false;
  });
  document.addEventListener("cut", function (_0x454ff9) {
    _0x454ff9.preventDefault();
    return false;
  });
  var _0x1674a1 = document.createElement("style");
  _0x1674a1.innerHTML = "* { -webkit-user-select:none !important; -moz-user-select:none !important; -ms-user-select:none !important; user-select:none !important; } input, textarea, select { -webkit-user-select:text !important; user-select:text !important; }";
  if (document.head) {
    document.head.appendChild(_0x1674a1);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      document.head.appendChild(_0x1674a1);
    });
  }
  var _0x165ef7 = false;
  function _0x2572c4() {
    var _0x3eb01f = 160;
    var _0x8dc502 = window.outerWidth - window.innerWidth > _0x3eb01f;
    var _0x3eda1f = window.outerHeight - window.innerHeight > _0x3eb01f;
    if (_0x8dc502 || _0x3eda1f) {
      if (!_0x165ef7) {
        _0x165ef7 = true;
        document.body.innerHTML = "<div style=\"display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a2e;color:white;font-size:24px;font-family:sans-serif;text-align:center;flex-direction:column;\"><div style=\"font-size:60px;\">🔒</div><div style=\"margin-top:20px;font-weight:bold;\">Access Denied</div><div style=\"font-size:14px;margin-top:10px;color:#aaa;\">Developer Tools detected.<br>Please close DevTools and refresh the page.</div></div>";
      }
    } else {
      _0x165ef7 = false;
    }
  }
  setInterval(_0x2572c4, 1000);
  setTimeout(function () {
    try {
      console.clear();
      console.log("%c⛔ STOP!", "color:red;font-size:48px;font-weight:bold;");
      console.log("%cYeh application protected hai.\nKisi bhi prakar ka code dekhna ya modify karna prohibited hai.\n© 2026 PS Gradation ERP — Devendra Rai", "color:#ff6600;font-size:14px;font-weight:bold;");
    } catch (_0x190031) {}
  }, 500);
  (function _0x5d6d8f() {
    try {
      (function () {
        var _0x2b724c = new Date();
        debugger;
        if (new Date() - _0x2b724c > 100) {
          document.body.innerHTML = "<div style=\"display:flex;align-items:center;justify-content:center;height:100vh;background:#1a1a2e;color:white;font-size:24px;font-family:sans-serif;text-align:center;flex-direction:column;\"><div style=\"font-size:60px;\">🔒</div><div style=\"margin-top:20px;font-weight:bold;\">Access Denied</div><div style=\"font-size:14px;margin-top:10px;color:#aaa;\">Developer Tools detected.<br>Please close DevTools and refresh the page.</div></div>";
        }
      })();
    } catch (_0x353a82) {}
    setTimeout(_0x5d6d8f, 2000);
  })();
})();
const SUPABASE_URL = "https://dgzdessdyrxhsbjxeahi.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnemRlc3NkeXJ4aHNianhlYWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMTg5MzksImV4cCI6MjA4OTU5NDkzOX0.I0_-cV_OEahHu7DtDwvfY1xhPyJRWwUmqdYsSiZJqaw";
let _supabase = null;
function getSupabase() {
  if (!_supabase && typeof supabase !== "undefined") {
    _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    });
  }
  return _supabase;
}
function _setLoadUI(_0x55c3e4, _0x168e66, _0x44499f) {
  const _0xa87245 = document.getElementById("dataLoadBar");
  const _0x481036 = document.getElementById("dataLoadPct");
  const _0x420dcf = document.getElementById("dataLoadMsg");
  const _0x579995 = document.getElementById("dataLoadCount");
  if (_0xa87245) {
    _0xa87245.style.width = _0x55c3e4 + "%";
  }
  if (_0x481036) {
    _0x481036.textContent = Math.round(_0x55c3e4) + "%";
  }
  if (_0x168e66 && _0x420dcf) {
    _0x420dcf.textContent = _0x168e66;
  }
  if (_0x579995 && _0x44499f !== undefined) {
    _0x579995.textContent = _0x44499f;
  }
}
async function _origLoadData() {
  const _0x47d787 = getSupabase();
  if (!_0x47d787) {
    return false;
  }
  const _0x53728d = document.getElementById("dataLoadingOverlay");
  if (_0x53728d) {
    _0x53728d.style.display = "flex";
  }
  _setLoadUI(5, "Supabase से कनेक्ट हो रहे हैं...", "");
  await new Promise(_0x2e1901 => setTimeout(_0x2e1901, 40));
  try {
    const _0x15c186 = 1000;
    let _0x41cefc = [];
    let _0x4390e6 = 0;
    let _0x2a6392 = 0;
    _setLoadUI(10, "रिकॉर्ड्स डाउनलोड हो रहे हैं...", "");
    while (true) {
      const {
        data: _0x5e3759,
        error: _0x804b1c
      } = await _0x47d787.from("ps_gradation").select("*").order("id", {
        ascending: true
      }).range(_0x4390e6, _0x4390e6 + _0x15c186 - 1);
      if (_0x804b1c) {
        if (_0x53728d) {
          _0x53728d.style.display = "none";
        }
        return false;
      }
      if (!_0x5e3759 || _0x5e3759.length === 0) {
        break;
      }
      _0x41cefc = _0x41cefc.concat(_0x5e3759);
      _0x2a6392++;
      _setLoadUI(Math.min(10 + _0x2a6392 * 25, 60), "डेटा लोड हो रहा है...", _0x41cefc.length + " रिकॉर्ड्स मिले");
      await new Promise(_0x416e4f => setTimeout(_0x416e4f, 20));
      if (_0x5e3759.length < _0x15c186) {
        break;
      }
      _0x4390e6 += _0x15c186;
    }
    if (_0x41cefc.length === 0) {
      if (_0x53728d) {
        _0x53728d.style.display = "none";
      }
      return false;
    }
    _setLoadUI(62, "डेटा प्रोसेस हो रहा है...", "कुल " + _0x41cefc.length + " रिकॉर्ड्स");
    await new Promise(_0x19ec83 => setTimeout(_0x19ec83, 30));
    window.fullData = _0x41cefc.map(_0x4bf39a => {
      const _0x1c3d0f = {};
      for (let _0x2d53c1 = 1; _0x2d53c1 <= 31; _0x2d53c1++) {
        _0x1c3d0f["field" + _0x2d53c1] = _0x4bf39a["field" + _0x2d53c1] || "";
      }
      _0x1c3d0f._sbId = _0x4bf39a.id;
      if (_0x4bf39a.changed_fields) {
        try {
          _0x1c3d0f._changedFields = JSON.parse(_0x4bf39a.changed_fields);
        } catch (_0x4437d4) {}
      }
      if (_0x4bf39a.history_log) {
        try {
          _0x1c3d0f.history_log = JSON.parse(_0x4bf39a.history_log);
        } catch (_0x8b5748) {}
      }
      if (_0x4bf39a.doc_data) {
        try {
          _0x1c3d0f._doc = JSON.parse(_0x4bf39a.doc_data);
        } catch (_0x83068e) {}
      }
      if (_0x4bf39a.is_deleted === true || _0x4bf39a.is_deleted === 1 || _0x4bf39a.is_deleted === "true") {
        _0x1c3d0f._softDeleted = true;
      }
      return _0x1c3d0f;
    });
    window.fullData.sort((_0x24cfd7, _0x209f93) => {
      const _0x438121 = parseInt(_0x24cfd7.field1, 10) || 0;
      const _0x350d9a = parseInt(_0x209f93.field1, 10) || 0;
      if (_0x438121 === 0 && _0x350d9a === 0) {
        return 0;
      }
      if (_0x438121 === 0) {
        return 1;
      }
      if (_0x350d9a === 0) {
        return -1;
      }
      return _0x438121 - _0x350d9a;
    });
    const _0x3073fa = getAllowedDistricts(window.currentUser);
    if (_0x3073fa !== null) {
      window.fullData = window.fullData.filter(_0x357546 => isRowAllowed(_0x357546, _0x3073fa));
    }
    _setLoadUI(90, "टेबल तैयार हो रहा है...", window.fullData.length + " रिकॉर्ड्स लोड हुए");
    await new Promise(_0xac26ab => setTimeout(_0xac26ab, 50));
    window.filteredData = [...window.fullData];
    _setLoadUI(100, "✅ डेटा सफलतापूर्वक लोड हुआ!", "कुल " + window.fullData.length + " रिकॉर्ड्स");
    await new Promise(_0x3e0bb1 => setTimeout(_0x3e0bb1, 600));
    if (_0x53728d) {
      _0x53728d.style.display = "none";
    }
    return true;
  } catch (_0x56ed14) {
    const _0x1534b1 = document.getElementById("dataLoadingOverlay");
    if (_0x1534b1) {
      _0x1534b1.style.display = "none";
    }
    return false;
  }
}
async function _sbSettingGet(_0x44070b) {
  const _0x58308f = getSupabase();
  if (!_0x58308f) {
    return null;
  }
  try {
    const {
      data: _0x4a038a,
      error: _0x11bbaa
    } = await _0x58308f.from("ps_settings").select("value").eq("key", _0x44070b).maybeSingle();
    if (_0x11bbaa || !_0x4a038a || !_0x4a038a.value) {
      return null;
    }
    return JSON.parse(_0x4a038a.value);
  } catch (_0x4f3f1b) {
    return null;
  }
}
async function _sbSettingSet(_0x4b037e, _0x4893d5) {
  const _0x21c3e2 = getSupabase();
  if (!_0x21c3e2) {
    return false;
  }
  try {
    const {
      error: _0x4c6fe9
    } = await _0x21c3e2.from("ps_settings").upsert({
      key: _0x4b037e,
      value: JSON.stringify(_0x4893d5)
    }, {
      onConflict: "key"
    });
    if (_0x4c6fe9) {
      console.error("ps_settings save error:", _0x4b037e, _0x4c6fe9.message);
      return false;
    }
    return true;
  } catch (_0x348b44) {
    console.error(_0x348b44);
    return false;
  }
}
async function _bootstrapFromSupabase() {
  const _0x327f76 = getSupabase();
  if (!_0x327f76) {
    return;
  }
  try {
    const {
      data: _0x4f0a6c,
      error: _0x491886
    } = await _0x327f76.from("ps_users").select("user_id,password").eq("is_active", true);
    if (!_0x491886 && _0x4f0a6c && _0x4f0a6c.length) {
      window._sbPasswords = {};
      _0x4f0a6c.forEach(_0x41875e => {
        window._sbPasswords[_0x41875e.user_id] = _0x41875e.password;
      });
    }
    const {
      data: _0x229ed8,
      error: _0x267d3f
    } = await _0x327f76.from("ps_settings").select("key,value").in("key", ["__maint_settings__", "__time_limit__", "__closed_settings__"]);
    if (_0x267d3f || !_0x229ed8) {
      return;
    }
    _0x229ed8.forEach(_0x2a6b0d => {
      if (!_0x2a6b0d.value) {
        return;
      }
      try {
        const _0x13736d = JSON.parse(_0x2a6b0d.value);
        if (_0x2a6b0d.key === "__maint_settings__") {
          window._maintSettings = _0x13736d;
        }
        if (_0x2a6b0d.key === "__time_limit__") {
          window._psStart = _0x13736d.start || "";
          window._psEnd = _0x13736d.end || "";
        }
        if (_0x2a6b0d.key === "__closed_settings__") {
          window._closedJDs = _0x13736d.closedJDs || {};
          window._closedDistricts = _0x13736d.closedDistricts || {};
        }
      } catch (_0x24d756) {}
    });
  } catch (_0x196efb) {
    console.warn("Bootstrap load failed:", _0x196efb);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  _bootstrapFromSupabase();
});
async function saveRecordToSupabase(_0x52870d) {
  const _0x35a11f = getSupabase();
  if (!_0x35a11f) {
    return false;
  }
  const _0x2c9f73 = {};
  for (let _0x8209bd = 1; _0x8209bd <= 31; _0x8209bd++) {
    _0x2c9f73["field" + _0x8209bd] = _0x52870d["field" + _0x8209bd] || null;
  }
  _0x2c9f73.changed_fields = _0x52870d._changedFields ? JSON.stringify(_0x52870d._changedFields) : null;
  _0x2c9f73.history_log = _0x52870d.history_log && _0x52870d.history_log.length ? JSON.stringify(_0x52870d.history_log) : null;
  _0x2c9f73.doc_data = _0x52870d._doc ? JSON.stringify(_0x52870d._doc) : null;
  _0x2c9f73.is_deleted = _0x52870d._softDeleted === true ? true : false;
  if (_0x52870d._sbId) {
    const {
      error: _0x38d1c1
    } = await _0x35a11f.from("ps_gradation").update(_0x2c9f73).eq("id", _0x52870d._sbId);
    if (_0x38d1c1) {
      console.error(_0x38d1c1);
    }
    return !_0x38d1c1;
  } else {
    const {
      data: _0x3d159d,
      error: _0x94ce86
    } = await _0x35a11f.from("ps_gradation").insert(_0x2c9f73).select().single();
    if (!_0x94ce86 && _0x3d159d) {
      _0x52870d._sbId = _0x3d159d.id;
    }
    if (_0x94ce86) {
      console.error(_0x94ce86);
    }
    return !_0x94ce86;
  }
}
async function deleteRecordFromSupabase(_0x385f61) {
  const _0x44fe2b = getSupabase();
  if (!_0x44fe2b || !_0x385f61._sbId) {
    return false;
  }
  const {
    error: _0x1dc320
  } = await _0x44fe2b.from("ps_gradation").delete().eq("id", _0x385f61._sbId);
  return !_0x1dc320;
}
async function savePwResetLogCloud(_0x5b7e00) {
  const _0x39ba39 = getSupabase();
  if (!_0x39ba39) {
    return;
  }
  await _0x39ba39.from("ps_pw_reset_log").insert({
    user_id: _0x5b7e00.userId,
    reset_by: _0x5b7e00.resetBy,
    reset_at: new Date().toISOString(),
    old_pass: _0x5b7e00.oldPass,
    new_pass: _0x5b7e00.newPass
  });
}
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.visibility = "visible";
});
var _genericPassCallback = null;
function showPassModal(_0x4fc9c2, _0x2daa80, _0x14b78f) {
  document.getElementById("genericPassTitle").textContent = _0x4fc9c2 || "🔐 Password darj karein";
  document.getElementById("genericPassInput").value = "";
  document.getElementById("genericPassInput").type = _0x14b78f || "password";
  document.getElementById("genericPassErr").textContent = "";
  document.getElementById("genericPassModal").style.display = "flex";
  setTimeout(() => document.getElementById("genericPassInput").focus(), 100);
  _genericPassCallback = _0x2daa80;
}
function _genericPassOk() {
  const _0x2c8b49 = document.getElementById("genericPassInput").value;
  if (_genericPassCallback) {
    const _0x11cb0e = _genericPassCallback(_0x2c8b49);
    if (_0x11cb0e !== false) {
      document.getElementById("genericPassModal").style.display = "none";
      _genericPassCallback = null;
    }
  }
}
function _genericPassCancel() {
  document.getElementById("genericPassModal").style.display = "none";
  _genericPassCallback = null;
}
function openTitleEditor() {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can edit the title.");
    return;
  }
  document.getElementById("titleEditorInput").value = document.getElementById("sheetTitleText").textContent;
  document.getElementById("titleEditorOverlay").style.display = "flex";
  setTimeout(() => document.getElementById("titleEditorInput").focus(), 100);
}
function closeTitleEditor() {
  document.getElementById("titleEditorOverlay").style.display = "none";
}
function saveTitleEdit() {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can edit the title.");
    return;
  }
  var _0x28bbd9 = document.getElementById("titleEditorInput").value.trim();
  if (!_0x28bbd9) {
    myAlert("❌ Title खाली नहीं हो सकता।");
    return;
  }
  document.getElementById("sheetTitleText").textContent = _0x28bbd9;
  document.title = _0x28bbd9 + " - DPI Madhya Pradesh";
  closeTitleEditor();
  myAlert("✅ Title सफलतापूर्वक बदला गया!");
}
document.addEventListener("DPILoggedIn", function () {
  var _0x4928c9 = document.getElementById("sheetTitleEditBtn");
  if (_0x4928c9) {
    _0x4928c9.style.display = "inline-block";
  }
});
const districtCredentials = {
  DPI: "5021",
  JDBHOPAL: "4821",
  JDGWALIOR: "9304",
  JDINDORE: "2158",
  JDJABALPUR: "7739",
  JDREWA: "6042",
  JDSAGAR: "1185",
  JDUJJAIN: "3391",
  JDSHAHDOL: "8520",
  JDNARMADAPURAM: "5567",
  DEOAGARMALWA: "1094",
  DEOALIRAJPUR: "3382",
  DEOANUPPUR: "8273",
  DEOASHOKNAGAR: "4412",
  DEOBALAGHAT: "5039",
  DEOBARWANI: "2281",
  DEOBETUL: "6645",
  DEOBHIND: "3190",
  DEOBHOPAL: "1782",
  DEOBURHANPUR: "9023",
  DEOCHHATARPUR: "7741",
  DEOCHHINDWARA: "1150",
  DEODAMOH: "4932",
  DEODATIA: "3368",
  DEODEWAS: "8120",
  DEODHAR: "2947",
  DEODINDORI: "6051",
  DEOGUNA: "4819",
  DEOGWALIOR: "7234",
  DEOHARDA: "5512",
  DEOINDORE: "9938",
  DEOJABALPUR: "1029",
  DEOJHABUA: "3384",
  DEOKATNI: "6721",
  DEOKHANDWA: "4490",
  DEOKHARGONE: "2105",
  DEOMANDLA: "8832",
  DEOMANDSAUR: "5561",
  DEOMORENA: "7710",
  DEONARMADAPURAM: "2034",
  DEONARSINGHPUR: "9912",
  DEONEEMUCH: "4420",
  DEONIWARI: "3185",
  DEOPANNA: "6629",
  DEORAISEN: "8843",
  DEORAJGARH: "1190",
  DEORATLAM: "5023",
  DEOREWA: "7731",
  DEOSAGAR: "4492",
  DEOSATNA: "2184",
  DEOSEHORE: "9930",
  DEOSEONI: "6612",
  DEOSHAHDOL: "4471",
  DEOSHAJAPUR: "8820",
  DEOSHEOPUR: "3309",
  DEOSHIVPURI: "1142",
  DEOSIDHI: "5583",
  DEOSINGRAULI: "9921",
  DEOTIKAMGARH: "2284",
  DEOUJJAIN: "4410",
  DEOUMARIA: "7753",
  DEOVIDISHA: "1104"
};
const districts = ["", "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narmadapuram", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];
const DEO_DISTRICT = {
  DEOBHOPAL: "Bhopal",
  DEORAISEN: "Raisen",
  DEORAJGARH: "Rajgarh",
  DEOSEHORE: "Sehore",
  DEOVIDISHA: "Vidisha",
  DEOASHOKNAGAR: "Ashoknagar",
  DEOBHIND: "Bhind",
  DEODATIA: "Datia",
  DEOGUNA: "Guna",
  DEOGWALIOR: "Gwalior",
  DEOMORENA: "Morena",
  DEOSHEOPUR: "Sheopur",
  DEOSHIVPURI: "Shivpuri",
  DEOALIRAJPUR: "Alirajpur",
  DEOBARWANI: "Barwani",
  DEOBURHANPUR: "Burhanpur",
  DEOKHANDWA: "Khandwa",
  DEODHAR: "Dhar",
  DEOINDORE: "Indore",
  DEOJHABUA: "Jhabua",
  DEOKHARGONE: "Khargone",
  DEOBALAGHAT: "Balaghat",
  DEOCHHINDWARA: "Chhindwara",
  DEODINDORI: "Dindori",
  DEOJABALPUR: "Jabalpur",
  DEOKATNI: "Katni",
  DEOMANDLA: "Mandla",
  DEONARSINGHPUR: "Narsinghpur",
  DEOSEONI: "Seoni",
  DEOHARDA: "Harda",
  DEONARMADAPURAM: "Narmadapuram",
  DEOBETUL: "Betul",
  DEOREWA: "Rewa",
  DEOSATNA: "Satna",
  DEOSIDHI: "Sidhi",
  DEOSINGRAULI: "Singrauli",
  DEOCHHATARPUR: "Chhatarpur",
  DEODAMOH: "Damoh",
  DEONIWARI: "Niwari",
  DEOPANNA: "Panna",
  DEOSAGAR: "Sagar",
  DEOTIKAMGARH: "Tikamgarh",
  DEOANUPPUR: "Anuppur",
  DEOSHAHDOL: "Shahdol",
  DEOUMARIA: "Umaria",
  DEOMAIHAR: "Maihar",
  DEOMAUGANJ: "Mauganj",
  DEOPANDHURNA: "Pandhurna",
  DEOAGARMALWA: "Agar Malwa",
  DEODEWAS: "Dewas",
  DEOMANDSAUR: "Mandsaur",
  DEONEEMUCH: "Neemuch",
  DEORATLAM: "Ratlam",
  DEOSHAJAPUR: "Shajapur",
  DEOUJJAIN: "Ujjain"
};
const JD_DISTRICTS = {
  JDBHOPAL: ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha"],
  JDGWALIOR: ["Ashoknagar", "Bhind", "Datia", "Guna", "Gwalior", "Morena", "Sheopur", "Shivpuri"],
  JDINDORE: ["Alirajpur", "Barwani", "Burhanpur", "Dhar", "Indore", "Jhabua", "Khandwa", "Khargone"],
  JDJABALPUR: ["Balaghat", "Chhindwara", "Dindori", "Jabalpur", "Katni", "Mandla", "Narsinghpur", "Pandhurna", "Seoni"],
  JDUJJAIN: ["Agar Malwa", "Dewas", "Mandsaur", "Neemuch", "Ratlam", "Shajapur", "Ujjain"],
  JDSAGAR: ["Chhatarpur", "Damoh", "Maihar", "Niwari", "Panna", "Sagar", "Tikamgarh"],
  JDREWA: ["Mauganj", "Rewa", "Satna", "Sidhi", "Singrauli"],
  JDNARMADAPURAM: ["Betul", "Harda", "Narmadapuram"],
  JDSHAHDOL: ["Anuppur", "Shahdol", "Umaria"]
};
function getAllowedDistricts(_0x522b04) {
  if (!_0x522b04) {
    return null;
  }
  if (_0x522b04 === "DPI") {
    var _0x23f910 = window.dpiSelectedDivision;
    if (!_0x23f910 || _0x23f910 === "ALL") {
      return null;
    }
    var _0x28007e = window.DPI_DIVISION_INFO && window.DPI_DIVISION_INFO[_0x23f910];
    if (_0x28007e) {
      return _0x28007e.districts;
    }
    return null;
  }
  if (JD_DISTRICTS[_0x522b04]) {
    return JD_DISTRICTS[_0x522b04];
  }
  var _0x120ddd = DEO_DISTRICT[_0x522b04];
  if (_0x120ddd) {
    return [_0x120ddd];
  }
  return [];
}
function isRowAllowed(_0x4504de, _0x318776) {
  if (_0x318776 === null) {
    return true;
  }
  if (!_0x318776.length) {
    return false;
  }
  const _0x184e1e = (_0x4504de.field22 || "").trim().toLowerCase();
  const _0x4d76ab = (_0x4504de.field23 || "").trim().toLowerCase();
  return _0x318776.some(_0x2178c1 => {
    const _0x5ea70c = _0x2178c1.toLowerCase();
    return _0x184e1e === _0x5ea70c || _0x184e1e.includes(_0x5ea70c) || _0x4d76ab === _0x5ea70c || _0x4d76ab.includes(_0x5ea70c);
  });
}
const colConfig = [{
  name: "S.N.",
  cls: "col-xs",
  fi: 1
}, {
  name: "Grad. No.",
  cls: "col-sm",
  gradNo: true
}, {
  name: "Unique ID",
  cls: "col-sm",
  fi: 2
}, {
  name: "Name",
  cls: "col-lg",
  fi: 3
}, {
  name: "Category",
  cls: "col-sm",
  fi: 4
}, {
  name: "Gender",
  cls: "col-sm",
  fi: 5
}, {
  name: "Date of Birth",
  cls: "col-md",
  fi: 6
}, {
  name: "Prof. Qual.",
  cls: "col-md",
  fi: 7
}, {
  name: "UG Qual-1",
  cls: "col-sm",
  fi: 8
}, {
  name: "UG1 Sub-1",
  cls: "col-md",
  fi: 9
}, {
  name: "UG1 Sub-2",
  cls: "col-md",
  fi: 10
}, {
  name: "UG1 Sub-3",
  cls: "col-md",
  fi: 11
}, {
  name: "UG Qual-2",
  cls: "col-sm",
  fi: 12
}, {
  name: "UG2 Sub-1",
  cls: "col-md",
  fi: 13
}, {
  name: "UG2 Sub-2",
  cls: "col-md",
  fi: 14
}, {
  name: "UG2 Sub-3",
  cls: "col-md",
  fi: 15
}, {
  name: "Home District",
  cls: "col-md",
  fi: 16
}, {
  name: "First Appt.",
  cls: "col-md",
  fi: 17
}, {
  name: "Seniority Date",
  cls: "col-md",
  fi: 18
}, {
  name: "Transfer Date",
  cls: "col-md",
  fi: 19
}, {
  name: "Present Posting Place",
  cls: "col-xl",
  fi: 20
}, {
  name: "UDISE Code",
  cls: "col-md",
  fi: 21
}, {
  name: "Present District",
  cls: "col-lg",
  fi: 23
}, {
  name: "Remark",
  cls: "col-lg",
  fi: 24
}, {
  name: "उच्च पद ज्वाइन",
  cls: "col-md",
  fi: 25
}, {
  name: "उच्च पद शाला",
  cls: "col-xl",
  fi: 26
}, {
  name: "उच्च पद UDISE",
  cls: "col-md",
  fi: 27
}, {
  name: "उच्च पद जिला",
  cls: "col-lg",
  fi: 28
}, {
  name: "Status",
  cls: "col-md",
  fi: 29
}, {
  name: "Updated By",
  cls: "col-lg",
  fi: 30
}, {
  name: "View Document",
  cls: "col-md",
  fi: 31
}, {
  name: "काउं. विषय UG-1 (C1)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 32
}, {
  name: "काउं. विषय UG-1 (C2)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 33
}, {
  name: "काउं. विषय UG-1 (C3)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 34
}, {
  name: "काउं. विषय UG-1 (C4)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 35
}, {
  name: "काउं. विषय UG-2 (D1)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 36
}, {
  name: "काउं. विषय UG-2 (D2)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 37
}, {
  name: "काउं. विषय UG-2 (D3)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 38
}, {
  name: "काउं. विषय UG-2 (D4)",
  cls: "col-md",
  officeOnly: true,
  dpiOnly: true,
  fi: 39
}, {
  name: "फाइनल काउं. विषय-1",
  cls: "col-md",
  officeOnly: true,
  finalCS: true,
  fi: 40
}, {
  name: "फाइनल काउं. विषय-2",
  cls: "col-md",
  officeOnly: true,
  finalCS: true,
  fi: 41
}, {
  name: "फाइनल काउं. विषय-3",
  cls: "col-md",
  officeOnly: true,
  finalCS: true,
  fi: 42
}, {
  name: "फाइनल काउं. विषय-4",
  cls: "col-md",
  officeOnly: true,
  finalCS: true,
  fi: 43
}];
const fieldNames = {
  field1: "S.N.",
  field2: "Unique ID",
  field3: "Name",
  field4: "Category",
  field5: "Gender",
  field6: "Date of Birth",
  field7: "Professional Qualification",
  field8: "UG Qualification-1",
  field9: "UG1 Subject-1",
  field10: "UG1 Subject-2",
  field11: "UG1 Subject-3",
  field12: "UG Qualification-2",
  field13: "UG2 Subject-1",
  field14: "UG2 Subject-2",
  field15: "UG2 Subject-3",
  field16: "Home District",
  field17: "Date of First Appointment",
  field18: "Seniority Date",
  field19: "Transfer Date",
  field20: "Present Posting Place",
  field21: "UDISE Code",
  field22: "Present District",
  field23: "Present District",
  field24: "Remark",
  field25: "उच्च पद ज्वाइन (YES/NO)",
  field26: "उच्च पद शाला नाम",
  field27: "उच्च पद UDISE",
  field28: "उच्च पद जिला",
  field29: "Status",
  field30: "Updated By",
  field31: "Document"
};
window.fullData = [];
window.filteredData = [];
let historyStore = [];
let listZoom = 11;
let formZoom = 12;
let selectedRowElement = null;
let currentUser = null;
async function loadDataFromSupabase() {
  const _0xa366cc = document.getElementById("dataLoadingOverlay");
  let _0x46730b = false;
  try {
    _0x46730b = await _origLoadData();
  } catch (_0x3eb5e8) {
    _0x46730b = false;
  }
  if (!_0x46730b) {
    if (_0xa366cc) {
      _0xa366cc.style.display = "none";
    }
    const _0xcd270a = document.getElementById("dataLoadMsg");
    if (_0xcd270a) {
      _0xcd270a.textContent = "❌ Supabase से डेटा लोड नहीं हो सका। कृपया पुनः लॉगिन करें या इंटरनेट जांचें।";
    }
    window.fullData = [];
    window.filteredData = [];
    if (typeof renderVirtual === "function") {
      renderVirtual();
    }
  }
  return _0x46730b;
}
function updateClock() {
  const _0x2e8af9 = document.getElementById("clockDisplay");
  if (_0x2e8af9) {
    _0x2e8af9.textContent = new Date().toLocaleString("en-IN", {
      hour12: true
    });
  }
}
setInterval(updateClock, 1000);
updateClock();
let keyTimer;
window.addEventListener("keydown", _0x4473b9 => {
  if (_0x4473b9.key.toLowerCase() === "a" && !keyTimer) {
    keyTimer = setTimeout(() => {
      const _0x570f3b = window.currentUser;
      if (_0x570f3b === "DPI") {
        openDpiPasswordModal();
      } else if (_0x570f3b && JD_DISTRICTS[_0x570f3b]) {
        openAdminPanelWithAuth();
      }
    }, 2000);
  }
});
window.addEventListener("keyup", _0x182181 => {
  if (_0x182181.key.toLowerCase() === "a") {
    clearTimeout(keyTimer);
    keyTimer = null;
  }
});
function myAlert(_0x368ea9) {
  var _0x141961 = document.getElementById("customAlert");
  if (!_0x141961) {
    return;
  }
  document.getElementById("alertMsg").textContent = _0x368ea9;
  _0x141961.style.zIndex = "99999999";
  _0x141961.style.display = "flex";
}
function closeAlert() {
  var _0x55cb43 = document.getElementById("customAlert");
  if (!_0x55cb43) {
    return;
  }
  _0x55cb43.style.display = "none";
  _0x55cb43.style.zIndex = "";
}
window.alert = function (_0x5e2f9a) {
  myAlert(_0x5e2f9a);
};
function openDpiPasswordModal() {
  document.getElementById("dpiPassModal").style.display = "flex";
  document.getElementById("dpiPassInput").value = "";
  document.getElementById("dpiPassErr").textContent = "";
  setTimeout(() => document.getElementById("dpiPassInput").focus(), 100);
}
function verifyDpiPass() {
  if (document.getElementById("dpiPassInput").value !== "1782") {
    document.getElementById("dpiPassErr").textContent = "❌ Galat password!";
    document.getElementById("dpiPassInput").value = "";
    return;
  }
  document.getElementById("dpiPassModal").style.display = "none";
  openAdminPanelSetup();
}
let _pwPanelTab = "jd";
let _pwChangeTarget = null;
function openPwPanel() {
  const _0x12d1d1 = document.getElementById("pwPanelOverlay");
  _0x12d1d1.style.display = "flex";
  document.getElementById("pwPanelAuth").style.display = "block";
  document.getElementById("pwPanelContent").style.display = "none";
  document.getElementById("pwPanelAuthInput").value = "";
  document.getElementById("pwPanelAuthErr").textContent = "";
  setTimeout(() => document.getElementById("pwPanelAuthInput").focus(), 100);
}
function closePwPanel() {
  document.getElementById("pwPanelOverlay").style.display = "none";
}
async function verifyPwPanel() {
  const _0x5af2f1 = document.getElementById("pwPanelAuthInput").value.trim();
  try {
    const _0xa9028 = getSupabase();
    if (_0xa9028) {
      const {
        data: _0xbc3d6b,
        error: _0x2d14eb
      } = await _0xa9028.from("ps_users").select("user_id,password").eq("is_active", true);
      if (!_0x2d14eb && _0xbc3d6b && _0xbc3d6b.length) {
        window._sbPasswords = {};
        _0xbc3d6b.forEach(_0x4d1298 => {
          window._sbPasswords[_0x4d1298.user_id] = _0x4d1298.password;
        });
      }
    }
  } catch (_0x2e49bb) {}
  const _0x102e62 = getEffectivePassword("DPI") || "1782";
  if (_0x5af2f1 !== _0x102e62) {
    document.getElementById("pwPanelAuthErr").textContent = "❌ गलत Password!";
    document.getElementById("pwPanelAuthInput").value = "";
    setTimeout(() => document.getElementById("pwPanelAuthInput").focus(), 50);
    return;
  }
  document.getElementById("pwPanelAuth").style.display = "none";
  const _0x278300 = document.getElementById("pwPanelContent");
  _0x278300.style.display = "flex";
  _0x278300.style.flexDirection = "column";
  _pwPanelTab = "jd";
  setPwTab("jd");
}
async function setPwTab(_0x37bf2b) {
  _pwPanelTab = _0x37bf2b;
  ["jd", "dist", "dpi", "all"].forEach(_0x4c5cbf => {
    const _0xd18033 = document.getElementById("tab" + _0x4c5cbf.charAt(0).toUpperCase() + _0x4c5cbf.slice(1));
    if (_0xd18033) {
      _0xd18033.classList.toggle("active", _0x4c5cbf === _0x37bf2b);
    }
  });
  document.getElementById("pwPanelSearch").value = "";
  try {
    const _0x1bb5a4 = getSupabase();
    if (_0x1bb5a4) {
      const {
        data: _0x1c365e,
        error: _0x178708
      } = await _0x1bb5a4.from("ps_users").select("user_id,password").eq("is_active", true);
      if (!_0x178708 && _0x1c365e && _0x1c365e.length) {
        window._sbPasswords = {};
        _0x1c365e.forEach(_0xf3ef07 => {
          window._sbPasswords[_0xf3ef07.user_id] = _0xf3ef07.password;
        });
      }
    }
  } catch (_0x39472a) {}
  renderPwPanel();
}
function _getPwEntries() {
  const _0x53ac29 = window._customPasswords || {};
  const _0x3d1c6f = [{
    id: "JDBHOPAL",
    label: "JD Bhopal",
    type: "JD",
    sub: "भोपाल संभाग"
  }, {
    id: "JDGWALIOR",
    label: "JD Gwalior",
    type: "JD",
    sub: "ग्वालियर संभाग"
  }, {
    id: "JDINDORE",
    label: "JD Indore",
    type: "JD",
    sub: "इंदौर संभाग"
  }, {
    id: "JDJABALPUR",
    label: "JD Jabalpur",
    type: "JD",
    sub: "जबलपुर संभाग"
  }, {
    id: "JDUJJAIN",
    label: "JD Ujjain",
    type: "JD",
    sub: "उज्जैन संभाग"
  }, {
    id: "JDSAGAR",
    label: "JD Sagar",
    type: "JD",
    sub: "सागर संभाग"
  }, {
    id: "JDREWA",
    label: "JD Rewa",
    type: "JD",
    sub: "रीवा संभाग"
  }, {
    id: "JDNARMADAPURAM",
    label: "JD Narmadapuram",
    type: "JD",
    sub: "नर्मदापुरम संभाग"
  }, {
    id: "JDSHAHDOL",
    label: "JD Shahdol",
    type: "JD",
    sub: "शहडोल संभाग"
  }];
  const _0x3da351 = Object.entries(DEO_DISTRICT).map(([_0x3e7471, _0xd71f02]) => ({
    id: _0x3e7471,
    label: "DEO " + _0xd71f02,
    type: "DEO",
    sub: _0xd71f02 + " जिला"
  }));
  _0x3da351.sort((_0x2da315, _0x3ba377) => _0x2da315.label.localeCompare(_0x3ba377.label));
  const _0x2943a4 = [{
    id: "DPI",
    label: "DPI Admin",
    type: "DPI",
    sub: "Directorate of Public Instruction"
  }];
  const _0x5a4131 = window._sbPasswords || {};
  const _0x51ff45 = _0x57ebf4 => _0x57ebf4.map(_0xdb10bd => ({
    ..._0xdb10bd,
    pass: _0x5a4131[_0xdb10bd.id] || districtCredentials[_0xdb10bd.id] || "-",
    changed: !!_0x5a4131[_0xdb10bd.id] && _0x5a4131[_0xdb10bd.id] !== districtCredentials[_0xdb10bd.id],
    defaultPass: districtCredentials[_0xdb10bd.id] || "-"
  }));
  return {
    jd: _0x51ff45(_0x3d1c6f),
    deo: _0x51ff45(_0x3da351),
    dpi: _0x51ff45(_0x2943a4)
  };
}
function renderPwPanel() {
  const _0x3cc864 = (document.getElementById("pwPanelSearch").value || "").toLowerCase();
  const {
    jd: _0x4578ee,
    deo: _0x1ce9e7,
    dpi: _0xf72dc2
  } = _getPwEntries();
  let _0x35e131 = [];
  if (_pwPanelTab === "jd") {
    _0x35e131 = _0x4578ee;
  } else if (_pwPanelTab === "dist") {
    _0x35e131 = _0x1ce9e7;
  } else if (_pwPanelTab === "dpi") {
    _0x35e131 = _0xf72dc2;
  } else {
    _0x35e131 = [..._0xf72dc2, ..._0x4578ee, ..._0x1ce9e7];
  }
  if (_0x3cc864) {
    _0x35e131 = _0x35e131.filter(_0x2337ec => _0x2337ec.label.toLowerCase().includes(_0x3cc864) || _0x2337ec.id.toLowerCase().includes(_0x3cc864) || (_0x2337ec.sub || "").toLowerCase().includes(_0x3cc864));
  }
  document.getElementById("pwPanelCount").textContent = "कुल: " + _0x35e131.length;
  const _0x15a4ec = document.getElementById("pwPanelTable");
  if (!_0x35e131.length) {
    _0x15a4ec.innerHTML = "<div style=\"text-align:center;padding:30px;color:#999;\">कोई रिकॉर्ड नहीं मिला।</div>";
    return;
  }
  const _0x6783cb = {
    JD: "#1b5e20",
    DEO: "#bf360c",
    DPI: "#1a237e"
  };
  let _0x23c5b9 = "<table><thead><tr><th style=\"width:36px;\">क्र.</th><th style=\"width:150px;\">User ID</th><th>नाम / विवरण</th><th style=\"width:46px;\">Type</th><th style=\"width:90px;text-align:center;\">Password</th><th style=\"width:42px;text-align:center;\">Copy</th><th style=\"width:52px;text-align:center;\">बदलें</th></tr></thead><tbody>";
  _0x35e131.forEach((_0x4142d0, _0x3bc958) => {
    const _0x36c9ed = _0x4142d0.changed ? "<span style=\"font-size:8px;background:#e65100;color:white;padding:1px 4px;border-radius:2px;margin-left:4px;vertical-align:middle;\">बदला</span>" : "";
    _0x23c5b9 += "<tr>\n      <td style=\"color:#aaa;text-align:center;\">" + (_0x3bc958 + 1) + "</td>\n      <td style=\"font-weight:700;color:#4a148c;font-family:monospace;font-size:11px;\">" + _0x4142d0.id + "</td>\n      <td style=\"font-size:11px;\"><b>" + _0x4142d0.label + "</b><br><span style=\"color:#888;font-size:10px;\">" + _0x4142d0.sub + "</span></td>\n      <td style=\"text-align:center;\"><span style=\"padding:2px 5px;border-radius:2px;font-size:9px;font-weight:700;background:" + (_0x6783cb[_0x4142d0.type] || "#333") + ";color:white;\">" + _0x4142d0.type + "</span></td>\n      <td style=\"text-align:center;font-weight:800;font-size:15px;font-family:monospace;color:#b71c1c;letter-spacing:2px;background:#fff9c4;\">" + _0x4142d0.pass + _0x36c9ed + "</td>\n      <td style=\"text-align:center;\"><button onclick=\"navigator.clipboard.writeText('" + _0x4142d0.pass + "').then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1100);})\" style=\"padding:3px 7px;border:1px solid #ce93d8;border-radius:3px;background:#f3e5f5;cursor:pointer;font-size:11px;\" title=\"Copy\">📋</button></td>\n      <td style=\"text-align:center;\"><button onclick=\"openPwChange('" + _0x4142d0.id + "','" + _0x4142d0.label + "')\" style=\"padding:3px 7px;border:1px solid #9fa8da;border-radius:3px;background:#e8eaf6;cursor:pointer;font-size:11px;\" title=\"Password बदलें\">✏️</button></td>\n    </tr>";
  });
  _0x23c5b9 += "</tbody></table>";
  _0x15a4ec.innerHTML = _0x23c5b9;
}
function filterPwPanel() {
  renderPwPanel();
}
function copyAllPasswords() {
  const {
    jd: _0x49564f,
    deo: _0x1904b1,
    dpi: _0xf9fe09
  } = _getPwEntries();
  let _0x415132 = "=== DPI ===\n" + _0xf9fe09.map(_0x2a69bb => _0x2a69bb.id + "\t" + _0x2a69bb.pass).join("\n");
  _0x415132 += "\n\n=== JD PASSWORDS ===\n" + _0x49564f.map(_0x6598cb => _0x6598cb.id + "\t" + _0x6598cb.pass).join("\n");
  _0x415132 += "\n\n=== DEO PASSWORDS ===\n" + _0x1904b1.map(_0x3cc19d => _0x3cc19d.id + " (" + _0x3cc19d.label + ")\t" + _0x3cc19d.pass).join("\n");
  navigator.clipboard.writeText(_0x415132).then(() => {
    myAlert("✅ सभी Passwords Clipboard में Copy हो गए!");
  });
}
function openPwChange(_0x44d4da, _0x94d8ab) {
  _pwChangeTarget = _0x44d4da;
  document.getElementById("pwChangeLabel").textContent = "✏️ " + _0x94d8ab + " (" + _0x44d4da + ")";
  document.getElementById("pwChangeNew").value = "";
  document.getElementById("pwChangeConfirm").value = "";
  document.getElementById("pwChangeMsg").textContent = "";
  document.getElementById("pwChangeBox").style.display = "flex";
  setTimeout(() => document.getElementById("pwChangeNew").focus(), 100);
}
function closePwChange() {
  document.getElementById("pwChangeBox").style.display = "none";
  _pwChangeTarget = null;
}
function pwChangePreview() {
  const _0x4c5fa9 = document.getElementById("pwChangeNew").value;
  const _0x16d046 = document.getElementById("pwChangeConfirm").value;
  if (_0x16d046 && _0x4c5fa9 !== _0x16d046) {
    document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:red;\">❌ Passwords match नहीं हैं</span>";
  } else {
    document.getElementById("pwChangeMsg").textContent = "";
  }
}
async function savePwChange() {
  if (!_pwChangeTarget) {
    closePwChange();
    return;
  }
  const _0x1591d2 = (document.getElementById("pwChangeNew").value || "").trim();
  const _0x55bd97 = (document.getElementById("pwChangeConfirm").value || "").trim();
  if (!_0x1591d2) {
    document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:red;\">❌ नया Password खाली नहीं हो सकता।</span>";
    return;
  }
  if (_0x1591d2 !== _0x55bd97) {
    document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:red;\">❌ दोनों Passwords मेल नहीं खाते।</span>";
    return;
  }
  if (_0x1591d2.length < 3) {
    document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:red;\">❌ Password कम से कम 3 अक्षर का होना चाहिए।</span>";
    return;
  }
  const _0x566bc2 = getSupabase();
  const _0xe42eb1 = getEffectivePassword(_pwChangeTarget) || "-";
  if (_0x566bc2) {
    const {
      error: _0x28c6bf
    } = await _0x566bc2.from("ps_users").update({
      password: _0x1591d2
    }).eq("user_id", _pwChangeTarget);
    if (_0x28c6bf) {
      document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:red;\">❌ Save nahi hua: " + _0x28c6bf.message + "</span>";
      return;
    }
    if (!window._sbPasswords) {
      window._sbPasswords = {};
    }
    window._sbPasswords[_pwChangeTarget] = _0x1591d2;
  }
  const _0x27e12c = {
    userId: _pwChangeTarget,
    dateTime: new Date().toLocaleString("en-IN", {
      hour12: true
    }),
    timestamp: Date.now(),
    resetBy: window.currentUser || "DPI",
    oldPass: _0xe42eb1,
    newPass: _0x1591d2
  };
  if (!window._pwResetLog) {
    window._pwResetLog = [];
  }
  window._pwResetLog.unshift(_0x27e12c);
  if (typeof savePwResetLogCloud === "function") {
    savePwResetLogCloud(_0x27e12c);
  }
  if (auditLog) {
    auditLog("PASSWORD_CHANGED", "DPI changed password for: " + _pwChangeTarget);
  }
  document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:green;\">✅ Password सफलतापूर्वक Supabase में Save हो गया!</span>";
  setTimeout(() => {
    closePwChange();
    renderPwPanel();
  }, 900);
}
async function resetToDefault() {
  if (!_pwChangeTarget) {
    return;
  }
  if (!confirm(_pwChangeTarget + " का Password Default पर Reset करें?")) {
    return;
  }
  const _0x1d56b2 = getSupabase();
  const _0x3c0e81 = districtCredentials[_pwChangeTarget] || "1782";
  if (_0x1d56b2) {
    const {
      error: _0x40369e
    } = await _0x1d56b2.from("ps_users").update({
      password: _0x3c0e81
    }).eq("user_id", _pwChangeTarget);
    if (_0x40369e) {
      alert("Reset nahi hua: " + _0x40369e.message);
      return;
    }
    if (!window._sbPasswords) {
      window._sbPasswords = {};
    }
    window._sbPasswords[_pwChangeTarget] = _0x3c0e81;
  }
  document.getElementById("pwChangeMsg").innerHTML = "<span style=\"color:#e65100;\">↺ Default Password Restore हो गया!</span>";
  setTimeout(() => {
    closePwChange();
    renderPwPanel();
  }, 800);
}
async function switchApTab(_0x2b5c74) {
  ["settings", "maintenance", "passwords"].forEach(_0x512346 => {
    const _0x1ef5ca = document.getElementById("apTab_" + _0x512346);
    const _0x4dd810 = document.getElementById("apTabContent_" + _0x512346);
    if (_0x1ef5ca) {
      _0x1ef5ca.style.background = _0x512346 === _0x2b5c74 ? "white" : "transparent";
      _0x1ef5ca.style.color = _0x512346 === _0x2b5c74 ? "#0f2a4a" : "#64748b";
      _0x1ef5ca.style.borderBottom = _0x512346 === _0x2b5c74 ? "3px solid #1d6fce" : "3px solid transparent";
      _0x1ef5ca.style.fontWeight = _0x512346 === _0x2b5c74 ? "700" : "600";
    }
    if (_0x4dd810) {
      _0x4dd810.style.display = _0x512346 === _0x2b5c74 ? "block" : "none";
    }
  });
  if (_0x2b5c74 === "passwords") {
    renderApPasswords();
  }
  if (_0x2b5c74 === "maintenance") {
    requestAnimationFrame(async () => {
      await loadMaintSettings();
    });
  }
}
window._maintSettings = {};
async function loadMaintSettings() {
  const _0x4ea0f0 = document.getElementById("maintSaveMsg");
  if (_0x4ea0f0) {
    _0x4ea0f0.style.color = "#64748b";
    _0x4ea0f0.textContent = "⏳ Loading...";
  }
  try {
    const _0x1f9604 = await _sbSettingGet("__maint_settings__");
    window._maintSettings = _0x1f9604 || {};
  } catch (_0x237916) {
    window._maintSettings = {};
  }
  if (_0x4ea0f0) {
    _0x4ea0f0.textContent = "";
  }
  const _0x459168 = window._maintSettings;
  const _0x3b1ef2 = document.getElementById("maintToggle");
  const _0x4f4512 = document.getElementById("maintToggleSlider");
  const _0x4b25c3 = document.getElementById("maintToggleKnob");
  const _0x1cc711 = document.getElementById("maintStatus");
  const _0x9acfd7 = !!_0x459168.active;
  if (_0x3b1ef2) {
    _0x3b1ef2.checked = _0x9acfd7;
  }
  if (_0x4f4512) {
    _0x4f4512.style.background = _0x9acfd7 ? "#16a34a" : "#ccc";
  }
  if (_0x4b25c3) {
    _0x4b25c3.style.left = _0x9acfd7 ? "23px" : "3px";
  }
  if (_0x1cc711) {
    _0x1cc711.textContent = "Status: " + (_0x9acfd7 ? "ON 🔴" : "OFF");
    _0x1cc711.style.color = _0x9acfd7 ? "#c62828" : "#64748b";
    _0x1cc711.style.background = _0x9acfd7 ? "#fee2e2" : "#f1f5f9";
  }
  if (document.getElementById("maintMessage")) {
    document.getElementById("maintMessage").value = _0x459168.message || "";
  }
  function _0x2a3081(_0x569e66) {
    if (!_0x569e66 || typeof _0x569e66 !== "string") {
      return "";
    }
    const _0x11e51d = _0x569e66.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/);
    if (_0x11e51d) {
      return _0x11e51d[1];
    } else {
      return "";
    }
  }
  const _0x438021 = document.getElementById("maintStart");
  const _0x18fcbf = document.getElementById("maintEnd");
  if (_0x438021) {
    _0x438021.value = "";
    _0x438021.value = _0x2a3081(_0x459168.startTime);
  }
  if (_0x18fcbf) {
    _0x18fcbf.value = "";
    _0x18fcbf.value = _0x2a3081(_0x459168.endTime);
  }
  console.log("[Maint Load] startTime:", _0x459168.startTime, "→", _0x2a3081(_0x459168.startTime));
  console.log("[Maint Load] endTime:  ", _0x459168.endTime, "→", _0x2a3081(_0x459168.endTime));
  if (document.getElementById("maintDuration")) {
    document.getElementById("maintDuration").value = _0x459168.duration || "";
  }
  if (document.getElementById("maintShowJD")) {
    document.getElementById("maintShowJD").checked = _0x459168.showJD !== false;
  }
  if (document.getElementById("maintShowDEO")) {
    document.getElementById("maintShowDEO").checked = _0x459168.showDEO !== false;
  }
}
function apToggleMaint(_0x41531e) {
  const _0x5aaad3 = document.getElementById("maintToggleSlider");
  const _0x1beef1 = document.getElementById("maintToggleKnob");
  const _0x262fcc = document.getElementById("maintStatus");
  if (_0x5aaad3) {
    _0x5aaad3.style.background = _0x41531e ? "#16a34a" : "#ccc";
  }
  if (_0x1beef1) {
    _0x1beef1.style.left = _0x41531e ? "23px" : "3px";
  }
  if (_0x262fcc) {
    _0x262fcc.textContent = "Status: " + (_0x41531e ? "ON 🔴" : "OFF");
    _0x262fcc.style.color = _0x41531e ? "#c62828" : "#64748b";
    _0x262fcc.style.background = _0x41531e ? "#fee2e2" : "#f1f5f9";
  }
}
async function saveMaintSettings() {
  const _0x4e1388 = document.getElementById("maintStart").value;
  const _0x3d446b = document.getElementById("maintEnd").value;
  const _0x3bf940 = {
    active: document.getElementById("maintToggle").checked,
    message: document.getElementById("maintMessage").value.trim(),
    startTime: _0x4e1388 || "",
    endTime: _0x3d446b || "",
    duration: document.getElementById("maintDuration").value.trim(),
    showJD: document.getElementById("maintShowJD").checked,
    showDEO: document.getElementById("maintShowDEO").checked,
    savedAt: new Date().toISOString()
  };
  window._maintSettings = _0x3bf940;
  const _0x27d93d = document.getElementById("maintSaveMsg");
  const _0x25819e = await _sbSettingSet("__maint_settings__", _0x3bf940);
  if (!_0x25819e) {
    if (_0x27d93d) {
      _0x27d93d.style.color = "#c62828";
      _0x27d93d.textContent = "❌ Save failed — Supabase error";
    }
    return;
  }
  if (_0x27d93d) {
    _0x27d93d.style.color = "#16a34a";
    _0x27d93d.textContent = "✅ Settings Supabase में Save हो गई!";
    setTimeout(() => _0x27d93d.textContent = "", 2500);
  }
}
function turnOffMaint() {
  if (document.getElementById("maintToggle")) {
    document.getElementById("maintToggle").checked = false;
  }
  apToggleMaint(false);
  saveMaintSettings();
  const _0x16b6cf = document.getElementById("maintSaveMsg");
  if (_0x16b6cf) {
    _0x16b6cf.style.color = "#16a34a";
    _0x16b6cf.textContent = "✅ Maintenance बंद कर दिया गया!";
    setTimeout(() => _0x16b6cf.textContent = "", 2500);
  }
}
function renderApPasswords() {
  const _0x3faea3 = (document.getElementById("apPwSearch") || {}).value || "";
  const _0x588bb3 = _0x3faea3.toLowerCase();
  const _0x52d26e = window._customPasswords || {};
  const _0x59ab35 = window._sbPasswords || {};
  const _0x3fccc2 = new Set(["DPI", ...Object.keys(JD_DISTRICTS), ...Object.keys(DEO_DISTRICT)]);
  const _0x3840c0 = [{
    id: "DPI",
    label: "DPI",
    type: "DPI"
  }, ...Object.keys(JD_DISTRICTS).map(_0x36335e => ({
    id: _0x36335e,
    label: _0x36335e,
    type: "JD"
  })), ...Object.entries(DEO_DISTRICT).map(([_0x250d4a, _0x19ab24]) => ({
    id: _0x250d4a,
    label: "DEO " + _0x19ab24,
    type: "DEO"
  })), ...Object.keys(_0x59ab35).filter(_0x2b6117 => !_0x3fccc2.has(_0x2b6117)).map(_0x5eee86 => ({
    id: _0x5eee86,
    label: _0x5eee86,
    type: _0x5eee86.startsWith("JD") ? "JD" : _0x5eee86.startsWith("DEO") ? "DEO" : "OTHER"
  }))];
  const _0x24db82 = _0x588bb3 ? _0x3840c0.filter(_0x5070b1 => _0x5070b1.id.toLowerCase().includes(_0x588bb3) || _0x5070b1.label.toLowerCase().includes(_0x588bb3)) : _0x3840c0;
  const _0xc51b8e = {
    DPI: "#1a237e",
    JD: "#1b5e20",
    DEO: "#bf360c",
    OTHER: "#5c5c8a"
  };
  const _0x2929a2 = document.getElementById("apPasswordList");
  if (!_0x2929a2) {
    return;
  }
  if (!_0x24db82.length) {
    _0x2929a2.innerHTML = "<div style=\"text-align:center;padding:20px;color:#aaa;font-size:12px;\">कोई user नहीं मिला</div>";
    return;
  }
  _0x2929a2.innerHTML = _0x24db82.map(_0x17cac7 => {
    const _0x323963 = _0x59ab35[_0x17cac7.id] || _0x52d26e[_0x17cac7.id] || districtCredentials[_0x17cac7.id] || "-";
    const _0x2421b4 = !_0x3fccc2.has(_0x17cac7.id);
    const _0x3479b5 = _0x2421b4 ? "<button onclick=\"deleteCustomUser('" + _0x17cac7.id + "')\" style=\"padding:5px 10px;border:1.5px solid #fca5a5;border-radius:5px;background:#fee2e2;cursor:pointer;font-size:11px;font-weight:700;color:#c62828;\">🗑 Delete</button>" : "";
    return "<div style=\"display:flex;align-items:center;padding:9px 4px;border-bottom:1px solid #f1f5f9;gap:8px;\">\n      <span style=\"font-weight:700;font-size:12px;color:" + (_0xc51b8e[_0x17cac7.type] || "#333") + ";min-width:120px;font-family:monospace;\">" + _0x17cac7.id + "</span>\n      <span style=\"background:" + _0xc51b8e[_0x17cac7.type] + ";color:white;font-size:9px;padding:2px 5px;border-radius:3px;font-weight:700;\">" + _0x17cac7.type + "</span>\n      <span style=\"font-weight:800;font-size:13px;color:#1a237e;font-family:monospace;flex:1;text-align:center;\">" + _0x323963 + "</span>\n      <button onclick=\"openPwChange('" + _0x17cac7.id + "','" + _0x17cac7.label + "')\" style=\"padding:5px 10px;border:1.5px solid #9fa8da;border-radius:5px;background:#e8eaf6;cursor:pointer;font-size:11px;font-weight:700;\">✏️ Edit</button>\n      " + _0x3479b5 + "\n    </div>";
  }).join("");
}
async function deleteCustomUser(_0x52a1d0) {
  if (!confirm("⚠️ User \"" + _0x52a1d0 + "\" ko delete karna chahte hain?")) {
    return;
  }
  const _0x23a0e3 = getSupabase();
  if (_0x23a0e3) {
    const {
      error: _0x3cedc1
    } = await _0x23a0e3.from("ps_users").delete().eq("user_id", _0x52a1d0);
    if (_0x3cedc1) {
      alert("❌ Delete failed: " + _0x3cedc1.message);
      return;
    }
  }
  if (window._sbPasswords) {
    delete window._sbPasswords[_0x52a1d0];
  }
  if (window._customPasswords) {
    delete window._customPasswords[_0x52a1d0];
  }
  if (DEO_DISTRICT[_0x52a1d0]) {
    delete DEO_DISTRICT[_0x52a1d0];
  }
  renderApPasswords();
}
async function createNewUser() {
  const _0x142189 = (document.getElementById("newUserId").value || "").trim().toUpperCase();
  const _0x3bc50a = (document.getElementById("newUserPass").value || "").trim();
  const _0xd0554b = document.getElementById("newUserLevel").value;
  const _0x79fb9a = (document.getElementById("newUserDistrict").value || "").trim();
  const _0x25d531 = document.getElementById("newUserMsg");
  if (!_0x142189 || !_0x3bc50a) {
    if (_0x25d531) {
      _0x25d531.style.color = "#c62828";
      _0x25d531.textContent = "❌ User ID aur Password zaroori hain!";
    }
    return;
  }
  const _0x2df011 = window._sbPasswords || {};
  if (_0x142189 === "DPI" || JD_DISTRICTS[_0x142189] || DEO_DISTRICT[_0x142189] || _0x2df011[_0x142189]) {
    if (_0x25d531) {
      _0x25d531.style.color = "#c62828";
      _0x25d531.textContent = "❌ Yeh User ID pehle se exist karta hai!";
    }
    return;
  }
  if (_0x25d531) {
    _0x25d531.style.color = "#888";
    _0x25d531.textContent = "⏳ Supabase mein save ho raha hai...";
  }
  const _0x3047c3 = getSupabase();
  if (_0x3047c3) {
    const _0x4c997f = {
      user_id: _0x142189,
      password: _0x3bc50a,
      user_type: _0xd0554b,
      label: _0x142189,
      district: _0x79fb9a || null,
      division: null,
      is_active: true
    };
    const {
      error: _0x49acb2
    } = await _0x3047c3.from("ps_users").insert(_0x4c997f);
    if (_0x49acb2) {
      if (_0x25d531) {
        _0x25d531.style.color = "#c62828";
        _0x25d531.textContent = "❌ Supabase Error: " + _0x49acb2.message;
      }
      return;
    }
    if (!window._sbPasswords) {
      window._sbPasswords = {};
    }
    window._sbPasswords[_0x142189] = _0x3bc50a;
  }
  if (!window._customPasswords) {
    window._customPasswords = {};
  }
  window._customPasswords[_0x142189] = _0x3bc50a;
  if (_0xd0554b === "DEO" && _0x79fb9a) {
    DEO_DISTRICT[_0x142189] = _0x79fb9a.toUpperCase();
  }
  if (_0x25d531) {
    _0x25d531.style.color = "#16a34a";
    _0x25d531.textContent = "✅ User \"" + _0x142189 + "\" successfully create ho gaya!";
  }
  document.getElementById("newUserId").value = "";
  document.getElementById("newUserPass").value = "";
  document.getElementById("newUserDistrict").value = "";
  setTimeout(() => {
    if (_0x25d531) {
      _0x25d531.textContent = "";
    }
    renderApPasswords();
  }, 1500);
}
function closeAdminPanel() {
  document.getElementById("dpiControlPanel").style.display = "none";
}
function toggleDPI() {
  openAdminPanelSetup();
}
function openAdminPanelWithAuth() {
  const _0x325cd1 = window.currentUser;
  if (!_0x325cd1) {
    return;
  }
  showPassModal("🔐 Admin Panel Password (apna login password):", function (_0x57e31b) {
    const _0x5927da = getEffectivePassword(_0x325cd1) || "5021";
    if (_0x57e31b !== _0x5927da) {
      document.getElementById("genericPassErr").textContent = "❌ Galat password!";
      return false;
    }
    openAdminPanelSetup();
  });
}
function openAdminPanelSetup() {
  const _0xb8f26b = window.currentUser;
  const _0x12514c = document.getElementById("dpiControlPanel");
  if (_0x12514c.style.display === "block") {
    _0x12514c.style.display = "none";
    return;
  }
  const _0x4de9a6 = document.getElementById("apPanelTitle");
  if (_0x4de9a6) {
    _0x4de9a6.textContent = _0xb8f26b === "DPI" ? "🌐 DPI Admin Panel" : "📍 " + _0xb8f26b + " Admin Panel";
  }
  const _0x45b31e = document.getElementById("apJdControlSection");
  if (_0x45b31e) {
    _0x45b31e.style.display = _0xb8f26b === "DPI" ? "block" : "none";
  }
  if (_0xb8f26b === "DPI") {
    loadApJdList();
  }
  const _0x2c05a1 = document.getElementById("apJdSelectorWrap");
  if (_0x2c05a1) {
    _0x2c05a1.style.display = _0xb8f26b === "DPI" ? "block" : "none";
  }
  document.getElementById("dpiStartDate").value = window._psStart || "";
  document.getElementById("dpiEndDate").value = window._psEnd || "";
  if (_0xb8f26b !== "DPI") {
    loadApDistricts();
  } else {
    const _0x34b24b = document.getElementById("apJdSelect");
    if (_0x34b24b) {
      _0x34b24b.value = "";
    }
    const _0x40778d = document.getElementById("apDistrictList");
    if (_0x40778d) {
      _0x40778d.innerHTML = "<div style=\"color:#aaa;font-size:12px;text-align:center;padding:20px 0;\">⬆️ ऊपर JD चुनें</div>";
    }
    const _0x109165 = document.getElementById("apSelectAllRow");
    if (_0x109165) {
      _0x109165.style.display = "none";
    }
  }
  document.getElementById("apSaveMsg").textContent = "";
  switchApTab("settings");
  _0x12514c.style.display = "block";
}
function _loadClosedJDs() {
  if (!window._closedJDs) {
    window._closedJDs = {};
  }
}
_loadClosedJDs();
function loadApJdList() {
  _loadClosedJDs();
  const _0x183a14 = window._closedJDs || {};
  const _0x2bcf84 = [{
    id: "JDBHOPAL",
    label: "JD Bhopal — भोपाल संभाग"
  }, {
    id: "JDGWALIOR",
    label: "JD Gwalior — ग्वालियर संभाग"
  }, {
    id: "JDINDORE",
    label: "JD Indore — इंदौर संभाग"
  }, {
    id: "JDJABALPUR",
    label: "JD Jabalpur — जबलपुर संभाग"
  }, {
    id: "JDUJJAIN",
    label: "JD Ujjain — उज्जैन संभाग"
  }, {
    id: "JDSAGAR",
    label: "JD Sagar — सागर संभाग"
  }, {
    id: "JDREWA",
    label: "JD Rewa — रीवा संभाग"
  }, {
    id: "JDNARMADAPURAM",
    label: "JD Narmadapuram — नर्मदापुरम संभाग"
  }, {
    id: "JDSHAHDOL",
    label: "JD Shahdol — शहडोल संभाग"
  }];
  const _0x313c79 = document.getElementById("apJdList");
  if (!_0x313c79) {
    return;
  }
  _0x313c79.innerHTML = _0x2bcf84.map(_0x2c5dbf => {
    const _0x2519d4 = !!_0x183a14[_0x2c5dbf.id];
    return "<label class=\"ap-dist-row\">\n      <input type=\"checkbox\" value=\"" + _0x2c5dbf.id + "\" " + (_0x2519d4 ? "checked" : "") + " style=\"width:15px;height:15px;cursor:pointer;flex-shrink:0;\" onchange=\"apOnJdChange(this,'" + _0x2c5dbf.id + "')\">\n      <span class=\"ap-dist-name\" style=\"font-size:11px;\">" + _0x2c5dbf.label + "</span>\n      <span class=\"ap-dist-status " + (_0x2519d4 ? "ap-status-closed" : "ap-status-open") + "\" id=\"apJdBadge_" + _0x2c5dbf.id + "\">" + (_0x2519d4 ? "🔴 बंद" : "🟢 चालू") + "</span>\n    </label>";
  }).join("");
}
function apOnJdChange(_0x6de8a1, _0x9445f) {
  const _0x1d6aaf = document.getElementById("apJdBadge_" + _0x9445f);
  if (!_0x1d6aaf) {
    return;
  }
  _0x1d6aaf.className = "ap-dist-status " + (_0x6de8a1.checked ? "ap-status-closed" : "ap-status-open");
  _0x1d6aaf.textContent = _0x6de8a1.checked ? "🔴 बंद" : "🟢 चालू";
}
async function saveJdPortalControl() {
  _loadClosedJDs();
  const _0x17b5a7 = document.querySelectorAll("#apJdList input[type=checkbox]");
  if (!_0x17b5a7.length) {
    return;
  }
  _0x17b5a7.forEach(_0x2bc14d => {
    if (_0x2bc14d.checked) {
      window._closedJDs[_0x2bc14d.value] = true;
    } else {
      delete window._closedJDs[_0x2bc14d.value];
    }
  });
  const _0xfca0d5 = {
    closedJDs: window._closedJDs || {},
    closedDistricts: window._closedDistricts || {}
  };
  await _sbSettingSet("__closed_settings__", _0xfca0d5);
  const _0x2a2cf2 = document.getElementById("apSaveMsg");
  if (_0x2a2cf2) {
    _0x2a2cf2.style.color = "#7b1fa2";
    _0x2a2cf2.textContent = "✅ JD Portal status Supabase में Save हो गया!";
  }
  if (typeof checkLockStatus === "function") {
    checkLockStatus();
  }
}
function _loadClosedDistricts() {
  if (!window._closedDistricts) {
    window._closedDistricts = {};
  }
}
_loadClosedDistricts();
function loadApDistricts() {
  const _0x368054 = window.currentUser;
  let _0x1fced3 = [];
  if (_0x368054 === "DPI") {
    const _0x1af7e1 = (document.getElementById("apJdSelect") || {}).value;
    if (!_0x1af7e1) {
      const _0x4f7418 = document.getElementById("apDistrictList");
      if (_0x4f7418) {
        _0x4f7418.innerHTML = "<div style=\"color:#aaa;font-size:12px;text-align:center;padding:20px 0;\">⬆️ JD चुनें → जिले दिखेंगे</div>";
      }
      const _0x1cc5fd = document.getElementById("apSelectAllRow");
      if (_0x1cc5fd) {
        _0x1cc5fd.style.display = "none";
      }
      return;
    }
    _0x1fced3 = JD_DISTRICTS[_0x1af7e1] || [];
  } else if (JD_DISTRICTS[_0x368054]) {
    _0x1fced3 = JD_DISTRICTS[_0x368054];
  }
  _loadClosedDistricts();
  const _0x136545 = window._closedDistricts || {};
  const _0x142ffd = document.getElementById("apDistrictList");
  if (!_0x142ffd) {
    return;
  }
  if (!_0x1fced3.length) {
    _0x142ffd.innerHTML = "<div style=\"color:#aaa;font-size:12px;text-align:center;padding:20px 0;\">कोई जिला नहीं मिला</div>";
    return;
  }
  const _0x330b26 = _0x1fced3.map(_0x44038d => {
    const _0x24e1e9 = !!_0x136545[_0x44038d];
    return "<label class=\"ap-dist-row\">\n      <input type=\"checkbox\" value=\"" + _0x44038d + "\" " + (_0x24e1e9 ? "checked" : "") + " style=\"width:15px;height:15px;cursor:pointer;flex-shrink:0;\" onchange=\"apOnDistChange()\">\n      <span class=\"ap-dist-name\">" + _0x44038d + "</span>\n      <span class=\"ap-dist-status " + (_0x24e1e9 ? "ap-status-closed" : "ap-status-open") + "\">" + (_0x24e1e9 ? "🔴 बंद" : "🟢 चालू") + "</span>\n    </label>";
  }).join("");
  _0x142ffd.innerHTML = _0x330b26;
  const _0x2e888d = document.getElementById("apSelectAllRow");
  if (_0x2e888d) {
    _0x2e888d.style.display = "block";
  }
  _syncSelectAll();
}
function apOnDistChange() {
  _syncSelectAll();
  const _0x462f30 = document.querySelectorAll("#apDistrictList .ap-dist-row");
  _0x462f30.forEach(_0x79c62b => {
    const _0x71580a = _0x79c62b.querySelector("input[type=checkbox]");
    const _0x19b6f9 = _0x79c62b.querySelector(".ap-dist-status");
    if (!_0x71580a || !_0x19b6f9) {
      return;
    }
    _0x19b6f9.className = "ap-dist-status " + (_0x71580a.checked ? "ap-status-closed" : "ap-status-open");
    _0x19b6f9.textContent = _0x71580a.checked ? "🔴 बंद" : "🟢 चालू";
  });
}
function _syncSelectAll() {
  const _0x36d3be = document.querySelectorAll("#apDistrictList input[type=checkbox]");
  const _0x11a68e = document.getElementById("apSelectAll");
  if (!_0x11a68e || !_0x36d3be.length) {
    return;
  }
  const _0x2ef551 = [..._0x36d3be].filter(_0x104a66 => _0x104a66.checked).length;
  _0x11a68e.checked = _0x2ef551 === _0x36d3be.length;
  _0x11a68e.indeterminate = _0x2ef551 > 0 && _0x2ef551 < _0x36d3be.length;
}
function apToggleAll(_0x44f738) {
  const _0x1b1e6c = document.querySelectorAll("#apDistrictList input[type=checkbox]");
  _0x1b1e6c.forEach(_0x1a889a => {
    _0x1a889a.checked = _0x44f738;
  });
  apOnDistChange();
}
async function savePortalControl() {
  _loadClosedDistricts();
  const _0x2030a2 = document.querySelectorAll("#apDistrictList input[type=checkbox]");
  if (!_0x2030a2.length) {
    myAlert("⚠️ पहले जिले लोड करें।");
    return;
  }
  _0x2030a2.forEach(_0x1e5f5a => {
    if (_0x1e5f5a.checked) {
      window._closedDistricts[_0x1e5f5a.value] = true;
    } else {
      delete window._closedDistricts[_0x1e5f5a.value];
    }
  });
  const _0x11e9e6 = {
    closedJDs: window._closedJDs || {},
    closedDistricts: window._closedDistricts || {}
  };
  await _sbSettingSet("__closed_settings__", _0x11e9e6);
  const _0x4e2c00 = document.getElementById("apSaveMsg");
  if (_0x4e2c00) {
    _0x4e2c00.style.color = "#2e7d32";
    _0x4e2c00.textContent = "✅ Portal status Supabase में Save हो गया!";
  }
  if (typeof checkLockStatus === "function") {
    checkLockStatus();
  }
}
async function saveTimeLimit() {
  const _0xd283bc = document.getElementById("dpiStartDate").value;
  const _0x534b07 = document.getElementById("dpiEndDate").value;
  if (!_0xd283bc || !_0x534b07) {
    myAlert("Please select both dates.");
    return;
  }
  window._psStart = _0xd283bc;
  window._psEnd = _0x534b07;
  await _sbSettingSet("__time_limit__", {
    start: _0xd283bc,
    end: _0x534b07
  });
  updateDeadlineBadge();
  myAlert("✅ Access period Supabase में Save हो गया!");
  checkLockStatus();
}
function checkLockStatus() {
  const _0x3a9335 = window.currentUser || currentUser || null;
  if (_0x3a9335 === "DPI") {
    document.getElementById("lockScreen").style.display = "none";
    return;
  }
  if (!_0x3a9335) {
    document.getElementById("lockScreen").style.display = "none";
    return;
  }
  if (_0x3a9335 && JD_DISTRICTS[_0x3a9335]) {
    _loadClosedJDs();
    const _0x5d9d9e = window._closedJDs || {};
    if (_0x5d9d9e[_0x3a9335]) {
      document.getElementById("lockScreen").style.display = "flex";
      document.getElementById("lockMsg").textContent = _0x3a9335 + " का पोर्टल DPI द्वारा बंद कर दिया गया है। अधिक जानकारी के लिए DPI कार्यालय से संपर्क करें।";
      return;
    }
    document.getElementById("lockScreen").style.display = "none";
    return;
  }
  const _0x1a19fb = DEO_DISTRICT[_0x3a9335];
  if (_0x1a19fb) {
    _loadClosedDistricts();
    const _0xf5f574 = window._closedDistricts || {};
    if (_0xf5f574[_0x1a19fb]) {
      document.getElementById("lockScreen").style.display = "flex";
      document.getElementById("lockMsg").textContent = _0x1a19fb + " जिले का पोर्टल DPI/JD द्वारा बंद कर दिया गया है। अधिक जानकारी के लिए अपने JD कार्यालय से संपर्क करें।";
      return;
    }
  }
  const _0x1fd082 = window._psStart;
  const _0x323dd0 = window._psEnd;
  if (!_0x1fd082 || !_0x323dd0) {
    return;
  }
  const _0x45da91 = new Date().toISOString().split("T")[0];
  if (_0x45da91 < _0x1fd082 || _0x45da91 > _0x323dd0) {
    document.getElementById("lockScreen").style.display = "flex";
    document.getElementById("lockMsg").textContent = "Portal accessible from " + _0x1fd082 + " to " + _0x323dd0 + ". Access has ended.";
  } else {
    document.getElementById("lockScreen").style.display = "none";
  }
}
function updateDeadlineBadge() {
  const _0xe5c0e8 = window._psEnd;
  const _0x2cd8f6 = document.getElementById("deadlineBadge");
  const _0x5711f7 = document.getElementById("deadlineBadgeText");
  if (!_0x2cd8f6 || !_0x5711f7 || !_0xe5c0e8) {
    return;
  }
  const _0x5ccdf7 = _0xe5c0e8.split("-");
  _0x5711f7.textContent = "कार्य करने की अंतिम तिथि: " + (_0x5ccdf7.length === 3 ? _0x5ccdf7[2] + "-" + _0x5ccdf7[1] + "-" + _0x5ccdf7[0] : _0xe5c0e8);
  const _0x27266a = Math.round((new Date(_0xe5c0e8) - new Date()) / 86400000);
  if (_0x27266a < 0) {
    _0x2cd8f6.style.background = "#fee2e2";
    _0x2cd8f6.style.color = "#991b1b";
  } else if (_0x27266a <= 7) {
    _0x2cd8f6.style.background = "#fff3cd";
    _0x2cd8f6.style.color = "#856404";
  } else {
    _0x2cd8f6.style.background = "#dcfce7";
    _0x2cd8f6.style.color = "#166534";
  }
}
window._loginAttempts = {};
window._loginBlocks = {};
function checkLogin() {
  const _0x31659b = document.getElementById("userField").value.trim().toUpperCase();
  const _0x46299b = document.getElementById("passField").value.trim();
  const _0x42f432 = document.getElementById("loginError");
  const _0x321a76 = "ps_block_" + _0x31659b;
  const _0x37bf6e = "ps_att_" + _0x31659b;
  const _0x36a42c = window._loginBlocks[_0x321a76] || null;
  if (_0x36a42c) {
    const _0x54ab12 = Math.ceil((_0x36a42c.until - Date.now()) / 1000);
    if (_0x54ab12 > 0) {
      _0x42f432.textContent = "🔒 Account locked. Try again in " + _0x54ab12 + "s.";
      return;
    } else {
      delete window._loginBlocks[_0x321a76];
      delete window._loginAttempts[_0x37bf6e];
    }
  }
  if (getEffectivePassword(_0x31659b) === _0x46299b) {
    delete window._loginAttempts[_0x37bf6e];
    delete window._loginBlocks[_0x321a76];
    currentUser = _0x31659b;
    window.currentUser = _0x31659b;
    document.getElementById("loginOverlay").style.display = "none";
    const _0x23da0e = document.getElementById("mainApp");
    if (_0x23da0e) {
      _0x23da0e.style.visibility = "visible";
    }
    document.getElementById("userBadge").style.display = "inline-block";
    document.getElementById("userBadge").textContent = "👤 " + _0x31659b;
    document.getElementById("sessionUser").textContent = _0x31659b + " — Logged in";
    document.getElementById("logoutBtn").style.display = "inline-block";
    const _0x19865f = DEO_DISTRICT[_0x31659b];
    if (_0x19865f) {
      document.getElementById("in23").value = _0x19865f;
      document.getElementById("in23").disabled = true;
    }
    if (JD_DISTRICTS[_0x31659b]) {
      document.getElementById("in23").value = _0x31659b.replace("JD", "JD ");
    }
    if (_0x31659b === "DPI") {
      showDpiClearButtons();
      var _0x1f0de8 = document.getElementById("sheetTitleEditBtn");
      if (_0x1f0de8) {
        _0x1f0de8.style.display = "inline-block";
      }
      var _0x477acb = document.getElementById("pwPanelBtn");
      if (_0x477acb) {
        _0x477acb.style.display = "inline-block";
      }
      var _0x401b53 = document.getElementById("adminPanelBtn");
      if (_0x401b53) {
        _0x401b53.style.display = "block";
      }
    }
    if (_0x31659b === "DPI" || JD_DISTRICTS && JD_DISTRICTS[_0x31659b]) {
      var _0x11f98f = document.getElementById("adminPanelBtn");
      if (_0x11f98f) {
        _0x11f98f.style.display = "block";
      }
    }
    updateScopeBadge(_0x31659b);
    buildTableHead();
    buildFilterRow();
    auditLog("LOGIN", "User logged in");
    if (typeof checkLockStatus === "function") {
      checkLockStatus();
    }
    const _0x5edaef = document.getElementById("onlineStatusBar");
    if (_0x5edaef) {
      _0x5edaef.style.display = "flex";
    }
    _supabase = null;
    if (typeof initRealtime === "function") {
      initRealtime();
    }
    if (currentUser === "DPI") {
      window.dpiSelectedDivision = null;
      var _0x3ed962 = document.getElementById("changeDivisionBtn");
      if (_0x3ed962) {
        _0x3ed962.style.display = "inline-block";
      }
      showDpiDivisionSelector(false);
    } else {
      loadDataFromSupabase().then(function (_0x1ba39d) {
        if (_0x1ba39d) {
          renderVirtual();
          updateStorageBadge(true);
        }
      });
    }
  } else {
    let _0x25ed47 = (window._loginAttempts[_0x37bf6e] || 0) + 1;
    window._loginAttempts[_0x37bf6e] = _0x25ed47;
    if (_0x25ed47 >= 3) {
      window._loginBlocks[_0x321a76] = {
        until: Date.now() + 300000
      };
      delete window._loginAttempts[_0x37bf6e];
      _0x42f432.textContent = "🔒 Account locked for 5 minutes.";
    } else {
      _0x42f432.textContent = "❌ Invalid ID or Password. (" + _0x25ed47 + "/3 attempts)";
    }
  }
}
function updateScopeBadge(_0x136a88) {
  const _0x44656e = document.getElementById("scopeBadge");
  if (!_0x44656e) {
    return;
  }
  if (_0x136a88 === "DPI") {
    _0x44656e.style.display = "inline-block";
    _0x44656e.style.background = "#1a237e";
    _0x44656e.style.border = "1px solid #3949ab";
    _0x44656e.style.color = "white";
    _0x44656e.textContent = "🌐 DPI — सम्पूर्ण मध्यप्रदेश";
  } else if (JD_DISTRICTS[_0x136a88]) {
    const _0x4c291f = JD_DISTRICTS[_0x136a88];
    _0x44656e.style.display = "inline-block";
    _0x44656e.style.background = "#1b5e20";
    _0x44656e.style.border = "1px solid #2e7d32";
    _0x44656e.style.color = "white";
    _0x44656e.textContent = "📍 " + _0x136a88 + " — " + _0x4c291f.length + " जिले";
    _0x44656e.title = _0x4c291f.join(", ");
  } else if (DEO_DISTRICT[_0x136a88]) {
    _0x44656e.style.display = "inline-block";
    _0x44656e.style.background = "#bf360c";
    _0x44656e.style.border = "1px solid #e64a19";
    _0x44656e.style.color = "white";
    _0x44656e.textContent = "📌 DEO " + DEO_DISTRICT[_0x136a88] + " — केवल इस जिले का डेटा";
  } else {
    _0x44656e.style.display = "none";
  }
}
function logoutUser() {
  if (!confirm("Are you sure you want to log out?")) {
    return;
  }
  if (typeof _psCleanupRealtime === "function") {
    _psCleanupRealtime();
  }
  currentUser = null;
  window.currentUser = null;
  window.dpiSelectedDivision = null;
  document.getElementById("loginOverlay").style.display = "flex";
  document.getElementById("userBadge").style.display = "none";
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById("sessionUser").textContent = "";
  const _0x4754d7 = document.getElementById("scopeBadge");
  if (_0x4754d7) {
    _0x4754d7.style.display = "none";
  }
  var _0xee034d = document.getElementById("sheetTitleEditBtn");
  if (_0xee034d) {
    _0xee034d.style.display = "none";
  }
  var _0x12b874 = document.getElementById("changeDivisionBtn");
  if (_0x12b874) {
    _0x12b874.style.display = "none";
  }
  var _0x473141 = document.getElementById("pwPanelBtn");
  if (_0x473141) {
    _0x473141.style.display = "none";
  }
  var _0x1cd3d8 = document.getElementById("adminPanelBtn");
  if (_0x1cd3d8) {
    _0x1cd3d8.style.display = "none";
  }
  closeAdminPanel();
  buildTableHead();
  buildFilterRow();
  renderVirtual();
}
function getEffectivePassword(_0x21c98e) {
  const _0x2b985f = window._sbPasswords || {};
  if (_0x2b985f[_0x21c98e]) {
    return _0x2b985f[_0x21c98e];
  }
  const _0x584f7b = window._customPasswords || {};
  return _0x584f7b[_0x21c98e] || districtCredentials[_0x21c98e] || null;
}
window._otpStore = {};
function _generateOTP() {
  return String(Math.floor(100000 + Math.random() * 900000));
}
function _showPwStep(_0x3c994f) {
  [1, 2, 3].forEach(_0x3fad7a => {
    const _0xc320d3 = document.getElementById("psCpStep" + _0x3fad7a);
    if (_0xc320d3) {
      _0xc320d3.style.display = _0x3fad7a === _0x3c994f ? "block" : "none";
    }
  });
}
function openChangePassword() {
  if (document.getElementById("psCpModal")) {
    document.getElementById("psCpModal").remove();
  }
  const _0x48e7f6 = document.createElement("div");
  _0x48e7f6.id = "psCpModal";
  _0x48e7f6.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.78);z-index:10005;display:flex;align-items:center;justify-content:center;";
  _0x48e7f6.innerHTML = "\n  <div style=\"background:white;border-radius:10px;width:90%;max-width:400px;box-shadow:0 15px 40px rgba(0,0,0,0.5);overflow:hidden;font-family:sans-serif;\">\n    <div style=\"background:linear-gradient(90deg,#002e5b,#1565c0);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;\">\n      <b style=\"font-size:15px;\">🔑 Password Change (OTP)</b>\n      <button onclick=\"document.getElementById('psCpModal').remove()\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;\">✕</button>\n    </div>\n\n    <!-- Step 1: User ID -->\n    <div id=\"psCpStep1\" style=\"padding:24px;\">\n      <p style=\"font-size:12px;color:#666;margin:0 0 16px 0;\">अपना User ID डालें और OTP Generate करें।</p>\n      <label style=\"font-size:11px;font-weight:bold;color:#333;\">USER ID</label>\n      <input id=\"psCpUserId\" type=\"text\" placeholder=\"e.g. DEOBHOPAL\"\n        style=\"width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;text-transform:uppercase;font-size:13px;\">\n      <button onclick=\"psGenerateOTP()\"\n        style=\"width:100%;padding:11px;background:#002e5b;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;\">\n        📲 Generate OTP\n      </button>\n      <div id=\"psCpGenMsg\" style=\"margin-top:10px;font-size:12px;text-align:center;\"></div>\n    </div>\n\n    <!-- Step 2: OTP verify -->\n    <div id=\"psCpStep2\" style=\"padding:24px;display:none;\">\n      <div style=\"background:#e3f2fd;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#1565c0;\">\n        📲 OTP generate ho gaya। DPI Admin se OTP lekar neeche darj karein।<br>\n        <span style=\"font-size:10px;color:#888;\">(OTP 10 minutes mein expire ho jayega)</span>\n      </div>\n      <div id=\"psCpOtpReveal\" style=\"display:none;background:#fff3e0;border:1px solid #ff9800;border-radius:6px;padding:10px;margin-bottom:14px;text-align:center;\">\n        <div id=\"psCpOtpRevealLabel\" style=\"font-size:11px;color:#e65100;font-weight:bold;margin-bottom:4px;\">🔐 DPI Admin OTP View</div>\n        <div id=\"psCpOtpVal\" style=\"font-size:28px;font-weight:bold;letter-spacing:8px;color:#0d47a1;\"></div>\n        <div id=\"psCpOtpExp\" style=\"font-size:10px;color:#888;margin-top:4px;\"></div>\n      </div>\n      <label style=\"font-size:11px;font-weight:bold;color:#333;\">OTP ENTER करें</label>\n      <input id=\"psCpOtpInput\" type=\"text\" maxlength=\"6\" placeholder=\"6-digit OTP\"\n        style=\"width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:18px;text-align:center;letter-spacing:6px;font-weight:bold;\">\n      <button onclick=\"psVerifyOTP()\" style=\"width:100%;padding:11px;background:#2e7d32;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;\">✅ OTP Verify करें</button>\n      <button onclick=\"_showPwStep(1)\" style=\"width:100%;padding:8px;background:white;color:#555;border:1px solid #ccc;border-radius:4px;cursor:pointer;font-size:12px;margin-top:8px;\">← वापस जाएं</button>\n      <div id=\"psCpVerifyMsg\" style=\"margin-top:10px;font-size:12px;text-align:center;\"></div>\n    </div>\n\n    <!-- Step 3: New password -->\n    <div id=\"psCpStep3\" style=\"padding:24px;display:none;\">\n      <div style=\"background:#e8f5e9;border-radius:6px;padding:10px 14px;margin-bottom:14px;font-size:12px;color:#2e7d32;font-weight:bold;\">\n        ✅ OTP Verified! अब नया Password सेट करें।\n      </div>\n      <label style=\"font-size:11px;font-weight:bold;color:#333;\">नया PASSWORD</label>\n      <input id=\"psCpNewPass\" type=\"password\" placeholder=\"नया password डालें\"\n        style=\"width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;\">\n      <label style=\"font-size:11px;font-weight:bold;color:#333;\">PASSWORD CONFIRM करें</label>\n      <input id=\"psCpConfirmPass\" type=\"password\" placeholder=\"फिर से डालें\"\n        style=\"width:100%;padding:10px;margin:6px 0 16px;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:13px;\">\n      <div style=\"margin-bottom:12px;\">\n        <div style=\"background:#eee;border-radius:4px;height:6px;overflow:hidden;\">\n          <div id=\"psPwStrBar\" style=\"height:100%;width:0%;border-radius:4px;transition:width 0.3s,background 0.3s;\"></div>\n        </div>\n        <div id=\"psPwStrLabel\" style=\"font-size:10px;color:#888;margin-top:3px;\"></div>\n      </div>\n      <button onclick=\"psSaveNewPassword()\" style=\"width:100%;padding:11px;background:#002e5b;color:white;border:none;border-radius:4px;font-weight:bold;cursor:pointer;font-size:13px;\">💾 Password Save करें</button>\n      <div id=\"psCpSaveMsg\" style=\"margin-top:10px;font-size:12px;text-align:center;\"></div>\n    </div>\n  </div>";
  document.body.appendChild(_0x48e7f6);
  _0x48e7f6.addEventListener("click", _0x192365 => {
    if (_0x192365.target === _0x48e7f6) {
      _0x48e7f6.remove();
    }
  });
  setTimeout(() => {
    const _0x5ad769 = document.getElementById("psCpUserId");
    if (_0x5ad769 && window.currentUser) {
      _0x5ad769.value = window.currentUser;
    }
    const _0x595b68 = document.getElementById("psCpNewPass");
    if (_0x595b68) {
      _0x595b68.addEventListener("input", psPwStrength);
    }
  }, 80);
}
function psGenerateOTP() {
  const _0x280f00 = (document.getElementById("psCpUserId").value || "").trim().toUpperCase();
  const _0xbed07a = document.getElementById("psCpGenMsg");
  if (!_0x280f00) {
    _0xbed07a.innerHTML = "<span style=\"color:red;\">❌ User ID डालें।</span>";
    return;
  }
  if ((!window._sbPasswords || !window._sbPasswords[_0x280f00]) && !districtCredentials[_0x280f00]) {
    _0xbed07a.innerHTML = "<span style=\"color:red;\">❌ यह User ID मौजूद नहीं है।</span>";
    return;
  }
  if (_0x280f00 === "DPI") {
    _0xbed07a.innerHTML = "<span style=\"color:red;\">⛔ DPI का Password इस तरह reset नहीं किया जा सकता।</span>";
    return;
  }
  if (window.currentUser && window.currentUser !== "DPI" && window.currentUser !== _0x280f00) {
    _0xbed07a.innerHTML = "<span style=\"color:red;\">⛔ आप केवल अपना Password reset कर सकते हैं।</span>";
    return;
  }
  const _0x4862bf = _generateOTP();
  const _0x4ff0fc = Date.now() + 600000;
  window._otpStore[_0x280f00] = {
    otp: _0x4862bf,
    expiry: _0x4ff0fc
  };
  auditLog("OTP_GENERATED", "OTP generated for: " + _0x280f00);
  _showPwStep(2);
  const _0x39b910 = document.getElementById("psCpOtpReveal");
  const _0x47a9c5 = window.currentUser === "DPI";
  const _0x4e9045 = window.currentUser && window.currentUser === _0x280f00;
  if (_0x47a9c5 || _0x4e9045) {
    _0x39b910.style.display = "block";
    document.getElementById("psCpOtpVal").innerText = _0x4862bf;
    document.getElementById("psCpOtpExp").innerText = "⏱️ Expires: " + new Date(_0x4ff0fc).toLocaleTimeString("en-IN");
    document.getElementById("psCpOtpRevealLabel").innerText = _0x47a9c5 ? "🔐 DPI Admin OTP View" : "🔐 आपका OTP";
  } else {
    _0x39b910.style.display = "none";
  }
  document.getElementById("psCpUserId")._resolvedUser = _0x280f00;
}
function psVerifyOTP() {
  const _0x335b4c = (document.getElementById("psCpOtpInput").value || "").trim();
  const _0x4e3b75 = document.getElementById("psCpUserId")._resolvedUser || (document.getElementById("psCpUserId").value || "").trim().toUpperCase();
  const _0x643b8c = document.getElementById("psCpVerifyMsg");
  const _0x67e73 = window._otpStore[_0x4e3b75];
  if (!_0x67e73) {
    _0x643b8c.innerHTML = "<span style=\"color:red;\">❌ OTP generate नहीं हुआ। पहले Generate करें।</span>";
    return;
  }
  if (Date.now() > _0x67e73.expiry) {
    _0x643b8c.innerHTML = "<span style=\"color:red;\">⏱️ OTP expire हो गया। नया Generate करें।</span>";
    delete window._otpStore[_0x4e3b75];
    return;
  }
  if (_0x335b4c !== _0x67e73.otp) {
    _0x643b8c.innerHTML = "<span style=\"color:red;\">❌ गलत OTP। पुनः प्रयास करें।</span>";
    return;
  }
  delete window._otpStore[_0x4e3b75];
  auditLog("OTP_VERIFIED", "OTP verified for: " + _0x4e3b75);
  _showPwStep(3);
  document.getElementById("psCpNewPass").dataset.userId = _0x4e3b75;
}
function psPwStrength() {
  const _0x1d019d = document.getElementById("psCpNewPass").value;
  const _0x1e9cc9 = document.getElementById("psPwStrBar");
  const _0x21c809 = document.getElementById("psPwStrLabel");
  let _0x746d0a = 0;
  if (_0x1d019d.length >= 6) {
    _0x746d0a++;
  }
  if (_0x1d019d.length >= 8) {
    _0x746d0a++;
  }
  if (/[A-Z]/.test(_0x1d019d)) {
    _0x746d0a++;
  }
  if (/[0-9]/.test(_0x1d019d)) {
    _0x746d0a++;
  }
  if (/[^A-Za-z0-9]/.test(_0x1d019d)) {
    _0x746d0a++;
  }
  const _0x4ac897 = [{
    w: "0%",
    bg: "#eee",
    t: ""
  }, {
    w: "20%",
    bg: "#e53935",
    t: "बहुत कमज़ोर"
  }, {
    w: "40%",
    bg: "#f57c00",
    t: "कमज़ोर"
  }, {
    w: "60%",
    bg: "#fbc02d",
    t: "ठीक है"
  }, {
    w: "80%",
    bg: "#7cb342",
    t: "अच्छा"
  }, {
    w: "100%",
    bg: "#2e7d32",
    t: "बहुत मज़बूत ✅"
  }];
  const _0x350d64 = _0x4ac897[_0x746d0a] || _0x4ac897[0];
  _0x1e9cc9.style.width = _0x350d64.w;
  _0x1e9cc9.style.background = _0x350d64.bg;
  _0x21c809.innerText = _0x350d64.t;
  _0x21c809.style.color = _0x350d64.bg;
}
async function psSaveNewPassword() {
  const _0x326df3 = document.getElementById("psCpNewPass").value;
  const _0x11c0ea = document.getElementById("psCpConfirmPass").value;
  const _0x4b23ef = document.getElementById("psCpNewPass").dataset.userId;
  const _0x41bc3d = document.getElementById("psCpSaveMsg");
  if (!_0x326df3 || _0x326df3.length < 4) {
    _0x41bc3d.innerHTML = "<span style=\"color:red;\">❌ Password कम से कम 4 characters का होना चाहिए।</span>";
    return;
  }
  if (_0x326df3 !== _0x11c0ea) {
    _0x41bc3d.innerHTML = "<span style=\"color:red;\">❌ Passwords match नहीं हुए। फिर से डालें।</span>";
    return;
  }
  const _0x217cd5 = getSupabase();
  const _0x2dc727 = getEffectivePassword(_0x4b23ef) || "(default)";
  if (_0x217cd5) {
    const {
      error: _0x1eaa89
    } = await _0x217cd5.from("ps_users").update({
      password: _0x326df3
    }).eq("user_id", _0x4b23ef);
    if (_0x1eaa89) {
      _0x41bc3d.innerHTML = "<span style=\"color:red;\">❌ Supabase save failed: " + _0x1eaa89.message + "</span>";
      return;
    }
    if (!window._sbPasswords) {
      window._sbPasswords = {};
    }
    window._sbPasswords[_0x4b23ef] = _0x326df3;
  }
  auditLog("PASSWORD_CHANGED", "Password changed for: " + _0x4b23ef);
  if (!window._pwResetLog) {
    window._pwResetLog = [];
  }
  const _0x29f273 = {
    userId: _0x4b23ef,
    dateTime: new Date().toLocaleString("en-IN", {
      hour12: true
    }),
    timestamp: Date.now(),
    resetBy: window.currentUser || "SELF",
    oldPass: _0x2dc727,
    newPass: _0x326df3
  };
  window._pwResetLog.unshift(_0x29f273);
  savePwResetLogCloud(_0x29f273);
  _0x41bc3d.innerHTML = "<span style=\"color:#2e7d32;font-weight:bold;\">✅ Password Supabase में successfully saved!</span>";
  setTimeout(() => {
    document.getElementById("psCpModal")?.remove();
  }, 1800);
}
function openPwResetLog() {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ यह log केवल DPI Admin देख सकता है।");
    return;
  }
  if (document.getElementById("psPwResetLogModal")) {
    document.getElementById("psPwResetLogModal").remove();
  }
  const _0x56b78f = window._pwResetLog || [];
  let _0x2decfa = "";
  if (!_0x56b78f.length) {
    _0x2decfa = "<tr><td colspan=\"5\" style=\"text-align:center;padding:20px;color:#999;\">कोई Password Reset नहीं हुआ अभी तक।</td></tr>";
  } else {
    _0x56b78f.forEach((_0x4805fd, _0x425cd5) => {
      _0x2decfa += "<tr style=\"background:" + (_0x425cd5 % 2 === 0 ? "#fff" : "#f9f9f9") + "\">\n        <td style=\"padding:10px 12px;border-bottom:1px solid #eee;font-weight:bold;color:#002e5b;\">" + _0x4805fd.userId + "</td>\n        <td style=\"padding:10px 12px;border-bottom:1px solid #eee;color:#333;\">" + _0x4805fd.dateTime + "</td>\n        <td style=\"padding:10px 12px;border-bottom:1px solid #eee;color:#c62828;font-family:monospace;\">" + (_0x4805fd.oldPass || "-") + "</td>\n        <td style=\"padding:10px 12px;border-bottom:1px solid #eee;color:#2e7d32;font-family:monospace;font-weight:bold;\">" + (_0x4805fd.newPass || "-") + "</td>\n        <td style=\"padding:10px 12px;border-bottom:1px solid #eee;color:#555;\">" + _0x4805fd.resetBy + "</td>\n      </tr>";
    });
  }
  const _0x148448 = document.createElement("div");
  _0x148448.id = "psPwResetLogModal";
  _0x148448.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:99999;display:flex;align-items:center;justify-content:center;";
  _0x148448.innerHTML = "\n  <div style=\"background:white;border-radius:10px;width:95%;max-width:700px;box-shadow:0 20px 60px rgba(0,0,0,0.4);overflow:hidden;\">\n    <div style=\"background:#c62828;color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;\">\n      <span style=\"font-weight:bold;font-size:15px;\">🔐 Password Reset Log — DPI View</span>\n      <button onclick=\"document.getElementById('psPwResetLogModal').remove()\" style=\"background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:15px;font-weight:bold;\">✕</button>\n    </div>\n    <div style=\"padding:12px 20px;background:#fff8f8;border-bottom:1px solid #eee;font-size:12px;color:#c62828;\">\n      ⚠️ यह log केवल DPI Admin को दिखता है। जो भी User अपना Password Reset करे, उसकी जानकारी यहाँ दर्ज होती है।\n    </div>\n    <div style=\"overflow-y:auto;max-height:400px;\">\n      <table style=\"width:100%;border-collapse:collapse;font-size:13px;\">\n        <thead>\n          <tr style=\"background:#f5f5f5;\">\n            <th style=\"padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;\">User ID</th>\n            <th style=\"padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;\">Date & Time</th>\n            <th style=\"padding:10px 12px;text-align:left;color:#c62828;border-bottom:2px solid #ddd;\">पुराना Password</th>\n            <th style=\"padding:10px 12px;text-align:left;color:#2e7d32;border-bottom:2px solid #ddd;\">नया Password</th>\n            <th style=\"padding:10px 12px;text-align:left;color:#333;border-bottom:2px solid #ddd;\">Reset By</th>\n          </tr>\n        </thead>\n        <tbody>" + _0x2decfa + "</tbody>\n      </table>\n    </div>\n    <div style=\"padding:14px 20px;display:flex;justify-content:space-between;align-items:center;border-top:1px solid #eee;background:#fafafa;\">\n      <span style=\"font-size:11px;color:#999;\">कुल Reset: <strong>" + _0x56b78f.length + "</strong></span>\n      <button onclick=\"if(confirm('सभी Password Reset Logs clear करें?')){window._pwResetLog=[];document.getElementById('psPwResetLogModal').remove();myAlert('✅ Password reset log cleared.');}\"\n        style=\"padding:7px 14px;background:#e53935;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;\">🗑️ Log Clear करें</button>\n    </div>\n  </div>";
  document.body.appendChild(_0x148448);
  _0x148448.addEventListener("click", _0x46580b => {
    if (_0x46580b.target === _0x148448) {
      _0x148448.remove();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const _0x328bbf = document.getElementById("logoutBtn");
  if (_0x328bbf && _0x328bbf.parentNode) {
    const _0x183285 = document.createElement("button");
    _0x183285.id = "changePwBtn";
    _0x183285.onclick = openChangePassword;
    _0x183285.title = "Change Password via OTP";
    _0x183285.style.cssText = "padding:7px 14px;background:#006064;color:white;border:none;border-radius:4px;cursor:pointer;font-size:12px;font-weight:bold;display:none;";
    _0x183285.innerHTML = "🔑 Change Password";
    _0x328bbf.parentNode.insertBefore(_0x183285, _0x328bbf);
  }
});
const _psOrigCheckLogin = checkLogin;
checkLogin = function () {
  _psOrigCheckLogin();
  setTimeout(() => {
    const _0x405b86 = document.getElementById("changePwBtn");
    if (_0x405b86) {
      _0x405b86.style.display = window.currentUser ? "inline-block" : "none";
    }
  }, 100);
};
const _psOrigLogout = logoutUser;
logoutUser = function () {
  _psOrigLogout();
  const _0x3a46c2 = document.getElementById("changePwBtn");
  if (_0x3a46c2) {
    _0x3a46c2.style.display = "none";
  }
};
function auditLog(_0x3dc8a8, _0xae5e5a) {
  historyStore.push({
    time: new Date().toLocaleString("en-IN"),
    user: currentUser,
    action: _0x3dc8a8,
    detail: _0xae5e5a
  });
}
let currentDocData = null;
function updateUploadStatus(_0x4526ac) {
  const _0x1dfd49 = _0x4526ac.target.files[0];
  if (!_0x1dfd49) {
    return;
  }
  document.getElementById("fileNameDisplay").textContent = "📎 " + _0x1dfd49.name;
  const _0x35d479 = new FileReader();
  _0x35d479.onload = function (_0x112e70) {
    currentDocData = {
      name: _0x1dfd49.name,
      data: _0x112e70.target.result,
      uploader: currentUser
    };
  };
  _0x35d479.readAsDataURL(_0x1dfd49);
}
function viewDocument(_0x2f33b9) {
  if (!_0x2f33b9 || !_0x2f33b9.data) {
    myAlert("❌ Document available nahi hai.");
    return;
  }
  const _0x2037b5 = window.open("", "_blank");
  if (!_0x2037b5) {
    myAlert("❌ Popup blocked. Browser settings check karein.");
    return;
  }
  if (_0x2f33b9.data.startsWith("data:image")) {
    _0x2037b5.document.write("<html><body style=\"margin:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;\"><img src=\"" + _0x2f33b9.data + "\" style=\"max-width:100%;max-height:100vh;\"></body></html>");
  } else {
    _0x2037b5.document.write("<html><body style=\"margin:0;padding:0;\"><embed src=\"" + _0x2f33b9.data + "\" type=\"application/pdf\" width=\"100%\" height=\"100%\" style=\"position:fixed;top:0;left:0;width:100%;height:100%;\"></body></html>");
  }
  _0x2037b5.document.title = _0x2f33b9.name || "Document";
}
function updateStorageBadge(_0x210726) {
  const _0x2479ba = document.getElementById("storageBadge");
  if (!_0x2479ba) {
    return;
  }
  const _0x22e537 = window.fullData.length;
  _0x2479ba.innerHTML = _0x210726 ? "☁️ <b>" + _0x22e537 + " Records Saved</b>" : "⚠️ <b>" + _0x22e537 + " Records (Local)</b>";
  _0x2479ba.style.background = _0x210726 ? "#dcfce7" : "#fff3cd";
  _0x2479ba.style.color = _0x210726 ? "#166534" : "#856404";
}
async function saveAndSync(_0x212f69) {
  const _0x5a692f = await saveRecordToSupabase(_0x212f69);
  updateStorageBadge(_0x5a692f);
  return _0x5a692f;
}
window.onload = function () {
  buildTableHead();
  buildFilterRow();
  fillDistrictDropdowns();
  const _0x1e4ea9 = new Date().toISOString().split("T")[0];
  ["in6", "in17", "in18", "in19"].forEach(_0x51bc58 => {
    const _0x18613d = document.getElementById(_0x51bc58);
    if (_0x18613d) {
      _0x18613d.max = _0x1e4ea9;
    }
  });
  document.getElementById("clearFiltersBtn").onclick = () => {
    document.querySelectorAll("#filterRow input").forEach(_0x494865 => _0x494865.value = "");
    window.filteredData = [...window.fullData];
    renderVirtual();
  };
  document.addEventListener("click", _0x265aaa => {
    if (!_0x265aaa.target.closest("#otherToolbarWrap")) {
      closeOtherToolbar();
    }
  });
};
window.dpiSelectedDivision = null;
window.DPI_DIVISION_INFO = {
  JDBHOPAL: {
    label: "भोपाल संभाग",
    icon: "🏛️",
    color: "#1565c0",
    bg: "rgba(21,101,192,0.18)",
    districts: ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha"]
  },
  JDGWALIOR: {
    label: "ग्वालियर संभाग",
    icon: "🏯",
    color: "#6a1b9a",
    bg: "rgba(106,27,154,0.18)",
    districts: ["Ashoknagar", "Bhind", "Datia", "Guna", "Gwalior", "Morena", "Sheopur", "Shivpuri"]
  },
  JDINDORE: {
    label: "इंदौर संभाग",
    icon: "🏙️",
    color: "#00695c",
    bg: "rgba(0,105,92,0.18)",
    districts: ["Alirajpur", "Barwani", "Burhanpur", "Dhar", "Indore", "Jhabua", "Khandwa", "Khargone"]
  },
  JDJABALPUR: {
    label: "जबलपुर संभाग",
    icon: "🌿",
    color: "#2e7d32",
    bg: "rgba(46,125,50,0.18)",
    districts: ["Balaghat", "Chhindwara", "Dindori", "Jabalpur", "Katni", "Mandla", "Narsinghpur", "Seoni"]
  },
  JDUJJAIN: {
    label: "उज्जैन संभाग",
    icon: "🛕",
    color: "#e65100",
    bg: "rgba(230,81,0,0.18)",
    districts: ["Agar Malwa", "Dewas", "Mandsaur", "Neemuch", "Ratlam", "Shajapur", "Ujjain"]
  },
  JDSAGAR: {
    label: "सागर संभाग",
    icon: "💎",
    color: "#37474f",
    bg: "rgba(55,71,79,0.18)",
    districts: ["Chhatarpur", "Damoh", "Niwari", "Panna", "Sagar", "Tikamgarh"]
  },
  JDREWA: {
    label: "रीवा संभाग",
    icon: "🏔️",
    color: "#880e4f",
    bg: "rgba(136,14,79,0.18)",
    districts: ["Rewa", "Satna", "Sidhi", "Singrauli"]
  },
  JDNARMADAPURAM: {
    label: "नर्मदापुरम संभाग",
    icon: "🌊",
    color: "#01579b",
    bg: "rgba(1,87,155,0.18)",
    districts: ["Betul", "Harda", "Narmadapuram"]
  },
  JDSHAHDOL: {
    label: "शहडोल संभाग",
    icon: "🌲",
    color: "#4e342e",
    bg: "rgba(78,52,46,0.18)",
    districts: ["Anuppur", "Shahdol", "Umaria"]
  }
};
function showDpiDivisionSelector(_0x3dcbe1) {
  var _0x459fb5 = document.getElementById("divisionGrid");
  if (!_0x459fb5) {
    return;
  }
  _0x459fb5.innerHTML = "";
  var _0x68d81b = window.dpiSelectedDivision;
  Object.keys(window.DPI_DIVISION_INFO).forEach(function (_0x368c16) {
    var _0x5ad6c2 = window.DPI_DIVISION_INFO[_0x368c16];
    var _0x4a8e3f = _0x68d81b === _0x368c16;
    var _0x22e88b = document.createElement("div");
    _0x22e88b.className = "div-card" + (_0x4a8e3f ? " active" : "");
    _0x22e88b.style.borderColor = _0x4a8e3f ? _0x5ad6c2.color : "rgba(255,255,255,0.15)";
    _0x22e88b.style.background = _0x4a8e3f ? _0x5ad6c2.bg : "rgba(255,255,255,0.05)";
    _0x22e88b.innerHTML = "<div style=\"font-size:20px;margin-bottom:4px;\">" + _0x5ad6c2.icon + "</div><div style=\"font-size:11px;font-weight:800;color:" + (_0x4a8e3f ? "#fff" : "#cfd8dc") + ";line-height:1.3;\">" + _0x5ad6c2.label + "</div><div style=\"font-size:9px;color:rgba(255,255,255,0.4);margin-top:3px;\">" + _0x5ad6c2.districts.length + " जिले</div>" + (_0x4a8e3f ? "<div style=\"font-size:9px;color:#4caf50;font-weight:700;margin-top:2px;\">✔ वर्तमान</div>" : "");
    _0x22e88b.onclick = function (_0xc24e7d) {
      return function () {
        dpiSelectDivision(_0xc24e7d);
      };
    }(_0x368c16);
    _0x22e88b.onmouseover = function (_0x43584a, _0xcaee85, _0x5e3790) {
      return function () {
        this.style.background = _0xcaee85;
        this.style.borderColor = _0x43584a;
        if (!_0x5e3790) {
          this.style.filter = "brightness(1.2)";
        }
      };
    }(_0x5ad6c2.color, _0x5ad6c2.bg, _0x4a8e3f);
    _0x22e88b.onmouseout = function (_0x126c83, _0x2699c8, _0x30b49e) {
      return function () {
        this.style.background = _0x30b49e ? _0x2699c8 : "rgba(255,255,255,0.05)";
        this.style.borderColor = _0x30b49e ? _0x126c83 : "rgba(255,255,255,0.15)";
        this.style.filter = "";
      };
    }(_0x5ad6c2.color, _0x5ad6c2.bg, _0x4a8e3f);
    _0x459fb5.appendChild(_0x22e88b);
  });
  var _0xf86ac4 = document.getElementById("dpiDivisionModal");
  if (_0xf86ac4) {
    _0xf86ac4.style.display = "flex";
  }
}
async function dpiSelectDivision(_0x5c5ff2) {
  window.dpiSelectedDivision = _0x5c5ff2;
  var _0x28527b = document.getElementById("dpiDivisionModal");
  if (_0x28527b) {
    _0x28527b.style.display = "none";
  }
  var _0x317690 = document.getElementById("currentDivLabel");
  if (_0x317690) {
    if (_0x5c5ff2 === "ALL") {
      _0x317690.textContent = "🌐 सभी संभाग";
    } else {
      var _0xfef665 = window.DPI_DIVISION_INFO[_0x5c5ff2];
      _0x317690.textContent = _0xfef665 ? _0xfef665.label : _0x5c5ff2;
    }
  }
  _updateDpiScopeBadge(_0x5c5ff2);
  var _0x1863b2 = document.getElementById("dataLoadingOverlay");
  if (_0x1863b2) {
    _0x1863b2.style.display = "flex";
  }
  var _0x2326ca = await loadDataFromSupabase();
  if (_0x2326ca) {
    renderVirtual();
    updateStorageBadge(true);
  }
}
function _updateDpiScopeBadge(_0x44edff) {
  var _0x40dc47 = document.getElementById("scopeBadge");
  if (!_0x40dc47) {
    return;
  }
  _0x40dc47.style.display = "inline-block";
  if (_0x44edff === "ALL") {
    _0x40dc47.style.background = "#1a237e";
    _0x40dc47.style.border = "1px solid #3949ab";
    _0x40dc47.style.color = "white";
    _0x40dc47.textContent = "🌐 DPI — सम्पूर्ण मध्यप्रदेश";
  } else {
    var _0x3f38dc = window.DPI_DIVISION_INFO[_0x44edff];
    _0x40dc47.style.background = _0x3f38dc ? _0x3f38dc.color : "#1a237e";
    _0x40dc47.style.border = "1px solid rgba(255,255,255,0.3)";
    _0x40dc47.style.color = "white";
    _0x40dc47.textContent = _0x3f38dc ? _0x3f38dc.icon + " DPI — " + _0x3f38dc.label : "DPI — " + _0x44edff;
    if (_0x3f38dc) {
      _0x40dc47.title = _0x3f38dc.districts.join(", ");
    }
  }
}
function isOfficeUser() {
  return window.currentUser === "DPI" || String(window.currentUser || "").startsWith("JD");
}
function isDpiUser() {
  return window.currentUser === "DPI";
}
function buildTableHead() {
  const _0x1c15e2 = document.getElementById("tableHead");
  _0x1c15e2.innerHTML = "";
  colConfig.forEach((_0x58b16c, _0x3e5ab1) => {
    if (_0x58b16c.officeOnly && !isOfficeUser()) {
      return;
    }
    if (_0x58b16c.dpiOnly && !isDpiUser()) {
      return;
    }
    const _0x119fe9 = document.createElement("th");
    _0x119fe9.className = _0x58b16c.cls;
    _0x119fe9.innerText = _0x58b16c.name;
    if (_0x58b16c.officeOnly) {
      _0x119fe9.style.background = "#1a237e";
      _0x119fe9.style.color = "#fff";
      _0x119fe9.title = "Office Use Only";
    }
    _0x119fe9.dataset.colIdx = _0x3e5ab1;
    _0x1c15e2.appendChild(_0x119fe9);
  });
}
function buildFilterRow() {
  const _0x33bc7c = document.getElementById("filterRow");
  _0x33bc7c.innerHTML = "";
  colConfig.forEach((_0x2d8f0e, _0x4b3fd6) => {
    if (_0x2d8f0e.officeOnly && !isOfficeUser()) {
      return;
    }
    if (_0x2d8f0e.dpiOnly && !isDpiUser()) {
      return;
    }
    const _0x122549 = document.createElement("th");
    const _0x5324cf = document.createElement("input");
    _0x5324cf.type = "text";
    _0x5324cf.placeholder = "🔍";
    _0x5324cf.dataset.colIdx = _0x4b3fd6;
    _0x5324cf.oninput = function () {
      runAllFilters();
    };
    _0x122549.appendChild(_0x5324cf);
    _0x33bc7c.appendChild(_0x122549);
  });
}
function fillDistrictDropdowns() {
  document.querySelectorAll(".district-list").forEach(_0x2da8ab => {
    _0x2da8ab.innerHTML = "<option value=\"\">SELECT DISTRICT</option>";
    districts.filter(Boolean).forEach(_0x573f3f => {
      const _0x51ed9b = document.createElement("option");
      _0x51ed9b.value = _0x573f3f;
      _0x51ed9b.textContent = _0x573f3f;
      _0x2da8ab.appendChild(_0x51ed9b);
    });
  });
}
function runAllFilters() {
  const _0x754f6c = Array.from(document.querySelectorAll("#filterRow input"));
  window.filteredData = window.fullData.filter(_0x3bb655 => _0x754f6c.every(_0x368780 => {
    const _0x3046da = _0x368780.value.trim().toLowerCase();
    if (!_0x3046da) {
      return true;
    }
    const _0x409996 = parseInt(_0x368780.dataset.colIdx || "0");
    const _0x4e6a58 = colConfig[_0x409996];
    if (_0x4e6a58 && _0x4e6a58.gradNo) {
      const _0x15a492 = _0x3bb655.field29 || "";
      const _0x37a822 = !_0x15a492 || _0x15a492.includes("New");
      return (_0x37a822 ? "new entry" : "updated").includes(_0x3046da);
    }
    const _0x34afe3 = _0x4e6a58 && _0x4e6a58.fi !== undefined ? _0x4e6a58.fi : _0x409996 + 1;
    if (_0x34afe3 === 31) {
      return (_0x3bb655._doc && _0x3bb655._doc.name || "").toLowerCase().includes(_0x3046da);
    }
    return (_0x3bb655["field" + _0x34afe3] || "").toString().toLowerCase().includes(_0x3046da);
  }));
  renderVirtual();
}
function getRowCounsellingData(_0x46d013) {
  const _0x151885 = _0x46d013.field8 || "";
  let _0x5c24eb = "";
  if (_0x151885) {
    if (_0x151885 === "B.Sc. In Maths" || _0x151885.toLowerCase().includes("maths")) {
      _0x5c24eb = "Maths";
    } else if (_0x151885 === "B.Sc. In Science" || _0x151885.toLowerCase().includes("science")) {
      _0x5c24eb = "Science";
    } else if (_0x151885.toLowerCase().includes("computer")) {
      _0x5c24eb = "Maths";
    } else {
      _0x5c24eb = getCounsellingFromUG(_0x151885);
    }
  }
  const _0xe124b9 = [_0x46d013.field9 || "", _0x46d013.field10 || "", _0x46d013.field11 || ""];
  const _0x5db7b9 = new Set();
  const _0x136b77 = _0xe124b9.map(_0x15736e => getLiteratureSubject(_0x15736e)).filter(_0x3dc6a9 => {
    if (!_0x3dc6a9) {
      return false;
    }
    if (_0x5db7b9.has(_0x3dc6a9.toLowerCase())) {
      return false;
    }
    _0x5db7b9.add(_0x3dc6a9.toLowerCase());
    return true;
  });
  if (_0x151885 === "B.A." && _0x136b77.length === 3) {
    _0x5c24eb = "";
  }
  const _0x23a90b = new Set();
  if (_0x5c24eb) {
    _0x23a90b.add(_0x5c24eb.toLowerCase());
  }
  const _0x4a1eb4 = _0x136b77.filter(_0x46510d => {
    if (!_0x46510d || _0x23a90b.has(_0x46510d.toLowerCase())) {
      return false;
    }
    _0x23a90b.add(_0x46510d.toLowerCase());
    return true;
  });
  const _0x285794 = _0x46d013.field12 || "";
  let _0x140401 = "";
  if (_0x285794) {
    if (_0x285794 === "B.Sc. In Maths" || _0x285794.toLowerCase().includes("maths")) {
      _0x140401 = "Maths";
    } else if (_0x285794 === "B.Sc. In Science" || _0x285794.toLowerCase().includes("science")) {
      _0x140401 = "Science";
    } else if (_0x285794.toLowerCase().includes("computer")) {
      _0x140401 = "Maths";
    } else {
      _0x140401 = getCounsellingFromUG(_0x285794);
    }
  }
  const _0x5dec00 = [_0x46d013.field13 || "", _0x46d013.field14 || "", _0x46d013.field15 || ""];
  const _0x281569 = new Set();
  const _0x3000e2 = _0x5dec00.map(_0x398eba => getLiteratureSubject(_0x398eba)).filter(_0x4364ed => {
    if (!_0x4364ed) {
      return false;
    }
    if (_0x281569.has(_0x4364ed.toLowerCase())) {
      return false;
    }
    _0x281569.add(_0x4364ed.toLowerCase());
    return true;
  });
  if (_0x285794 === "B.A." && _0x3000e2.length === 3) {
    _0x140401 = "";
  }
  const _0x380d21 = new Set();
  if (_0x140401) {
    _0x380d21.add(_0x140401.toLowerCase());
  }
  const _0xfcc6dd = _0x3000e2.filter(_0x3260b4 => {
    if (!_0x3260b4 || _0x380d21.has(_0x3260b4.toLowerCase())) {
      return false;
    }
    _0x380d21.add(_0x3260b4.toLowerCase());
    return true;
  });
  const _0x3ed15e = [_0x5c24eb, _0x4a1eb4[0] || "", _0x4a1eb4[1] || "", _0x4a1eb4[2] || "", _0x140401, _0xfcc6dd[0] || "", _0xfcc6dd[1] || "", _0xfcc6dd[2] || ""];
  const _0x4d8ac6 = [];
  _0x3ed15e.forEach(_0x5ce5d0 => {
    if (_0x5ce5d0 && _0x5ce5d0 !== "NIL" && !_0x4d8ac6.includes(_0x5ce5d0) && _0x4d8ac6.length < 4) {
      _0x4d8ac6.push(_0x5ce5d0);
    }
  });
  return [_0x5c24eb, _0x4a1eb4[0] || "", _0x4a1eb4[1] || "", _0x4a1eb4[2] || "", _0x140401, _0xfcc6dd[0] || "", _0xfcc6dd[1] || "", _0xfcc6dd[2] || "", _0x4d8ac6[0] || "", _0x4d8ac6[1] || "", _0x4d8ac6[2] || "", _0x4d8ac6[3] || ""];
}
const VS = {
  ROW_H: 26,
  BUFFER: 15,
  _lastStart: -1,
  _lastEnd: -1,
  _spacerTop: null,
  _spacerBot: null,
  _bound: false
};
function _getVSData() {
  if (window.filteredData && window.filteredData.length) {
    return window.filteredData;
  } else {
    return window.fullData || [];
  }
}
function _buildPSRow(_0x379ced, _0x246278) {
  const _0x583fd0 = isOfficeUser();
  const _0x20649c = isDpiUser();
  const _0x416c74 = document.createElement("tr");
  if (_0x379ced._softDeleted) {
    _0x416c74.classList.add("row-deleted");
  }
  _0x416c74.dataset.uid = _0x379ced.field2 || "row_" + _0x246278;
  _0x416c74.style.cursor = "pointer";
  _0x416c74.title = "↵ Single click to select  |  Double-click to open 09380902092a093e0926093f0924 092b09490930094d092e";
  _0x416c74.onclick = function () {
    if (selectedRowElement) {
      selectedRowElement.classList.remove("selected-row");
    }
    _0x416c74.classList.add("selected-row");
    selectedRowElement = _0x416c74;
  };
  _0x416c74.ondblclick = function (_0x2a425c) {
    _0x2a425c.stopPropagation();
    _0x416c74.style.transition = "background .08s";
    _0x416c74.style.background = "rgba(29,111,206,.22)";
    setTimeout(function () {
      _0x416c74.style.background = "";
    }, 160);
    if (typeof loadRecord === "function" && _0x379ced.field2) {
      loadRecord(_0x379ced.field2);
    }
  };
  const _0x192442 = getRowCounsellingData(_0x379ced);
  for (let _0x29f84f = 0; _0x29f84f < colConfig.length; _0x29f84f++) {
    if (colConfig[_0x29f84f].officeOnly && !_0x583fd0) {
      continue;
    }
    if (colConfig[_0x29f84f].dpiOnly && !_0x20649c) {
      continue;
    }
    const _0x382ab0 = document.createElement("td");
    const _0x2fc9ce = colConfig[_0x29f84f].fi !== undefined ? colConfig[_0x29f84f].fi : _0x29f84f + 1;
    const _0x3ce7a8 = _0x379ced["field" + _0x2fc9ce] || "";
    _0x382ab0.className = colConfig[_0x29f84f].cls;
    if (_0x29f84f === 0) {
      if (_0x379ced._softDeleted) {
        _0x382ab0.innerHTML = "<span class=\"badge badge-deleted\">DELETED</span>";
      } else {
        _0x382ab0.textContent = String(_0x246278 + 1);
      }
    } else if (colConfig[_0x29f84f].gradNo) {
      const _0x24d36e = _0x379ced.field29 || "";
      const _0x256973 = !_0x24d36e || _0x24d36e.includes("New");
      _0x382ab0.innerHTML = "<span style=\"background:" + (_0x256973 ? "#1b5e20" : "#1565c0") + ";color:white;padding:1px 6px;border-radius:2px;font-size:10px;font-weight:700;\">" + (_0x256973 ? "New Entry" : "Updated") + "</span>";
    } else if (_0x2fc9ce === 5 && (_0x3ce7a8 === "M" || _0x3ce7a8 === "F")) {
      _0x382ab0.innerHTML = "<span style=\"background:" + (_0x3ce7a8 === "M" ? "#1565c0" : "#ad1457") + ";color:white;padding:1px 6px;border-radius:2px;font-size:10px;font-weight:700;\">" + _0x3ce7a8 + "</span>";
    } else if (_0x2fc9ce === 29) {
      const _0x51f09c = _0x379ced.field29 || "";
      const _0x4889fe = _0x51f09c === "Deleted" ? "badge-deleted" : _0x51f09c.includes("New") ? "badge-new" : "badge-updated";
      if (_0x51f09c) {
        _0x382ab0.innerHTML = "<span class=\"badge " + _0x4889fe + "\">" + _0x51f09c + "</span>";
      } else {
        _0x382ab0.textContent = "";
      }
    } else if (_0x2fc9ce === 30) {
      const _0x4638d6 = _0x379ced.field30 || "";
      _0x382ab0.innerHTML = "<span style=\"" + (_0x4638d6.includes("Updated") ? "color:#1565c0;font-weight:700;" : "") + "\">" + _0x4638d6 + "</span>";
    } else if (_0x2fc9ce === 31) {
      if (_0x379ced._doc && _0x379ced._doc.name) {
        const _0x5799ec = document.createElement("button");
        _0x5799ec.textContent = "👁 VIEW";
        _0x5799ec.style.cssText = "padding:2px 8px;background:#1565c0;color:white;border:none;border-radius:3px;cursor:pointer;font-size:10px;font-weight:bold;";
        _0x5799ec.onclick = function (_0x3e08f3) {
          return function (_0x432f66) {
            _0x432f66.stopPropagation();
            viewDocument(_0x3e08f3._doc);
          };
        }(_0x379ced);
        _0x382ab0.appendChild(_0x5799ec);
      } else {
        _0x382ab0.innerHTML = "<span style=\"color:#bbb;font-size:10px;\">No Doc</span>";
      }
    } else if (_0x2fc9ce >= 32 && _0x2fc9ce <= 39) {
      const _0x4b051a = _0x192442[_0x2fc9ce - 32] || "";
      _0x382ab0.style.background = "#e8eaf6";
      _0x382ab0.style.color = _0x4b051a ? "#1a237e" : "#aaa";
      _0x382ab0.style.fontWeight = _0x4b051a ? "700" : "400";
      _0x382ab0.textContent = _0x4b051a || "—";
      _0x382ab0.title = "Office Use Only";
    } else if (_0x2fc9ce >= 40 && _0x2fc9ce <= 43) {
      const _0x296907 = _0x192442[_0x2fc9ce - 32] || "";
      _0x382ab0.style.background = _0x296907 ? "#e8f5e9" : "#f5f5f5";
      _0x382ab0.style.color = _0x296907 ? "#1b5e20" : "#aaa";
      _0x382ab0.style.fontWeight = _0x296907 ? "800" : "400";
      _0x382ab0.style.fontSize = "11px";
      _0x382ab0.textContent = _0x296907 || "—";
      _0x382ab0.title = "Final Counselling Subject";
    } else {
      const _0x57c304 = _0x2fc9ce === 6 || _0x2fc9ce === 17 || _0x2fc9ce === 18 || _0x2fc9ce === 19;
      const _0x424a20 = _0x57c304 ? fmtDate(_0x3ce7a8) : _0x3ce7a8;
      const _0x17c07d = _0x379ced._changedFields && _0x379ced._changedFields[_0x2fc9ce];
      if (_0x17c07d !== undefined && _0x17c07d !== null && _0x17c07d.from !== _0x3ce7a8) {
        if (_0x2fc9ce === 7) {
          const _0xa65f13 = new Set((_0x17c07d.from || "").split(/[\/,]/).map(_0x15c220 => _0x15c220.trim().toLowerCase()).filter(Boolean));
          const _0x50401e = (_0x3ce7a8 || "").split(/[\/,]/).map(_0x156eaa => _0x156eaa.trim()).filter(Boolean);
          const _0x4ad6e9 = _0x50401e.map(_0x5ad918 => !_0xa65f13.has(_0x5ad918.toLowerCase()) ? "<span style=\"background:#fff3cd;padding:1px 5px;border-radius:3px;border:1px solid #ff9800;font-weight:700;color:#b45309;\" title=\"Naya add hua\">✦ " + _0x5ad918 + "</span>" : _0x5ad918).join(", ");
          _0x382ab0.innerHTML = _0x4ad6e9;
        } else {
          _0x382ab0.innerHTML = "<span style=\"background:#fff3cd;padding:1px 3px;border-radius:2px;\" title=\"Was: " + (fmtDate(_0x17c07d.from) || "(empty)") + "\">" + _0x424a20 + "</span>";
          _0x382ab0.classList.add("cell-changed");
        }
      } else {
        _0x382ab0.textContent = _0x424a20;
      }
    }
    _0x416c74.appendChild(_0x382ab0);
  }
  return _0x416c74;
}
function _vsRender(_0xe6e296) {
  const _0x483b73 = _getVSData();
  const _0x5c9d7f = document.getElementById("tableBody");
  const _0x18c640 = document.getElementById("tableContainer");
  if (!_0x5c9d7f || !_0x18c640) {
    return;
  }
  const _0x1378df = _0x483b73.length;
  const _0x4f3ed9 = _0x18c640.scrollTop;
  const _0x1b3cda = _0x18c640.clientHeight;
  let _0x18757f = Math.max(0, Math.floor(_0x4f3ed9 / VS.ROW_H) - VS.BUFFER);
  let _0x40aa86 = Math.min(_0x1378df, Math.ceil((_0x4f3ed9 + _0x1b3cda) / VS.ROW_H) + VS.BUFFER);
  if (!_0xe6e296 && _0x18757f === VS._lastStart && _0x40aa86 === VS._lastEnd) {
    return;
  }
  VS._lastStart = _0x18757f;
  VS._lastEnd = _0x40aa86;
  if (!VS._spacerTop || !_0x5c9d7f.contains(VS._spacerTop)) {
    VS._spacerTop = document.createElement("tr");
    VS._spacerTop.id = "_vsSpacerTop";
    VS._spacerBot = document.createElement("tr");
    VS._spacerBot.id = "_vsSpacerBot";
    _0x5c9d7f.innerHTML = "";
    _0x5c9d7f.appendChild(VS._spacerTop);
    _0x5c9d7f.appendChild(VS._spacerBot);
  }
  const _0x427138 = _0x18757f * VS.ROW_H;
  const _0x3f9a0d = Math.max(0, (_0x1378df - _0x40aa86) * VS.ROW_H);
  VS._spacerTop.style.cssText = "height:" + _0x427138 + "px;display:" + (_0x427138 > 0 ? "table-row" : "none") + ";";
  VS._spacerBot.style.cssText = "height:" + _0x3f9a0d + "px;display:" + (_0x3f9a0d > 0 ? "table-row" : "none") + ";";
  const _0x1b8df5 = document.createDocumentFragment();
  for (let _0x5a2e48 = _0x18757f; _0x5a2e48 < _0x40aa86; _0x5a2e48++) {
    _0x1b8df5.appendChild(_buildPSRow(_0x483b73[_0x5a2e48], _0x5a2e48));
  }
  Array.from(_0x5c9d7f.children).forEach(_0x10da52 => {
    if (_0x10da52.id !== "_vsSpacerTop" && _0x10da52.id !== "_vsSpacerBot") {
      _0x5c9d7f.removeChild(_0x10da52);
    }
  });
  _0x5c9d7f.insertBefore(_0x1b8df5, VS._spacerBot);
  updateStorageBadge(true);
  document.getElementById("dataTable").style.fontSize = listZoom + "px";
}
function _vsBindScroll() {
  if (VS._bound) {
    return;
  }
  const _0x4aaa50 = document.getElementById("tableContainer");
  if (!_0x4aaa50) {
    return;
  }
  let _0x38ec83 = null;
  _0x4aaa50.addEventListener("scroll", function () {
    if (_0x38ec83) {
      cancelAnimationFrame(_0x38ec83);
    }
    _0x38ec83 = requestAnimationFrame(function () {
      _vsRender(false);
      _0x38ec83 = null;
    });
  }, {
    passive: true
  });
  VS._bound = true;
}
function renderVirtual() {
  VS._lastStart = -1;
  VS._lastEnd = -1;
  VS._spacerTop = null;
  VS._spacerBot = null;
  const _0x8c630c = document.getElementById("tableBody");
  if (_0x8c630c) {
    _0x8c630c.innerHTML = "";
  }
  _vsBindScroll();
  _vsRender(true);
}
function scrollToRow(_0xdafe9c) {
  const _0x1311aa = _getVSData();
  const _0x31042c = _0x1311aa.findIndex(_0xa4be5b => _0xa4be5b.field2 === _0xdafe9c);
  if (_0x31042c < 0) {
    return;
  }
  const _0x29e911 = document.getElementById("tableContainer");
  if (_0x29e911) {
    const _0x57030a = _0x29e911.clientHeight;
    _0x29e911.scrollTop = Math.max(0, _0x31042c * VS.ROW_H - _0x57030a / 2 + VS.ROW_H / 2);
    VS._lastStart = -1;
    _vsRender(true);
  }
  setTimeout(function () {
    const _0x358a2f = document.querySelector("#tableBody tr[data-uid=\"" + _0xdafe9c + "\"]");
    if (_0x358a2f) {
      if (selectedRowElement) {
        selectedRowElement.classList.remove("selected-row");
      }
      _0x358a2f.classList.add("selected-row");
      selectedRowElement = _0x358a2f;
    }
  }, 60);
}
function fmtDate(_0x199688) {
  if (!_0x199688) {
    return "";
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(_0x199688)) {
    const [_0x4c2734, _0x4f2ac8, _0x1247b2] = _0x199688.split("-");
    return _0x1247b2 + "/" + _0x4f2ac8 + "/" + _0x4c2734;
  }
  if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(_0x199688)) {
    return _0x199688.replace(/-/g, "/");
  }
  return _0x199688;
}
function parseToISO(_0x464419) {
  if (!_0x464419) {
    return "";
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(_0x464419)) {
    return _0x464419;
  }
  if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(_0x464419)) {
    const _0x5b4750 = _0x464419.replace(/-/g, "/").split("/");
    return _0x5b4750[2] + "-" + _0x5b4750[1] + "-" + _0x5b4750[0];
  }
  return _0x464419;
}
function toggleMS7(_0x3218a7) {
  const _0x428e4f = document.getElementById("ms7Options");
  const _0x484167 = _0x428e4f.style.display === "block";
  document.querySelectorAll(".ms-options").forEach(_0x4f2d01 => _0x4f2d01.style.display = "none");
  _0x428e4f.style.display = _0x484167 ? "none" : "block";
  _0x3218a7.stopPropagation();
}
function updateMS7() {
  const _0x4b36bb = document.querySelectorAll("#ms7Options input[type=checkbox]:checked");
  const _0xecd22d = Array.from(_0x4b36bb).map(_0x31f890 => _0x31f890.value);
  const _0x1d9fbe = document.getElementById("in7");
  _0x1d9fbe.value = _0xecd22d.join(" / ");
  document.getElementById("ms7Text").textContent = _0xecd22d.length ? _0xecd22d.join(" / ") : "SELECT";
}
function setMS7Value(_0x3f5b0f) {
  document.querySelectorAll("#ms7Options input[type=checkbox]").forEach(_0x1fe2dc => _0x1fe2dc.checked = false);
  if (!_0x3f5b0f) {
    document.getElementById("ms7Text").textContent = "SELECT";
    document.getElementById("in7").value = "";
    return;
  }
  const _0x122330 = _0x3f5b0f.split(/[\/,]/).map(_0x3282ec => _0x3282ec.trim()).filter(Boolean);
  document.querySelectorAll("#ms7Options input[type=checkbox]").forEach(_0x1cec03 => {
    if (_0x122330.includes(_0x1cec03.value)) {
      _0x1cec03.checked = true;
    }
  });
  updateMS7();
}
document.addEventListener("click", function (_0x269a7f) {
  if (!_0x269a7f.target.closest("#ms7Container")) {
    document.getElementById("ms7Options").style.display = "none";
  }
});
function onDobChange() {
  const _0x283165 = document.getElementById("in6").value;
  if (!_0x283165) {
    return;
  }
  const _0x526e0a = new Date(_0x283165);
  const _0x510636 = _0x526e0a.getFullYear() + 62;
  let _0x324f69;
  if (_0x526e0a.getDate() === 1) {
    _0x324f69 = _0x526e0a.getMonth();
  } else {
    _0x324f69 = _0x526e0a.getMonth() + 1;
  }
  const _0xbc49d5 = new Date(_0x510636, _0x324f69, 0);
  const _0x30fc7c = _0xbc49d5.getDate();
  const _0x4f4035 = _0xbc49d5.getMonth() + 1;
  const _0x1ac096 = _0xbc49d5.getFullYear();
  document.getElementById("retirementField").value = String(_0x30fc7c).padStart(2, "0") + "-" + String(_0x4f4035).padStart(2, "0") + "-" + _0x1ac096;
}
function handleTransferMode() {
  const _0x4286fb = document.getElementById("in19mode").value;
  const _0x5c789a = document.getElementById("in19");
  if (_0x4286fb === "NIL") {
    _0x5c789a.value = "";
    _0x5c789a.disabled = true;
    _0x5c789a.style.background = "#eee";
  } else {
    _0x5c789a.disabled = false;
    _0x5c789a.style.background = "";
  }
}
const ugSubjectMap = {
  "B.A.": ["Hindi Literature", "English Literature", "Sanskrit Literature", "History", "Geography", "Political Science", "Economics", "Sociology", "Psychology", "Home Science", "Urdu Literature", "Maths"],
  "B.Sc. In Maths": ["Maths", "Physics", "Chemistry", "Computer Science"],
  "B.Sc. In Science": ["Physics", "Chemistry", "Biology", "Botany", "Zoology"],
  "B.Com.": ["Financial Accounting", "Cost Accounting", "Management Accounting", "Business Economics", "Microeconomics", "Macroeconomics", "Business Law", "Company Law", "Financial Management", "Business Mathematics", "Statistics", "Income Tax", "Auditing", "Banking and Insurance", "Computer Applications", "Business Studies"],
  BCA: ["C Programming", "Java Programming", "Python Programming", "Database Management System", "Data Structures", "Operating System", "Computer Networks", "Software Engineering", "Web Development", "Discrete Mathematics", "Computer Fundamentals", "Computer Organization", "Statistics"],
  BBA: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Mathematics", "Business Law", "Marketing Management", "Human Resource Management", "Financial Management", "Organizational Behavior", "Business Communication", "Operations Management", "Entrepreneurship Development", "Statistics", "Computer Applications"],
  "B.Tech.": ["Engineering Mathematics", "Engineering Physics", "Engineering Chemistry", "Basic Electrical Engineering", "Basic Electronics Engineering", "Engineering Mechanics", "Computer Programming", "Data Structures", "Operating System", "Computer Networks", "Database Management System", "Software Engineering", "Environmental Studies", "Engineering Graphics"],
  "B.E.": ["Engineering Mathematics", "Engineering Physics", "Engineering Chemistry", "Basic Electrical Engineering", "Basic Electronics Engineering", "Engineering Mechanics", "Computer Programming", "Data Structures", "Operating System", "Computer Networks", "Database Management System", "Software Engineering", "Environmental Studies", "Engineering Graphics"],
  MBBS: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Microbiology", "Medicine", "Surgery", "Obstetrics & Gynaecology"],
  LLB: ["Constitutional Law", "Criminal Law (IPC)", "Contract Law", "Family Law", "Property Law", "Company Law", "Evidence Act", "CPC & CrPC"],
  BJMC: ["Journalism", "Mass Communication", "Media Studies", "Public Relations (PR)", "Advertising", "Digital Media"],
  "BSc Agriculture": ["Agronomy", "Soil Science", "Plant Breeding & Genetics", "Horticulture", "Plant Pathology", "Entomology"],
  "BSc Nursing": ["Anatomy & Physiology", "Nursing Foundations", "Community Health Nursing", "Medical-Surgical Nursing", "Pharmacology", "Child Health Nursing"],
  NIL: ["NIL"]
};
const allSubjects = ["Biology", "Botany", "Chemistry", "Commerce", "Computer Science", "Economics", "English Literature", "Geography", "Hindi Literature", "History", "Home Science", "Maths", "Physics", "Political Science", "Psychology", "Sanskrit Literature", "Sociology", "Urdu Literature", "Zoology"];
function refreshSubjectDisable(_0x1c2b3a, _0xe8beb4, _0x15cd8a) {
  const _0x29f040 = [_0x1c2b3a, _0xe8beb4, _0x15cd8a];
  const _0x44f99f = _0x29f040.map(_0x1c178b => (document.getElementById(_0x1c178b) || {}).value || "");
  _0x29f040.forEach((_0x4210d0, _0xcfb397) => {
    const _0xea926 = document.getElementById(_0x4210d0);
    if (!_0xea926) {
      return;
    }
    Array.from(_0xea926.options).forEach(_0x40b6a6 => {
      if (!_0x40b6a6.value || _0x40b6a6.value === "") {
        _0x40b6a6.disabled = false;
        return;
      }
      const _0x33e750 = _0x44f99f.some((_0x17b110, _0x53de9a) => _0x53de9a !== _0xcfb397 && _0x17b110 === _0x40b6a6.value && _0x17b110 !== "NIL");
      _0x40b6a6.disabled = _0x33e750;
      _0x40b6a6.style.color = _0x33e750 ? "#ccc" : "";
    });
  });
}
function populateSubjects(_0x1e29b6, _0x4f6a6b, _0xe31d2e, _0x20cca4) {
  const _0x56c9d9 = document.getElementById(_0x1e29b6).value;
  if (_0x56c9d9 === "NIL" || _0x56c9d9 === "" || !_0x56c9d9) {
    [_0x4f6a6b, _0xe31d2e, _0x20cca4].forEach(_0x34bfcd => {
      const _0x531170 = document.getElementById(_0x34bfcd);
      _0x531170.innerHTML = "<option value=\"NIL\">NIL</option>";
      _0x531170.value = "NIL";
      _0x531170.onchange = function () {
        refreshSubjectDisable(_0x4f6a6b, _0xe31d2e, _0x20cca4);
        computeCounsellingSubjects();
      };
    });
    setTimeout(computeCounsellingSubjects, 50);
    return;
  }
  const _0x178641 = ugSubjectMap[_0x56c9d9] || allSubjects;
  [_0x4f6a6b, _0xe31d2e, _0x20cca4].forEach(_0x573b9a => {
    const _0x5ddcb9 = document.getElementById(_0x573b9a);
    const _0x401afb = _0x5ddcb9.value;
    _0x5ddcb9.innerHTML = "<option value=\"\">-- SELECT --</option>";
    _0x178641.forEach(_0x179290 => {
      const _0xfc187c = document.createElement("option");
      _0xfc187c.value = _0x179290;
      _0xfc187c.textContent = _0x179290;
      _0x5ddcb9.appendChild(_0xfc187c);
    });
    if (_0x178641.includes(_0x401afb) && _0x401afb !== "NIL") {
      _0x5ddcb9.value = _0x401afb;
    } else if (_0x178641.includes(_0x401afb)) {
      _0x5ddcb9.value = _0x401afb;
    }
    _0x5ddcb9.onchange = function () {
      refreshSubjectDisable(_0x4f6a6b, _0xe31d2e, _0x20cca4);
      computeCounsellingSubjects();
    };
  });
  refreshSubjectDisable(_0x4f6a6b, _0xe31d2e, _0x20cca4);
  setTimeout(computeCounsellingSubjects, 50);
}
const ugToCounsellingSubject = {
  NIL: "NIL",
  "B.A.": "Social Science",
  "B.Com.": "Social Science",
  BCA: "Maths",
  "B.Sc. In Maths": "Maths",
  "B.Sc. In Science": "Science",
  BBA: "",
  "B.Tech.": "Maths",
  "B.E.": "Maths",
  MBBS: "Science",
  LLB: "Social Science",
  BJMC: "Social Science",
  "BSc Agriculture": "Science",
  "BSc Nursing": "Science"
};
const ugToCounsellingMap = {
  NIL: "NIL",
  "B.A.": "Social Science",
  "B.Com.": "Social Science",
  BCA: "Maths",
  "B.Tech.": "Maths",
  "B.E.": "Maths",
  BBA: "Maths",
  "B.Sc. In Maths": "Maths",
  "B.Sc. In Science": "Science",
  MBBS: "Science",
  LLB: "Social Science",
  BJMC: "Social Science",
  "BSc Agriculture": "Science",
  "BSc Nursing": "Science"
};
const literatureSubjectMap = {
  "Hindi Literature": "Hindi",
  "English Literature": "English",
  "Sanskrit Literature": "Sanskrit",
  "Urdu Literature": "Urdu"
};
function getCounsellingFromUG(_0x563b1e) {
  if (!_0x563b1e || _0x563b1e === "") {
    return "";
  }
  if (ugToCounsellingMap[_0x563b1e] !== undefined) {
    return ugToCounsellingMap[_0x563b1e];
  }
  return "";
}
function getLiteratureSubject(_0x44d2e5) {
  if (!_0x44d2e5) {
    return "";
  }
  return literatureSubjectMap[_0x44d2e5] || "";
}
function computeCounsellingSubjects() {
  const _0x95ecd = _0x37d189 => {
    const _0x12d9fa = document.getElementById(_0x37d189);
    if (_0x12d9fa) {
      return _0x12d9fa.value;
    } else {
      return "";
    }
  };
  const _0x5bff6f = _0x95ecd("in8");
  const _0x11fa39 = [_0x95ecd("in9"), _0x95ecd("in10"), _0x95ecd("in11")];
  const _0x5ec68f = new Set();
  const _0x44c780 = _0x11fa39.map(_0x2f84b3 => getLiteratureSubject(_0x2f84b3)).filter(_0x39a961 => {
    if (!_0x39a961) {
      return false;
    }
    if (_0x5ec68f.has(_0x39a961.toLowerCase())) {
      return false;
    }
    _0x5ec68f.add(_0x39a961.toLowerCase());
    return true;
  });
  let _0x13ce31 = "";
  const _0x11cd56 = _0x5bff6f === "B.A.";
  const _0x175086 = _0x44c780.length === 3;
  if (_0x11cd56 && _0x175086) {
    _0x13ce31 = "";
  } else if (_0x5bff6f) {
    if (_0x5bff6f === "B.Sc. In Maths" || _0x5bff6f.toLowerCase().includes("maths")) {
      _0x13ce31 = "Maths";
    } else if (_0x5bff6f === "B.Sc. In Science" || _0x5bff6f.toLowerCase().includes("science")) {
      _0x13ce31 = "Science";
    } else if (_0x5bff6f.toLowerCase().includes("computer")) {
      _0x13ce31 = "Maths";
    } else {
      _0x13ce31 = getCounsellingFromUG(_0x5bff6f);
    }
  }
  const _0x460cea = new Set();
  if (_0x13ce31) {
    _0x460cea.add(_0x13ce31.toLowerCase());
  }
  const _0x76e07d = _0x44c780.filter(_0x6073d8 => {
    if (!_0x6073d8 || _0x460cea.has(_0x6073d8.toLowerCase())) {
      return false;
    }
    _0x460cea.add(_0x6073d8.toLowerCase());
    return true;
  });
  document.getElementById("inCS1").value = _0x13ce31;
  document.getElementById("inCS2").value = _0x76e07d[0] || "";
  document.getElementById("inCS3").value = _0x76e07d[1] || "";
  document.getElementById("inCS4").value = _0x76e07d[2] || "";
  const _0x25a7c3 = _0x95ecd("in12");
  const _0x4300ca = [_0x95ecd("in13"), _0x95ecd("in14"), _0x95ecd("in15")];
  const _0x5a5e51 = new Set();
  const _0x4bc9fb = _0x4300ca.map(_0x2b80f9 => getLiteratureSubject(_0x2b80f9)).filter(_0x4a6cc1 => {
    if (!_0x4a6cc1) {
      return false;
    }
    if (_0x5a5e51.has(_0x4a6cc1.toLowerCase())) {
      return false;
    }
    _0x5a5e51.add(_0x4a6cc1.toLowerCase());
    return true;
  });
  let _0x2d20a7 = "";
  const _0x815a1e = _0x25a7c3 === "B.A.";
  const _0x2ae929 = _0x4bc9fb.length === 3;
  if (_0x815a1e && _0x2ae929) {
    _0x2d20a7 = "";
  } else if (_0x25a7c3) {
    if (_0x25a7c3 === "B.Sc. In Maths" || _0x25a7c3.toLowerCase().includes("maths")) {
      _0x2d20a7 = "Maths";
    } else if (_0x25a7c3 === "B.Sc. In Science" || _0x25a7c3.toLowerCase().includes("science")) {
      _0x2d20a7 = "Science";
    } else if (_0x25a7c3.toLowerCase().includes("computer")) {
      _0x2d20a7 = "Maths";
    } else {
      _0x2d20a7 = getCounsellingFromUG(_0x25a7c3);
    }
  }
  const _0x26a05f = new Set();
  if (_0x2d20a7) {
    _0x26a05f.add(_0x2d20a7.toLowerCase());
  }
  const _0x416441 = _0x4bc9fb.filter(_0x15739 => {
    if (!_0x15739 || _0x26a05f.has(_0x15739.toLowerCase())) {
      return false;
    }
    _0x26a05f.add(_0x15739.toLowerCase());
    return true;
  });
  document.getElementById("inDS1").value = _0x2d20a7;
  document.getElementById("inDS2").value = _0x416441[0] || "";
  document.getElementById("inDS3").value = _0x416441[1] || "";
  document.getElementById("inDS4").value = _0x416441[2] || "";
  const _0x4b58b8 = document.getElementById("finalCSSection");
  if (_0x4b58b8) {
    const _0x25b0d2 = window.currentUser === "DPI" || String(window.currentUser || "").startsWith("JD");
    _0x4b58b8.style.display = _0x25b0d2 ? "block" : "none";
    if (_0x25b0d2) {
      const _0x210353 = [_0x13ce31, _0x76e07d[0] || "", _0x76e07d[1] || "", _0x76e07d[2] || "", _0x2d20a7, _0x416441[0] || "", _0x416441[1] || "", _0x416441[2] || ""];
      const _0x1e812e = [];
      _0x210353.forEach(_0x57b527 => {
        if (_0x57b527 && _0x57b527 !== "NIL" && !_0x1e812e.includes(_0x57b527) && _0x1e812e.length < 4) {
          _0x1e812e.push(_0x57b527);
        }
      });
      document.getElementById("inFS1").value = _0x1e812e[0] || "";
      document.getElementById("inFS2").value = _0x1e812e[1] || "";
      document.getElementById("inFS3").value = _0x1e812e[2] || "";
      document.getElementById("inFS4").value = _0x1e812e[3] || "";
    }
  }
}
let _addSubjectTarget = 1;
function openAddSubjectModal(_0x1233cc) {
  _addSubjectTarget = _0x1233cc;
  const _0x438637 = _0x1233cc === 1;
  document.getElementById("addSubjectTitle").textContent = (_0x438637 ? "➕ UG Qualification 1" : "➕ UG Qualification 2") + " — Add / Remove Subject";
  document.getElementById("addSubjectCard").style.borderColor = _0x438637 ? "#0d47a1" : "#800080";
  const _0x3ce3b9 = _0x438637 ? "in8" : "in12";
  const _0x2cb914 = _0x438637 ? "in9" : "in13";
  const _0x307a0e = _0x438637 ? "in10" : "in14";
  const _0x2a8e5f = _0x438637 ? "in11" : "in15";
  document.getElementById("asQual").value = document.getElementById(_0x3ce3b9).value;
  document.getElementById("asSubSingle").value = "";
  const _0x448064 = window.currentUser === "DPI";
  const _0x22d4d8 = document.getElementById("asRemoveSection");
  _0x22d4d8.style.display = _0x448064 ? "block" : "none";
  if (_0x448064) {
    document.getElementById("asRem1").value = document.getElementById(_0x2cb914).value;
    document.getElementById("asRem2").value = document.getElementById(_0x307a0e).value;
    document.getElementById("asRem3").value = document.getElementById(_0x2a8e5f).value;
  }
  document.getElementById("addSubjectModal").style.display = "flex";
  renderCounsellingMapList();
  setTimeout(() => document.getElementById("asSubSingle").focus(), 100);
}
function closeAddSubjectModal() {
  document.getElementById("addSubjectModal").style.display = "none";
}
function updateAddSubjectOptions() {}
function renderCounsellingMapList() {
  const _0x42bcee = document.getElementById("asCounsellingMapList");
  if (!_0x42bcee) {
    return;
  }
  const _0x3a0bf0 = Object.entries(ugToCounsellingMap);
  if (_0x3a0bf0.length === 0) {
    _0x42bcee.innerHTML = "<span style=\"color:#aaa;font-size:10px;\">कोई मैपिंग नहीं है।</span>";
    return;
  }
  _0x42bcee.innerHTML = _0x3a0bf0.map(([_0x31ebd8, _0xc3f6ec]) => "<div style=\"display:flex;justify-content:space-between;align-items:center;padding:3px 5px;border-bottom:1px solid rgba(255,255,255,.08);\">\n       <span style=\"color:#fff;font-weight:600;\">" + _0x31ebd8 + "</span>\n       <span style=\"color:#81d4fa;margin:0 8px;\">→</span>\n       <span style=\"color:#a5d6a7;font-weight:700;flex:1;text-align:right;\">" + (_0xc3f6ec || "(blank)") + "</span>\n     </div>").join("");
}
function addCounsellingMapping() {
  const _0x1964e5 = document.getElementById("asCMapQual").value.trim();
  const _0x38ecd2 = document.getElementById("asCMapSubject").value;
  if (!_0x1964e5) {
    myAlert("❌ UG Qualification लिखें!");
    return;
  }
  if (!_0x38ecd2) {
    myAlert("❌ Counselling Subject चुनें!");
    return;
  }
  ugToCounsellingMap[_0x1964e5] = _0x38ecd2;
  ugToCounsellingSubject[_0x1964e5] = _0x38ecd2;
  document.getElementById("asCMapQual").value = "";
  document.getElementById("asCMapSubject").value = "";
  renderCounsellingMapList();
  showNotification("✅ मैपिंग सेव हुई: " + _0x1964e5 + " → " + _0x38ecd2, "update");
  if (typeof computeCounsellingSubjects === "function") {
    computeCounsellingSubjects();
  }
}
function deleteCounsellingMapping() {
  const _0x189869 = document.getElementById("asCMapDeleteQual").value.trim();
  if (!_0x189869) {
    myAlert("❌ हटाने के लिए Qualification लिखें!");
    return;
  }
  if (ugToCounsellingMap[_0x189869] === undefined) {
    myAlert("❌ \"" + _0x189869 + "\" की मैपिंग नहीं मिली!");
    return;
  }
  delete ugToCounsellingMap[_0x189869];
  delete ugToCounsellingSubject[_0x189869];
  document.getElementById("asCMapDeleteQual").value = "";
  renderCounsellingMapList();
  showNotification("🗑️ मैपिंग हटाई: " + _0x189869, "delete");
  if (typeof computeCounsellingSubjects === "function") {
    computeCounsellingSubjects();
  }
}
function applyAddSubject() {
  const _0xc86374 = document.getElementById("asQual").value.trim();
  const _0x59249d = document.getElementById("asSubSingle").value.trim();
  if (!_0x59249d) {
    myAlert("❌ Subject likhein!");
    return;
  }
  const _0x3619d0 = _addSubjectTarget === 1;
  const _0x2650fe = _0x3619d0 ? "in8" : "in12";
  const _0x2f18b4 = _0x3619d0 ? "in9" : "in13";
  const _0x434c4a = _0x3619d0 ? "in10" : "in14";
  const _0x556ccc = _0x3619d0 ? "in11" : "in15";
  const _0x51c748 = (_0x47a029, _0x18c2d6) => {
    const _0x1771b7 = document.getElementById(_0x47a029);
    if (!_0x1771b7) {
      return;
    }
    if (_0x1771b7.tagName === "SELECT") {
      let _0x375b57 = Array.from(_0x1771b7.options).find(_0x512bd9 => _0x512bd9.value.toUpperCase() === _0x18c2d6.toUpperCase());
      if (!_0x375b57 && _0x18c2d6) {
        const _0x1ace68 = document.createElement("option");
        _0x1ace68.value = _0x18c2d6;
        _0x1ace68.textContent = _0x18c2d6;
        _0x1771b7.appendChild(_0x1ace68);
        _0x375b57 = _0x1ace68;
      }
      if (_0x375b57) {
        _0x1771b7.value = _0x375b57.value;
      }
    } else {
      _0x1771b7.value = _0x18c2d6;
    }
  };
  if (_0xc86374) {
    _0x51c748(_0x2650fe, _0xc86374);
  }
  _0x51c748(_0x2f18b4, _0x59249d);
  _0x51c748(_0x434c4a, _0x59249d);
  _0x51c748(_0x556ccc, _0x59249d);
  document.getElementById("asSubSingle").value = "";
  if (window.currentUser === "DPI") {
    document.getElementById("asRem1").value = document.getElementById(_0x2f18b4).value;
    document.getElementById("asRem2").value = document.getElementById(_0x434c4a).value;
    document.getElementById("asRem3").value = document.getElementById(_0x556ccc).value;
  }
}
function removeSubjectField(_0x2c9ead) {
  if (window.currentUser !== "DPI") {
    return;
  }
  const _0x41fa30 = _addSubjectTarget === 1;
  const _0x39d062 = _0x41fa30 ? ["in9", "in10", "in11"][_0x2c9ead - 1] : ["in13", "in14", "in15"][_0x2c9ead - 1];
  const _0xe3f6c7 = document.getElementById(_0x39d062);
  if (_0xe3f6c7) {
    _0xe3f6c7.value = "";
  }
  document.getElementById("asRem" + _0x2c9ead).value = "";
}
let _removeSubjectTarget = 1;
let _removeSubjectUID = "";
function openRemoveSubjectModal(_0x2db6f7) {
  _removeSubjectTarget = _0x2db6f7;
  _removeSubjectUID = document.getElementById("in2").value;
  const _0x274acf = _0x2db6f7 === 1;
  document.getElementById("removeSubjectTitle").textContent = (_0x274acf ? "🗑 UG Qualification 1" : "🗑 UG Qualification 2") + " — Clear Degree / Subject";
  document.getElementById("removeSubjectCard").style.borderColor = _0x274acf ? "#c62828" : "#8b008b";
  const _0x337121 = _0x274acf ? "in8" : "in12";
  const _0x1cd3cf = _0x274acf ? "in9" : "in13";
  const _0x561585 = _0x274acf ? "in10" : "in14";
  const _0x5c278c = _0x274acf ? "in11" : "in15";
  document.getElementById("rmDegree").value = document.getElementById(_0x337121).value || "(empty)";
  document.getElementById("rmSub1").value = document.getElementById(_0x1cd3cf).value || "(empty)";
  document.getElementById("rmSub2").value = document.getElementById(_0x561585).value || "(empty)";
  document.getElementById("rmSub3").value = document.getElementById(_0x5c278c).value || "(empty)";
  document.getElementById("removeSubjectModal").style.display = "flex";
}
function _clearDropdown(_0x59ae7a) {
  const _0x47392e = document.getElementById(_0x59ae7a);
  if (!_0x47392e) {
    return;
  }
  const _0x4c8e9b = new Set(["", "B.A.", "B.Sc.", "B.Com.", "BCA", "BBA", "B.Tech.", "NIL", "Biology", "Botany", "Chemistry", "Commerce", "Computer Science", "Economics", "English Literature", "Geography", "Hindi Literature", "History", "Home Science", "Maths", "Physics", "Political Science", "Psychology", "Sanskrit Literature", "Sociology", "Urdu Literature", "Zoology", "SELECT", "SELECT DISTRICT"]);
  Array.from(_0x47392e.options).slice().reverse().forEach(_0x3f41c3 => {
    if (_0x3f41c3.value && !_0x4c8e9b.has(_0x3f41c3.value)) {
      _0x47392e.removeChild(_0x3f41c3);
    }
  });
  _0x47392e.selectedIndex = 0;
  _0x47392e.value = "";
}
function _patchSupabase(_0x228ab0, _0x3d0f65, _0x4ad83c) {
  const _0x118765 = getSupabase();
  if (!_0x118765 || !_0x228ab0._sbId) {
    myAlert("⚠️ Supabase ID missing. Record save karo pehle.");
    return;
  }
  _0x118765.from("ps_gradation").update(_0x3d0f65).eq("id", _0x228ab0._sbId).then(({
    error: _0x1fb910
  }) => {
    if (_0x1fb910) {
      myAlert("❌ Supabase error: " + _0x1fb910.message);
    } else {
      _0x4ad83c();
    }
  });
}
function doRemoveDegree() {
  const _0x1c9d0c = _removeSubjectTarget === 1;
  const _0x123b6c = _0x1c9d0c ? "in8" : "in12";
  const _0x1dc469 = _0x1c9d0c ? "in9" : "in13";
  const _0x37e465 = _0x1c9d0c ? "in10" : "in14";
  const _0x4f056b = _0x1c9d0c ? "in11" : "in15";
  const _0x16a015 = _0x1c9d0c ? "field8" : "field12";
  const _0x19e465 = _0x1c9d0c ? "field9" : "field13";
  const _0x580482 = _0x1c9d0c ? "field10" : "field14";
  const _0x53a012 = _0x1c9d0c ? "field11" : "field15";
  const _0x24913c = _removeSubjectUID;
  if (!_0x24913c) {
    myAlert("⚠️ Pehle record search karke kholein.");
    return;
  }
  const _0xddd864 = window.fullData.findIndex(_0x2f9f84 => _0x2f9f84.field2 === _0x24913c);
  if (_0xddd864 < 0) {
    myAlert("❌ Record not found.");
    return;
  }
  const _0x209036 = window.fullData[_0xddd864];
  [_0x123b6c, _0x1dc469, _0x37e465, _0x4f056b].forEach(_0x2a8990 => _clearDropdown(_0x2a8990));
  document.getElementById("rmDegree").value = "(empty)";
  document.getElementById("rmSub1").value = "(empty)";
  document.getElementById("rmSub2").value = "(empty)";
  document.getElementById("rmSub3").value = "(empty)";
  _0x209036[_0x16a015] = "";
  _0x209036[_0x19e465] = "";
  _0x209036[_0x580482] = "";
  _0x209036[_0x53a012] = "";
  const _0x2948a3 = {
    [_0x16a015]: null,
    [_0x19e465]: null,
    [_0x580482]: null,
    [_0x53a012]: null
  };
  _patchSupabase(_0x209036, _0x2948a3, () => {
    renderVirtual();
    closeRemoveSubjectModal();
    loadRecord(_0x24913c);
    myAlert("✅ Degree aur subjects clear ho gaye!");
  });
}
function closeRemoveSubjectModal() {
  document.getElementById("removeSubjectModal").style.display = "none";
}
function doRemoveSubject(_0x1e285d) {
  const _0x41eb23 = _removeSubjectTarget === 1;
  const _0x4f613b = _0x41eb23 ? ["in9", "in10", "in11"][_0x1e285d - 1] : ["in13", "in14", "in15"][_0x1e285d - 1];
  const _0x166397 = _0x41eb23 ? ["field9", "field10", "field11"][_0x1e285d - 1] : ["field13", "field14", "field15"][_0x1e285d - 1];
  const _0x2bb3ea = _removeSubjectUID;
  if (!_0x2bb3ea) {
    myAlert("⚠️ Pehle record search karke kholein.");
    return;
  }
  const _0x49ee20 = window.fullData.findIndex(_0x1df629 => _0x1df629.field2 === _0x2bb3ea);
  if (_0x49ee20 < 0) {
    myAlert("❌ Record not found.");
    return;
  }
  const _0x18f3d2 = window.fullData[_0x49ee20];
  _clearDropdown(_0x4f613b);
  document.getElementById("rmSub" + _0x1e285d).value = "(empty)";
  _0x18f3d2[_0x166397] = "";
  _patchSupabase(_0x18f3d2, {
    [_0x166397]: null
  }, () => {
    renderVirtual();
    loadRecord(_0x2bb3ea);
  });
}
async function doRemoveAllSubjects() {
  if (!confirm("Kya aap teeno subjects clear karna chahte hain?")) {
    return;
  }
  const _0x5ead69 = _removeSubjectTarget === 1;
  const _0x501390 = _0x5ead69 ? ["in9", "in10", "in11"] : ["in13", "in14", "in15"];
  const _0x3fafa7 = _0x5ead69 ? ["field9", "field10", "field11"] : ["field13", "field14", "field15"];
  const _0x35fdc7 = _removeSubjectUID;
  if (!_0x35fdc7) {
    myAlert("⚠️ Pehle record search karke kholein.");
    return;
  }
  const _0x14ee80 = window.fullData.findIndex(_0x2e4a06 => _0x2e4a06.field2 === _0x35fdc7);
  if (_0x14ee80 < 0) {
    myAlert("❌ Record not found.");
    return;
  }
  const _0x4bc242 = window.fullData[_0x14ee80];
  _0x501390.forEach((_0x14aba9, _0x599d2e) => {
    _clearDropdown(_0x14aba9);
    document.getElementById("rmSub" + (_0x599d2e + 1)).value = "(empty)";
  });
  const _0x16aae0 = {};
  _0x3fafa7.forEach(_0x582ec9 => {
    _0x4bc242[_0x582ec9] = "";
    _0x16aae0[_0x582ec9] = null;
  });
  _patchSupabase(_0x4bc242, _0x16aae0, () => {
    renderVirtual();
    closeRemoveSubjectModal();
    loadRecord(_0x35fdc7);
    myAlert("✅ Teeno subjects clear ho gaye!");
  });
}
function clearField(_0x35a563) {
  if (window.currentUser !== "DPI") {
    return;
  }
  const _0x54305a = document.getElementById(_0x35a563);
  if (_0x54305a) {
    _0x54305a.selectedIndex = 0;
  }
}
function showDpiClearButtons() {
  document.querySelectorAll(".remove-sub-btn").forEach(_0x1fb722 => _0x1fb722.style.display = "inline-block");
}
function handleUPPLogic() {
  const _0x2d1afd = document.getElementById("in25").value;
  const _0x38d6d5 = document.getElementById("in26");
  const _0x465b84 = document.getElementById("in27");
  const _0x216e0c = document.getElementById("in28");
  if (_0x2d1afd === "YES") {
    _0x38d6d5.readOnly = false;
    _0x465b84.readOnly = false;
    _0x216e0c.disabled = false;
    [_0x38d6d5, _0x465b84, _0x216e0c].forEach(_0x477f81 => {
      _0x477f81.style.pointerEvents = "auto";
      _0x477f81.style.background = "#fff";
      _0x477f81.style.cursor = "";
    });
  } else {
    _0x38d6d5.value = "";
    _0x465b84.value = "";
    _0x216e0c.selectedIndex = 0;
    _0x38d6d5.readOnly = true;
    _0x465b84.readOnly = true;
    _0x216e0c.disabled = true;
    [_0x38d6d5, _0x465b84, _0x216e0c].forEach(_0x1fbf82 => {
      _0x1fbf82.style.pointerEvents = "none";
      _0x1fbf82.style.background = "#bdc3c7";
      _0x1fbf82.style.cursor = "not-allowed";
    });
  }
}
function validateDates() {
  const _0x12c480 = new Date().toISOString().split("T")[0];
  ["in6", "in17", "in18", "in19"].forEach(_0x3aee15 => {
    const _0x55128d = document.getElementById(_0x3aee15);
    if (_0x55128d && !_0x55128d.max) {
      _0x55128d.max = _0x12c480;
    }
  });
  const _0x1c00a9 = document.getElementById("in6").value;
  const _0x4bc827 = document.getElementById("in17").value;
  let _0x1e115c = [];
  if (_0x1c00a9 && _0x1c00a9 < "1961-04-01") {
    markInvalid("in6", "❌ DOB cannot be before 01-04-1961.");
    _0x1e115c.push("DOB: 01-04-1961 se pahle nahi");
  } else {
    markValid("in6");
  }
  if (_0x4bc827 && _0x4bc827 < "1994-01-01") {
    markInvalid("in17", "❌ First Appointment cannot be before 01-01-1994.");
    _0x1e115c.push("First Appt: 01-01-1994 se pahle nahi");
  } else {
    markValid("in17");
  }
  if (_0x1c00a9 && _0x4bc827) {
    const _0xc2a202 = (new Date(_0x4bc827) - new Date(_0x1c00a9)) / 31557600000;
    if (_0xc2a202 < 18) {
      markInvalid("in6", "❌ Min 18 years gap between DOB and First Appointment.");
      markInvalid("in17", "❌ Min 18 years gap.");
      _0x1e115c.push("18 years gap required.");
    }
  }
  ["in6", "in17", "in18"].forEach(_0x260e50 => {
    const _0x1c1ee1 = document.getElementById(_0x260e50);
    if (_0x1c1ee1 && _0x1c1ee1.value && _0x1c1ee1.value > _0x12c480) {
      markInvalid(_0x260e50, "❌ Future dates not allowed.");
      _0x1e115c.push(_0x260e50 + ": future date");
    }
  });
  return _0x1e115c;
}
function markInvalid(_0x42cd5e, _0x1fefcd) {
  const _0x55099f = document.getElementById(_0x42cd5e);
  if (!_0x55099f) {
    return;
  }
  _0x55099f.classList.add("invalid-field");
  _0x55099f.title = _0x1fefcd;
  _0x55099f.style.outline = "2px solid red";
  _0x55099f.style.borderColor = "red";
  _0x55099f.style.boxShadow = "0 0 0 2px rgba(220,38,38,0.35)";
  _0x55099f.style.background = "#fecaca";
  if (!_0x55099f._clr) {
    _0x55099f._clr = true;
    const _0x4667b5 = function () {
      realtimeDateValidate(_0x42cd5e);
    };
    _0x55099f.addEventListener("input", _0x4667b5);
    _0x55099f.addEventListener("change", _0x4667b5);
  }
}
function markValid(_0x14f3a4) {
  const _0x4a9239 = document.getElementById(_0x14f3a4);
  if (_0x4a9239) {
    _0x4a9239.classList.remove("invalid-field");
    _0x4a9239.title = "";
    _0x4a9239.style.outline = "";
    _0x4a9239.style.borderColor = "";
    _0x4a9239.style.boxShadow = "";
    _0x4a9239.style.background = "";
  }
}
function realtimeDateValidate(_0x38b544) {
  const _0x2554b0 = new Date().toISOString().split("T")[0];
  const _0x197afe = (document.getElementById("in6") || {}).value || "";
  const _0x5a4e2c = (document.getElementById("in17") || {}).value || "";
  const _0x3425ec = (document.getElementById("in18") || {}).value || "";
  const _0x5acfb5 = (document.getElementById("in19mode") || {}).value || "DATE";
  const _0x45731d = _0x5acfb5 === "NIL" ? "" : (document.getElementById("in19") || {}).value || "";
  if (_0x197afe) {
    if (_0x197afe > _0x2554b0) {
      markInvalid("in6", "❌ Future date allowed nahi hai.");
    } else if (_0x197afe < "1961-04-01") {
      markInvalid("in6", "❌ DOB 01-04-1961 se pahle nahi ho sakti.");
    } else if (_0x5a4e2c) {
      const _0x486dbe = (new Date(_0x5a4e2c) - new Date(_0x197afe)) / 31557600000;
      if (_0x486dbe < 18) {
        markInvalid("in6", "❌ DOB aur First Appointment mein kam se kam 18 saal ka antar hona chahiye.");
      } else {
        markValid("in6");
      }
    } else {
      markValid("in6");
    }
  } else {
    markValid("in6");
  }
  if (_0x5a4e2c) {
    if (_0x5a4e2c > _0x2554b0) {
      markInvalid("in17", "❌ Future date allowed nahi hai.");
    } else if (_0x5a4e2c < "1994-01-01") {
      markInvalid("in17", "❌ First Appointment 01-01-1994 se pahle nahi ho sakti.");
    } else if (_0x197afe) {
      const _0x42ad1f = (new Date(_0x5a4e2c) - new Date(_0x197afe)) / 31557600000;
      if (_0x42ad1f < 18) {
        markInvalid("in17", "❌ DOB aur First Appointment mein kam se kam 18 saal ka antar hona chahiye.");
      } else {
        markValid("in17");
      }
    } else {
      markValid("in17");
    }
  } else {
    markValid("in17");
  }
  if (_0x3425ec) {
    if (_0x3425ec > _0x2554b0) {
      markInvalid("in18", "❌ Future date allowed nahi hai.");
    } else {
      markValid("in18");
    }
  } else {
    markValid("in18");
  }
  if (_0x5acfb5 === "DATE") {
    if (_0x45731d) {
      if (_0x45731d > _0x2554b0) {
        markInvalid("in19", "❌ Future date allowed nahi hai.");
      } else if (_0x5a4e2c && _0x45731d <= _0x5a4e2c) {
        markInvalid("in19", "❌ Transfer Date, First Appointment Date (" + _0x5a4e2c + ") ke baad honi chahiye.");
      } else {
        markValid("in19");
      }
    } else {
      markValid("in19");
    }
  } else {
    markValid("in19");
  }
}
function attachDateListeners() {
  ["in6", "in17", "in18", "in19"].forEach(_0x107369 => {
    const _0x3be76a = document.getElementById(_0x107369);
    if (!_0x3be76a || _0x3be76a._rtDateBound) {
      return;
    }
    _0x3be76a._rtDateBound = true;
    const _0x274be1 = () => realtimeDateValidate(_0x107369);
    _0x3be76a.addEventListener("change", _0x274be1);
    _0x3be76a.addEventListener("blur", _0x274be1);
  });
  const _0x5ca7e3 = document.getElementById("in19mode");
  if (_0x5ca7e3 && !_0x5ca7e3._rtDateBound) {
    _0x5ca7e3._rtDateBound = true;
    _0x5ca7e3.addEventListener("change", () => realtimeDateValidate("in19"));
  }
}
function checkDuplicateID(_0x5d3c46) {
  if (!_0x5d3c46.value) {
    return;
  }
  if (_0x5d3c46.value.length !== 6) {
    myAlert("Unique ID must be exactly 6 characters!");
    _0x5d3c46.value = "";
    _0x5d3c46.focus();
    return;
  }
  if (!/^[A-Z]{2}[0-9]{4}$/.test(_0x5d3c46.value)) {
    myAlert("❌ Invalid format!\nFirst 2: A-Z, Last 4: 0-9\nExample: AB1234");
    _0x5d3c46.value = "";
    _0x5d3c46.focus();
    return;
  }
  const _0xf433de = window.fullData.find(_0x959d6c => _0x959d6c.field2 === _0x5d3c46.value);
  if (_0xf433de) {
    myAlert("This Unique ID Already Submitted!\nUse Search to Update.");
    _0x5d3c46.value = "";
    _0x5d3c46.focus();
  }
}
function validateRequired() {
  let _0x4af6aa = [];
  const _0x127472 = [["in2", "Unique ID"], ["in3", "Name"], ["in4", "Category"], ["in5", "Gender"], ["in6", "Date of Birth"], ["in8", "UG Qualification-1"], ["in9", "UG1 Subject-1"], ["in10", "UG1 Subject-2"], ["in11", "UG1 Subject-3"], ["in12", "UG Qualification-2"], ["in13", "UG2 Subject-1"], ["in14", "UG2 Subject-2"], ["in15", "UG2 Subject-3"], ["in16", "Home District"], ["in17", "Date of First Appointment"], ["in18", "Seniority Date"], ["in20", "Present Posting Place"], ["in21", "UDISE Code"], ["in23", "Present Posting District"]];
  for (const [_0x9fa733, _0x19ab19] of _0x127472) {
    const _0xdf01d5 = document.getElementById(_0x9fa733);
    if (!_0xdf01d5) {
      continue;
    }
    const _0x22f822 = _0xdf01d5.value || "";
    if (!_0x22f822.trim()) {
      markInvalid(_0x9fa733, "❌ " + _0x19ab19 + " is required.");
      _0x4af6aa.push(_0x19ab19);
    } else {
      markValid(_0x9fa733);
    }
  }
  const _0x2ed2ad = (document.getElementById("in7") || {}).value || "";
  if (!_0x2ed2ad.trim()) {
    const _0x4feaf6 = document.getElementById("ms7Container");
    if (_0x4feaf6) {
      _0x4feaf6.style.outline = "2px solid red";
      _0x4feaf6.title = "❌ Professional Qualification is required.";
    }
    _0x4af6aa.push("Professional Qualification");
  } else {
    const _0x3f4ee1 = document.getElementById("ms7Container");
    if (_0x3f4ee1) {
      _0x3f4ee1.style.outline = "";
      _0x3f4ee1.title = "";
    }
  }
  const _0x3c2588 = (document.getElementById("in19mode") || {}).value || "DATE";
  if (_0x3c2588 === "DATE") {
    const _0x488207 = (document.getElementById("in19") || {}).value || "";
    const _0x553012 = (document.getElementById("in17") || {}).value || "";
    if (!_0x488207.trim()) {
      markInvalid("in19", "❌ Transfer Date is required.");
      _0x4af6aa.push("Transfer/Samvilion Date");
    } else if (_0x553012 && _0x488207 <= _0x553012) {
      markInvalid("in19", "❌ Transfer Date must be after Date of First Appointment (" + _0x553012 + ").");
      _0x4af6aa.push("Transfer Date must be after First Appointment Date");
    } else {
      markValid("in19");
    }
  }
  if ((document.getElementById("in25") || {}).value === "YES") {
    if (!(document.getElementById("in26") || {}).value.trim()) {
      markInvalid("in26", "❌ उच्च पद शाला required.");
      _0x4af6aa.push("उच्च पद शाला नाम");
    } else {
      markValid("in26");
    }
    if (!(document.getElementById("in27") || {}).value.trim()) {
      markInvalid("in27", "❌ उच्च पद UDISE required.");
      _0x4af6aa.push("उच्च पद UDISE");
    } else {
      markValid("in27");
    }
    if (!(document.getElementById("in28") || {}).value.trim()) {
      markInvalid("in28", "❌ उच्च पद जिला required.");
      _0x4af6aa.push("उच्च पद जिला");
    } else {
      markValid("in28");
    }
  }
  const _0x4beeb1 = (document.getElementById("in25") || {}).value || "";
  if (!_0x4beeb1.trim()) {
    markInvalid("in25", "❌ उच्च पद ज्वाइन (YES/NO) is required.");
    _0x4af6aa.push("उच्च पद ज्वाइन (YES/NO)");
  } else {
    markValid("in25");
  }
  return _0x4af6aa;
}
function buildRowFromForm(_0x5e2e0c, _0x3b93ff) {
  const _0x255c39 = _0x5e2e0c ? window.fullData.length + 1 : null;
  const _0x35616b = document.getElementById("in19mode").value;
  const _0xd32468 = _0x35616b === "NIL" ? "NIL" : document.getElementById("in19").value;
  const _0x7f9ba5 = (_0x5e2e0c ? "New Entry by " : "Updated by ") + currentUser + " | " + _0x3b93ff;
  return {
    field1: _0x5e2e0c ? String(_0x255c39) : (window.fullData.find(_0x31869a => _0x31869a.field2 === document.getElementById("in2").value) || {}).field1 || String(window.fullData.length),
    field2: document.getElementById("in2").value,
    field3: document.getElementById("in3").value,
    field4: document.getElementById("in4").value,
    field5: document.getElementById("in5").value,
    field6: document.getElementById("in6").value,
    field7: document.getElementById("in7").value,
    field8: document.getElementById("in8").value,
    field9: document.getElementById("in9").value,
    field10: document.getElementById("in10").value,
    field11: document.getElementById("in11").value,
    field12: document.getElementById("in12").value,
    field13: document.getElementById("in13").value,
    field14: document.getElementById("in14").value,
    field15: document.getElementById("in15").value,
    field16: document.getElementById("in16").value,
    field17: document.getElementById("in17").value,
    field18: document.getElementById("in18").value,
    field19: _0xd32468,
    field20: document.getElementById("in20").value,
    field21: document.getElementById("in21").value,
    field22: "",
    field23: document.getElementById("in23").value,
    field24: document.getElementById("in24").value.trim() || "NO",
    field25: document.getElementById("in25").value || "NO",
    field26: document.getElementById("in26").value,
    field27: document.getElementById("in27").value,
    field28: document.getElementById("in28").value,
    field29: "",
    field30: "",
    field31: "",
    _updatedBy: _0x7f9ba5
  };
}
function saveEntry(_0x3c91a1) {
  if (!currentUser) {
    myAlert("Please log in.");
    return;
  }
  const _0x4329c6 = validateRequired();
  const _0x22e97b = validateDates();
  const _0x175cca = [..._0x4329c6, ..._0x22e97b];
  if (_0x175cca.length > 0) {
    myAlert("❌ Please fix errors:\n\n• " + _0x175cca.slice(0, 8).join("\n• ") + (_0x175cca.length > 8 ? "\n...and more" : ""));
    return;
  }
  const _0x364d49 = (document.getElementById("in23").value || "").trim();
  const _0x55699f = getAllowedDistricts(currentUser);
  if (_0x55699f !== null && _0x364d49) {
    const _0x4b78af = _0x55699f.some(_0x3dbf98 => _0x364d49.toLowerCase() === _0x3dbf98.toLowerCase() || _0x364d49.toLowerCase().includes(_0x3dbf98.toLowerCase()) || _0x3dbf98.toLowerCase().includes(_0x364d49.toLowerCase()));
    if (!_0x4b78af) {
      myAlert("⛔ आप केवल अपने अधिकार क्षेत्र के जिलों का डेटा save कर सकते हैं।\n\nAllowed districts:\n" + _0x55699f.join(", "));
      return;
    }
  }
  const _0x27bc1f = new Date().toLocaleString("en-IN");
  if (_0x3c91a1) {
    const _0x26bca4 = buildRowFromForm(true, _0x27bc1f);
    _0x26bca4.field29 = "New Entry";
    _0x26bca4.field30 = "New Entry by " + currentUser + " | " + _0x27bc1f;
    _0x26bca4.field31 = "";
    if (currentDocData) {
      _0x26bca4._doc = currentDocData;
      _0x26bca4.field31 = currentDocData.name;
    }
    currentDocData = null;
    const _0x4b573c = document.getElementById("fileNameDisplay");
    if (_0x4b573c) {
      _0x4b573c.textContent = "Click to Select File (PDF/JPG)";
    }
    window.fullData.push(_0x26bca4);
    window.filteredData = [...window.fullData];
    renderVirtual();
    auditLog("ADD", "Added: " + _0x26bca4.field2);
    if (typeof broadcastDataUpdate === "function") {
      broadcastDataUpdate(_psRealtimeDistrict() + " ne naya record add kiya: " + _0x26bca4.field3 + " — " + _0x26bca4.field4, "update");
    }
    saveAndSync(_0x26bca4).then(_0x3923cd => myAlert(_0x3923cd ? "✅ Record saved!\n\n" + _0x26bca4.field3 : "⚠️ Saved locally. Supabase sync failed."));
    clearForm();
  }
}
function handleUpdateClick() {
  if (!currentUser) {
    myAlert("Please log in.");
    return;
  }
  const _0x6a38c7 = validateRequired();
  const _0x44d44b = validateDates();
  const _0x3406f4 = [..._0x6a38c7, ..._0x44d44b];
  if (_0x3406f4.length > 0) {
    myAlert("❌ Please fix errors:\n\n• " + _0x3406f4.slice(0, 6).join("\n• "));
    return;
  }
  const _0x273522 = document.getElementById("in2").value;
  const _0x1ab7c4 = window.fullData.findIndex(_0x24f0af => _0x24f0af.field2 === _0x273522);
  if (_0x1ab7c4 < 0) {
    myAlert("❌ Record not found.");
    return;
  }
  const _0x53e25e = {
    ...window.fullData[_0x1ab7c4]
  };
  const _0x2bc60d = new Set([29, 30, 31]);
  const _0x598ad5 = buildRowFromForm(false, "");
  let _0x10c77e = false;
  for (let _0x3160bf = 0; _0x3160bf < colConfig.length; _0x3160bf++) {
    const _0x459c96 = colConfig[_0x3160bf].fi !== undefined ? colConfig[_0x3160bf].fi : _0x3160bf + 1;
    if (_0x2bc60d.has(_0x459c96)) {
      continue;
    }
    const _0x2f59a6 = "field" + _0x459c96;
    const _0x774577 = (_0x53e25e[_0x2f59a6] || "").toString().trim();
    const _0x4ac950 = (_0x598ad5[_0x2f59a6] || "").toString().trim();
    if (_0x774577 !== _0x4ac950) {
      _0x10c77e = true;
      break;
    }
  }
  if (currentDocData) {
    _0x10c77e = true;
  }
  if (!_0x10c77e) {
    myAlert("ℹ️ कोई बदलाव नहीं हुआ।\n\nNo changes detected — record update नहीं हुआ।");
    return;
  }
  const _0x477a2c = new Date().toLocaleString("en-IN");
  const _0x20c370 = buildRowFromForm(false, _0x477a2c);
  _0x20c370.field29 = "Updated";
  _0x20c370.field30 = "Updated by " + currentUser + " | " + _0x477a2c;
  _0x20c370.field31 = _0x53e25e.field31 || "";
  _0x20c370._doc = _0x53e25e._doc || null;
  const _0x322752 = new Set([29, 30, 31]);
  const _0x4a2c2d = _0x53e25e._changedFields || {};
  const _0x46219a = Object.assign({}, _0x4a2c2d);
  for (let _0x3b6780 = 0; _0x3b6780 < colConfig.length; _0x3b6780++) {
    const _0x1efe52 = colConfig[_0x3b6780].fi !== undefined ? colConfig[_0x3b6780].fi : _0x3b6780 + 1;
    if (_0x322752.has(_0x1efe52)) {
      continue;
    }
    const _0x16b354 = "field" + _0x1efe52;
    const _0x1dbddc = (_0x53e25e[_0x16b354] || "").toString().trim();
    const _0xa0cb97 = (_0x20c370[_0x16b354] || "").toString().trim();
    if (_0x1dbddc !== _0xa0cb97) {
      const _0x5420c8 = _0x4a2c2d[_0x1efe52] ? _0x4a2c2d[_0x1efe52].from : _0x1dbddc;
      if (_0x5420c8 === _0xa0cb97) {
        delete _0x46219a[_0x1efe52];
      } else {
        _0x46219a[_0x1efe52] = {
          from: _0x5420c8,
          to: _0xa0cb97
        };
      }
    }
  }
  _0x20c370._changedFields = Object.keys(_0x46219a).length > 0 ? _0x46219a : undefined;
  _0x20c370._sbId = _0x53e25e._sbId;
  _0x20c370.history_log = _0x53e25e.history_log ? [..._0x53e25e.history_log] : [];
  const _0x9b99c8 = {};
  const _0x5c4e93 = {};
  for (let _0x203690 = 1; _0x203690 <= 28; _0x203690++) {
    _0x9b99c8["field" + _0x203690] = (_0x53e25e["field" + _0x203690] || "").toString().trim();
    _0x5c4e93["field" + _0x203690] = (_0x20c370["field" + _0x203690] || "").toString().trim();
  }
  _0x20c370.history_log.push({
    time: _0x477a2c,
    user: currentUser,
    before: JSON.stringify(_0x9b99c8),
    after: JSON.stringify(_0x5c4e93)
  });
  if (currentDocData) {
    _0x20c370._doc = currentDocData;
    _0x20c370.field31 = currentDocData.name;
    currentDocData = null;
    document.getElementById("fileNameDisplay").textContent = "Click to Select File (PDF/JPG)";
  }
  document.getElementById("inUpdatedBy").value = _0x20c370.field30 || _0x20c370._updatedBy || "";
  window.fullData[_0x1ab7c4] = _0x20c370;
  window.filteredData = window.filteredData.map(_0x50fc24 => _0x50fc24.field2 === _0x273522 ? _0x20c370 : _0x50fc24);
  auditLog("UPDATE", "Updated: " + _0x273522);
  renderVirtual();
  if (typeof broadcastDataUpdate === "function") {
    broadcastDataUpdate(_psRealtimeDistrict() + " ne record update kiya: " + _0x273522, "update");
  }
  saveAndSync(_0x20c370).then(_0x2586fa => myAlert(_0x2586fa ? "✅ Record updated!\n\n" + _0x20c370.field3 : "⚠️ Updated locally. Supabase sync failed."));
  toggleForm(false);
}
function deleteEntry() {
  if (!currentUser) {
    myAlert("Please log in.");
    return;
  }
  const _0x193318 = document.getElementById("in2").value;
  if (!_0x193318) {
    myAlert("Please search and select a record first.");
    return;
  }
  const _0x53c45b = document.getElementById("in24").value.trim();
  if (!_0x53c45b || _0x53c45b.length <= 2) {
    myAlert("Please enter a deletion reason in the Remark field.");
    document.getElementById("in24").focus();
    return;
  }
  if (!confirm("SOFT DELETE this record?\n\nUnique ID: " + _0x193318 + "\nName: " + document.getElementById("in3").value + "\n\nRecord will be marked as DELETED.")) {
    return;
  }
  const _0x1f6ffd = window.fullData.findIndex(_0x14f1f8 => _0x14f1f8.field2 === _0x193318);
  if (_0x1f6ffd < 0) {
    myAlert("❌ Record not found.");
    return;
  }
  const _0x134b89 = window.fullData[_0x1f6ffd];
  _0x134b89.field24 = _0x53c45b;
  _0x134b89._softDeleted = true;
  _0x134b89.field29 = "Deleted";
  _0x134b89.field30 = "Deleted by " + currentUser + " | " + new Date().toLocaleString("en-IN");
  window.filteredData = window.filteredData.map(_0x319d32 => _0x319d32.field2 === _0x193318 ? _0x134b89 : _0x319d32);
  auditLog("DELETE", "Soft Deleted: " + _0x193318);
  renderVirtual();
  if (typeof broadcastDataUpdate === "function") {
    broadcastDataUpdate(_psRealtimeDistrict() + " ne record delete kiya: " + _0x193318, "delete");
  }
  saveAndSync(_0x134b89).then(_0x1f1df3 => myAlert(_0x1f1df3 ? "🗑 Record marked as deleted.\n\nID: " + _0x193318 : "⚠️ Deletion applied locally."));
  toggleForm(false);
}
function performSearch() {
  const _0x2a47a5 = document.getElementById("searchVal").value.trim().toUpperCase();
  if (!_0x2a47a5) {
    return;
  }
  const _0x40662e = window.fullData.find(_0x4a7568 => _0x4a7568.field2 === _0x2a47a5);
  if (!_0x40662e) {
    if (_0x2a47a5.length >= 6) {
      myAlert("❌ Record not found. Check Unique ID.");
    }
    return;
  }
  loadRecord(_0x2a47a5);
}
function loadRecord(_0xf8fef5) {
  const _0x14f21a = window.fullData.find(_0x1420e1 => _0x1420e1.field2 === _0xf8fef5);
  if (!_0x14f21a) {
    return;
  }
  if (typeof lockRow === "function") {
    lockRow(_0xf8fef5);
  }
  window._currentEditingUid = _0xf8fef5;
  toggleForm(true);
  const _0x53f2a3 = ["in1", "in2", "in3", "in4", "in5", "in6", "in8", "in9", "in10", "in11", "in12", "in13", "in14", "in15", "in16", "in17", "in18", "in20", "in21", "in23", "in24"];
  const _0x189a8e = {
    in1: "field1",
    in2: "field2",
    in3: "field3",
    in4: "field4",
    in5: "field5",
    in6: "field6",
    in8: "field8",
    in9: "field9",
    in10: "field10",
    in11: "field11",
    in12: "field12",
    in13: "field13",
    in14: "field14",
    in15: "field15",
    in16: "field16",
    in17: "field17",
    in18: "field18",
    in20: "field20",
    in21: "field21",
    in23: "field23",
    in24: "field24"
  };
  setMS7Value(_0x14f21a.field7 || "");
  function _0x5a858f(_0x38ae38, _0x2fdefa) {
    const _0x4dda65 = document.getElementById(_0x38ae38);
    if (!_0x4dda65) {
      return;
    }
    if (!_0x2fdefa) {
      _0x4dda65.selectedIndex = 0;
      _0x4dda65.value = "";
      return;
    }
    let _0x3f2058 = Array.from(_0x4dda65.options).find(_0x247d54 => _0x247d54.value === _0x2fdefa);
    if (!_0x3f2058) {
      const _0x1beaab = document.createElement("option");
      _0x1beaab.value = _0x2fdefa;
      _0x1beaab.textContent = _0x2fdefa;
      _0x4dda65.appendChild(_0x1beaab);
    }
    _0x4dda65.value = _0x2fdefa;
  }
  _0x53f2a3.forEach(_0x25a667 => {
    const _0x471a1f = document.getElementById(_0x25a667);
    if (!_0x471a1f) {
      return;
    }
    const _0x5d762b = _0x25a667 === "in24" ? _0x14f21a[_0x189a8e[_0x25a667]] || "NO" : _0x14f21a[_0x189a8e[_0x25a667]] || "";
    if (_0x471a1f.tagName === "SELECT") {
      _0x5a858f(_0x25a667, _0x5d762b);
    } else {
      _0x471a1f.value = _0x5d762b;
    }
  });
  if (_0x14f21a.field6) {
    onDobChange();
  }
  const _0xc2754c = document.getElementById("in17").value;
  const _0x2dbb37 = document.getElementById("in18");
  if (_0xc2754c && (!_0x2dbb37.value || _0x2dbb37.value === "")) {
    _0x2dbb37.value = _0xc2754c;
  }
  const _0x152ce0 = new Date().toISOString().split("T")[0];
  ["in6", "in17", "in18", "in19"].forEach(_0x56a5b9 => {
    const _0x1dd408 = document.getElementById(_0x56a5b9);
    if (_0x1dd408) {
      _0x1dd408.max = _0x152ce0;
    }
  });
  const _0x1358f2 = _0x14f21a.field19 || "";
  if (_0x1358f2 === "NIL") {
    document.getElementById("in19mode").value = "NIL";
    document.getElementById("in19").value = "";
    document.getElementById("in19").disabled = true;
    document.getElementById("in19").style.background = "#eee";
  } else {
    document.getElementById("in19mode").value = "DATE";
    document.getElementById("in19").value = parseToISO(_0x1358f2);
    document.getElementById("in19").disabled = false;
    document.getElementById("in19").style.background = "";
  }
  const _0x4fe671 = (_0x14f21a.field25 || "").toUpperCase();
  document.getElementById("in25").value = _0x4fe671 === "YES" ? "YES" : "NO";
  document.getElementById("in26").value = _0x14f21a.field26 || "";
  document.getElementById("in27").value = _0x14f21a.field27 || "";
  (function () {
    const _0x3b039c = document.getElementById("in28");
    const _0x207418 = (_0x14f21a.field28 || "").trim();
    if (!_0x207418) {
      _0x3b039c.selectedIndex = 0;
    } else if (Array.from(_0x3b039c.options).some(_0x19864f => _0x19864f.value === _0x207418)) {
      _0x3b039c.value = _0x207418;
    } else {
      const _0x591c8f = Array.from(_0x3b039c.options).find(_0x1f9c3c => _0x1f9c3c.value.toUpperCase() === _0x207418.toUpperCase());
      if (_0x591c8f) {
        _0x3b039c.value = _0x591c8f.value;
      }
    }
  })();
  handleUPPLogic();
  if ((_0x14f21a.field25 || "").toUpperCase() === "YES") {
    document.getElementById("in26").value = _0x14f21a.field26 || "";
    document.getElementById("in27").value = _0x14f21a.field27 || "";
  }
  document.getElementById("inUpdatedBy").value = _0x14f21a.field30 || _0x14f21a._updatedBy || "";
  const _0x161d4c = document.getElementById("inGradNo");
  if (_0x161d4c) {
    const _0x376c11 = _0x14f21a.field29 || "";
    _0x161d4c.value = !_0x376c11 || _0x376c11.includes("New") ? "New Entry" : "Updated";
  }
  const _0x31489a = document.getElementById("fileNameDisplay");
  if (_0x31489a) {
    if (_0x14f21a._doc && _0x14f21a._doc.name) {
      _0x31489a.textContent = "📎 " + _0x14f21a._doc.name + " (existing)";
    } else {
      _0x31489a.textContent = "Click to Select File (PDF/JPG)";
    }
  }
  currentDocData = null;
  document.getElementById("formStatusBadge").textContent = "EDIT RECORD";
  document.getElementById("formStatusBadge").style.background = "#e65100";
  document.getElementById("newAddBtn").disabled = true;
  document.getElementById("newAddBtn").style.opacity = ".45";
  document.getElementById("updateBtn").style.display = "inline-block";
  document.getElementById("deleteBtn").style.display = "inline-block";
  document.getElementById("searchVal").value = "";
  setTimeout(function () {
    computeCounsellingSubjects();
    refreshSubjectDisable("in9", "in10", "in11");
    refreshSubjectDisable("in13", "in14", "in15");
    ["in6", "in17", "in18", "in19"].forEach(_0x342185 => {
      const _0x17c16d = document.getElementById(_0x342185);
      if (_0x17c16d) {
        delete _0x17c16d._rtDateBound;
      }
    });
    attachDateListeners();
    realtimeDateValidate("in6");
  }, 150);
  scrollToRow(_0xf8fef5);
}
function toggleForm(_0x232134) {
  document.getElementById("formOverlay").style.display = _0x232134 ? "block" : "none";
  if (_0x232134) {
    const _0x3fd997 = new Date().toISOString().split("T")[0];
    ["in6", "in17", "in18", "in19"].forEach(_0x815589 => {
      const _0x38fdc8 = document.getElementById(_0x815589);
      if (_0x38fdc8) {
        _0x38fdc8.max = _0x3fd997;
      }
    });
    if (!document.getElementById("updateBtn").style.display.includes("inline")) {
      clearForm();
    }
    setTimeout(attachDateListeners, 80);
  }
  if (!_0x232134) {
    if (typeof unlockRow === "function" && window._currentEditingUid) {
      unlockRow(window._currentEditingUid);
      window._currentEditingUid = null;
    }
    clearForm();
  }
}
function clearForm() {
  const _0x4a4caa = ["in1", "in2", "in3", "in4", "in5", "in6", "in8", "in9", "in10", "in11", "in12", "in13", "in14", "in15", "in16", "in17", "in18", "in19", "in20", "in21", "in23", "in24", "in25", "in26", "in27", "in28"];
  _0x4a4caa.forEach(_0x6ca3ab => {
    const _0x10cc06 = document.getElementById(_0x6ca3ab);
    if (!_0x10cc06) {
      return;
    }
    if (_0x10cc06.tagName === "SELECT") {
      _0x10cc06.selectedIndex = 0;
    } else {
      _0x10cc06.value = "";
    }
    markValid(_0x6ca3ab);
  });
  setMS7Value("");
  ["inCS1", "inCS2", "inCS3", "inCS4", "inDS1", "inDS2", "inDS3", "inDS4", "inFS1", "inFS2", "inFS3", "inFS4"].forEach(_0x5e16e1 => {
    const _0x403bfb = document.getElementById(_0x5e16e1);
    if (_0x403bfb) {
      _0x403bfb.value = "";
    }
  });
  document.getElementById("retirementField").value = "";
  document.getElementById("inUpdatedBy").value = "";
  const _0x24b531 = document.getElementById("inGradNo");
  if (_0x24b531) {
    _0x24b531.value = "New Entry";
  }
  document.getElementById("in19mode").value = "DATE";
  document.getElementById("in19").disabled = false;
  document.getElementById("in19").style.background = "";
  document.getElementById("formStatusBadge").textContent = "NEW ENTRY";
  document.getElementById("formStatusBadge").style.background = "#1b5e20";
  document.getElementById("newAddBtn").disabled = false;
  document.getElementById("newAddBtn").style.opacity = "1";
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("deleteBtn").style.display = "none";
  const _0x47c9ca = DEO_DISTRICT[currentUser];
  if (_0x47c9ca) {
    document.getElementById("in23").value = _0x47c9ca;
    document.getElementById("in23").disabled = true;
  }
  document.getElementById("in24").value = "NO";
  document.getElementById("in25").value = "";
  handleUPPLogic();
  currentDocData = null;
  const _0x1641f1 = document.getElementById("fileNameDisplay");
  if (_0x1641f1) {
    _0x1641f1.textContent = "Click to Select File (PDF/JPG)";
  }
  ["in6", "in17", "in18", "in19"].forEach(_0x49afd0 => {
    const _0x3b41d3 = document.getElementById(_0x49afd0);
    if (_0x3b41d3) {
      delete _0x3b41d3._rtDateBound;
    }
  });
  setTimeout(attachDateListeners, 80);
}
function changeListZoom(_0x4fe070) {
  listZoom = Math.max(8, Math.min(18, listZoom + _0x4fe070));
  document.getElementById("listZoomVal").textContent = listZoom + "px";
  document.getElementById("dataTable").style.fontSize = listZoom + "px";
  VS._lastStart = -1;
  _vsRender(true);
}
function changeFormZoom(_0x2220fc) {
  formZoom = Math.max(9, Math.min(18, formZoom + _0x2220fc));
  document.getElementById("formZoomVal").textContent = formZoom + "px";
  document.getElementById("formCard").style.fontSize = formZoom + "px";
}
function toggleOtherToolbar(_0xb333e0) {
  if (_0xb333e0 && _0xb333e0.stopPropagation) {
    _0xb333e0.stopPropagation();
  }
  const _0x3997ad = document.getElementById("otherToolbarMenu");
  _0x3997ad.style.display = _0x3997ad.style.display === "block" ? "none" : "block";
}
function closeOtherToolbar() {
  const _0x5cc4b2 = document.getElementById("otherToolbarMenu");
  if (_0x5cc4b2) {
    _0x5cc4b2.style.display = "none";
  }
}
function importExcel(_0x264063) {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can import Excel.");
    return;
  }
  const _0x2a2967 = _0x264063.target.files[0];
  if (!_0x2a2967) {
    return;
  }
  const _0x2625ec = new FileReader();
  _0x2625ec.onload = function (_0x5daba9) {
    const _0x3bc39e = new Uint8Array(_0x5daba9.target.result);
    const _0x2ee8e1 = XLSX.read(_0x3bc39e, {
      type: "array"
    });
    const _0x5e3ae8 = _0x2ee8e1.Sheets[_0x2ee8e1.SheetNames[0]];
    const _0x2179a3 = XLSX.utils.sheet_to_json(_0x5e3ae8, {
      header: 1,
      defval: ""
    });
    if (_0x2179a3.length < 2) {
      myAlert("No data found in Excel.");
      return;
    }
    const _0x333ff4 = _0x2179a3.slice(1).map((_0x48a244, _0x3702f1) => {
      const _0x10f0ea = {};
      for (let _0x1c0a3d = 0; _0x1c0a3d < 28; _0x1c0a3d++) {
        _0x10f0ea["field" + (_0x1c0a3d + 1)] = (_0x48a244[_0x1c0a3d] || "").toString().trim();
      }
      _0x10f0ea.field1 = String(_0x3702f1 + 1);
      return _0x10f0ea;
    });
    window.fullData = _0x333ff4;
    window.filteredData = [..._0x333ff4];
    renderVirtual();
    const _0x45af89 = getSupabase();
    if (_0x45af89) {
      _0x45af89.from("ps_gradation").delete().neq("id", 0).then(() => {
        const _0x18b3e7 = 500;
        for (let _0x2c7cac = 0; _0x2c7cac < _0x333ff4.length; _0x2c7cac += _0x18b3e7) {
          const _0x233379 = _0x333ff4.slice(_0x2c7cac, _0x2c7cac + _0x18b3e7).map(_0xfc3db6 => {
            const _0x2dbcb2 = {};
            for (let _0x5ef852 = 1; _0x5ef852 <= 28; _0x5ef852++) {
              _0x2dbcb2["field" + _0x5ef852] = _0xfc3db6["field" + _0x5ef852] || "";
            }
            return _0x2dbcb2;
          });
          _0x45af89.from("ps_gradation").insert(_0x233379).select("id").then(({
            data: _0x53d888,
            error: _0x445e9c
          }) => {
            if (!_0x445e9c && _0x53d888) {
              _0x53d888.forEach((_0x430564, _0x1b7bcc) => {
                _0x333ff4[_0x2c7cac + _0x1b7bcc]._sbId = _0x430564.id;
              });
            }
          });
        }
      });
    }
    myAlert("✅ " + _0x333ff4.length + " records imported!");
    _0x264063.target.value = "";
  };
  _0x2625ec.readAsArrayBuffer(_0x2a2967);
}
function exportExcel() {
  const _0x5ed876 = colConfig.filter(_0xa37aaf => !_0xa37aaf.officeOnly && _0xa37aaf.fi !== 31);
  const _0x1d4521 = ["Final CS Sub-1", "Final CS Sub-2", "Final CS Sub-3", "Final CS Sub-4"];
  const _0x4633ca = _0x5ed876.map(_0x172b87 => _0x172b87.name).concat(_0x1d4521);
  const _0x2b43dd = window.filteredData.map(_0x57fd7f => {
    const _0x348a07 = _0x5ed876.map(_0xd21f7c => _0x57fd7f["field" + _0xd21f7c.fi] || "");
    const _0x46b1b7 = getRowCounsellingData(_0x57fd7f);
    const _0x485e59 = [_0x46b1b7[8] || "", _0x46b1b7[9] || "", _0x46b1b7[10] || "", _0x46b1b7[11] || ""];
    return _0x348a07.concat(_0x485e59);
  });
  const _0x1d4c12 = XLSX.utils.aoa_to_sheet([_0x4633ca, ..._0x2b43dd]);
  const _0x3e662c = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(_0x3e662c, _0x1d4c12, "Prathmik Shikshak");
  XLSX.writeFile(_0x3e662c, "PS_Gradation_" + new Date().toISOString().split("T")[0] + ".xlsx");
}
function exportPDF() {
  const {
    jsPDF: _0x1b3aec
  } = window.jspdf;
  const _0x2f3a4c = new _0x1b3aec({
    orientation: "landscape",
    unit: "mm",
    format: "a4"
  });
  const _0x41da3a = _0x2f3a4c.internal.pageSize.getWidth();
  const _0x1e2da3 = _0x2f3a4c.internal.pageSize.getHeight();
  const _0x3eba59 = document.getElementById("dpiLogoForm");
  const _0x492ea2 = _0x3eba59 ? _0x3eba59.src : null;
  const _0x255a5b = 38;
  const _0x36719c = function () {
    _0x2f3a4c.setFillColor(0, 46, 91);
    _0x2f3a4c.rect(0, 0, _0x41da3a, _0x255a5b, "F");
    if (_0x492ea2) {
      try {
        _0x2f3a4c.addImage(_0x492ea2, "PNG", 2, 2, 34, 34);
      } catch (_0x4652df) {
        try {
          _0x2f3a4c.addImage(_0x492ea2, "JPEG", 2, 2, 34, 34);
        } catch (_0x15fa62) {}
      }
    }
    _0x2f3a4c.setTextColor(255, 255, 255);
    _0x2f3a4c.setFontSize(14);
    _0x2f3a4c.setFont("helvetica", "bold");
    _0x2f3a4c.text("Prathmik Shikshak Varishthata Suchi (Gradation List) - 01/04/2026", _0x41da3a / 2, 13, {
      align: "center"
    });
    _0x2f3a4c.setFontSize(9);
    _0x2f3a4c.setFont("helvetica", "normal");
    _0x2f3a4c.text("Directorate of Public Instructions (DPI), Madhya Pradesh", _0x41da3a / 2, 21, {
      align: "center"
    });
    _0x2f3a4c.setFontSize(8);
    _0x2f3a4c.text("Generated: " + new Date().toLocaleString("en-IN"), _0x41da3a - 6, 30, {
      align: "right"
    });
    const _0x4b82f8 = window.filteredData ? window.filteredData.length : 0;
    _0x2f3a4c.text("Total Records: " + _0x4b82f8, 40, 30);
    _0x2f3a4c.setTextColor(0, 0, 0);
    if (_0x492ea2) {
      try {
        const _0x4101a7 = 70;
        const _0xe615d0 = (_0x41da3a - _0x4101a7) / 2;
        const _0x211f85 = (_0x1e2da3 - _0x4101a7) / 2;
        _0x2f3a4c.setGState(new _0x2f3a4c.GState({
          opacity: 0.05
        }));
        _0x2f3a4c.addImage(_0x492ea2, "PNG", _0xe615d0, _0x211f85, _0x4101a7, _0x4101a7);
        _0x2f3a4c.setGState(new _0x2f3a4c.GState({
          opacity: 1
        }));
      } catch (_0x5c89da) {}
    }
  };
  _0x36719c();
  const _0x475379 = {
    "उच्च पद ज्वाइन": "Ucch Pad Join (Y/N)",
    "उच्च पद शाला": "Ucch Pad Shala",
    "उच्च पद UDISE": "Ucch Pad UDISE",
    "उच्च पद जिला": "Ucch Pad Jila"
  };
  const _0x3b40a4 = colConfig.filter(_0x3b58ab => !_0x3b58ab.officeOnly && _0x3b58ab.fi !== 31);
  const _0x2a3264 = _0x3b40a4.map(_0x2f376e => _0x475379[_0x2f376e.name] || _0x2f376e.name);
  const _0x145c98 = window.filteredData.slice(0, 500).map(_0x4d959f => _0x3b40a4.map(_0x26490a => _0x4d959f["field" + _0x26490a.fi] || ""));
  _0x2f3a4c.autoTable({
    head: [_0x2a3264],
    body: _0x145c98,
    startY: _0x255a5b + 2,
    styles: {
      fontSize: 5.5,
      cellPadding: 0.8,
      font: "helvetica"
    },
    headStyles: {
      fillColor: [0, 46, 91],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 6
    },
    alternateRowStyles: {
      fillColor: [240, 245, 255]
    },
    margin: {
      left: 3,
      right: 3
    },
    didDrawPage: function (_0x640745) {
      if (_0x640745.pageNumber > 1) {
        _0x36719c();
      }
      _0x2f3a4c.setFontSize(7);
      _0x2f3a4c.setTextColor(100, 100, 100);
      _0x2f3a4c.text("Page " + _0x640745.pageNumber, _0x41da3a / 2, _0x1e2da3 - 4, {
        align: "center"
      });
    }
  });
  _0x2f3a4c.save("PS_Gradation_" + new Date().toISOString().split("T")[0] + ".pdf");
}
async function psSummaryUploadDocCloud(_0x3c3447, _0x4e1b66) {
  const _0x3d91a6 = getSupabase();
  if (!_0x3d91a6) {
    return null;
  }
  const _0x2e931c = _0x4e1b66.name.split(".").pop();
  const _0x40259c = "ps_summary_docs/" + _0x3c3447 + "." + _0x2e931c;
  const _0x5bf2fc = "ps_summary_docs/" + _0x3c3447 + "_meta.json";
  const {
    error: _0x544b55
  } = await _0x3d91a6.storage.from("ums-documents").upload(_0x40259c, _0x4e1b66, {
    upsert: true
  });
  if (_0x544b55) {
    console.error("PS Upload error:", _0x544b55);
    return null;
  }
  const {
    data: _0x89bade
  } = _0x3d91a6.storage.from("ums-documents").getPublicUrl(_0x40259c);
  const _0x3fe7c0 = {
    file_name: _0x4e1b66.name,
    file_path: _0x40259c,
    public_url: _0x89bade.publicUrl,
    uploaded_by: window.currentUser || "UNKNOWN",
    uploaded_at: new Date().toISOString()
  };
  const _0x2f499a = new Blob([JSON.stringify(_0x3fe7c0)], {
    type: "application/json"
  });
  await _0x3d91a6.storage.from("ums-documents").upload(_0x5bf2fc, _0x2f499a, {
    upsert: true
  });
  return _0x89bade.publicUrl;
}
async function psGetUploadedDocCloud(_0x3fc94c) {
  const _0x5e32b0 = getSupabase();
  if (!_0x5e32b0) {
    return null;
  }
  try {
    const {
      data: _0x1cd08d,
      error: _0x219469
    } = await _0x5e32b0.storage.from("ums-documents").download("ps_summary_docs/" + _0x3fc94c + "_meta.json");
    if (_0x219469 || !_0x1cd08d) {
      return null;
    }
    const _0x3f6e14 = await _0x1cd08d.text();
    return JSON.parse(_0x3f6e14);
  } catch (_0x4f5e9e) {
    return null;
  }
}
function psSummaryUploadDoc(_0x39f9ff) {
  const _0x278f55 = window.currentUser || "";
  const _0x1b813a = {
    JDBHOPAL: ["BHOPAL", "RAISEN", "RAJGARH", "SEHORE", "VIDISHA"],
    JDGWALIOR: ["ASHOKNAGAR", "BHIND", "DATIA", "GUNA", "GWALIOR", "MORENA", "SHEOPUR", "SHIVPURI"],
    JDINDORE: ["ALIRAJPUR", "BARWANI", "BURHANPUR", "DHAR", "INDORE", "JHABUA", "KHANDWA", "KHARGONE"],
    JDJABALPUR: ["BALAGHAT", "CHHINDWARA", "DINDORI", "JABALPUR", "KATNI", "MANDLA", "NARSINGHPUR", "SEONI"],
    JDUJJAIN: ["AGARMALWA", "DEWAS", "MANDSAUR", "NEEMUCH", "RATLAM", "SHAJAPUR", "UJJAIN"],
    JDSAGAR: ["CHHATARPUR", "DAMOH", "NIWARI", "PANNA", "SAGAR", "TIKAMGARH"],
    JDREWA: ["REWA", "SATNA", "SIDHI", "SINGRAULI"],
    JDNARMADAPURAM: ["BETUL", "HARDA", "NARMADAPURAM"],
    JDSHAHDOL: ["ANUPPUR", "SHAHDOL", "UMARIA"]
  };
  const _0x377ab8 = _0x39f9ff.replace(/^DEO/, "").replace(/\s+/g, "").toUpperCase();
  const _0x26cc36 = _0x1b813a[_0x278f55] || [];
  const _0x2f70ef = _0x278f55 === "DPI" || _0x278f55 === _0x39f9ff || _0x26cc36.includes(_0x377ab8);
  if (!_0x2f70ef) {
    myAlert("❌ You can only upload documents for your own office.");
    return;
  }
  const _0x872f50 = document.getElementById("psFileUpload_" + _0x39f9ff);
  if (_0x872f50) {
    _0x872f50.click();
  }
}
function psHandleSummaryFileUpload(_0x49a3f8, _0x411cac) {
  var _0x51022d = _0x49a3f8.target.files[0];
  if (!_0x51022d) {
    return;
  }
  _0x49a3f8.target.value = "";
  var _0x1dbf89 = 1048576;
  if (_0x51022d.size > _0x1dbf89) {
    myAlert("❌ File size bahut badi hai!\n\nFile: " + _0x51022d.name + "\nSize: " + (_0x51022d.size / 1024 / 1024).toFixed(2) + " MB\n\nMaximum allowed size: 1 MB\n\nPlease compress your file and try again.");
    return;
  }
  var _0x2215e9 = document.getElementById("psUploadStatus_" + _0x411cac);
  if (_0x2215e9) {
    _0x2215e9.innerHTML = "⏳ Uploading...";
    _0x2215e9.style.color = "#f39c12";
  }
  (async function () {
    var _0x3c7d38 = await psSummaryUploadDocCloud(_0x411cac, _0x51022d);
    if (_0x3c7d38) {
      if (_0x2215e9) {
        _0x2215e9.innerHTML = "✅ " + _0x51022d.name;
        _0x2215e9.style.color = "#27ae60";
      }
      var _0x1d55ee = document.getElementById("psViewContainer_" + _0x411cac);
      if (_0x1d55ee) {
        var _0xa5c489 = document.createElement("button");
        _0xa5c489.textContent = "👁️ View";
        _0xa5c489.style.cssText = "background:#1565c0;color:white;border:none;padding:3px 8px;border-radius:4px;cursor:pointer;font-size:11px;font-weight:bold;";
        _0xa5c489.onclick = function (_0x57fb8d) {
          return function () {
            psSummaryViewDoc(_0x57fb8d);
          };
        }(_0x411cac);
        _0x1d55ee.innerHTML = "";
        _0x1d55ee.appendChild(_0xa5c489);
      }
      myAlert("✅ Document uploaded successfully.\nFile: " + _0x51022d.name);
    } else {
      if (_0x2215e9) {
        _0x2215e9.innerHTML = "❌ Upload failed.";
        _0x2215e9.style.color = "#c62828";
      }
      myAlert("❌ Upload failed. Storage bucket available nahi hai.");
    }
  })();
}
async function psSummaryViewDoc(_0x52f018) {
  const _0x3be5e5 = await psGetUploadedDocCloud(_0x52f018);
  if (!_0x3be5e5) {
    myAlert("❌ No document has been uploaded for " + _0x52f018 + ".");
    return;
  }
  if (document.getElementById("psDocViewPopup")) {
    document.getElementById("psDocViewPopup").remove();
  }
  const _0x374d4b = document.createElement("div");
  _0x374d4b.id = "psDocViewPopup";
  _0x374d4b.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:99999;display:flex;align-items:center;justify-content:center;";
  _0x374d4b.innerHTML = "<div style=\"background:white;padding:25px;border-radius:10px;max-width:450px;width:90%;box-shadow:0 10px 30px rgba(0,0,0,.4);font-family:sans-serif;\">\n    <h3 style=\"margin:0 0 15px 0;color:#002e5b;border-bottom:2px solid #002e5b;padding-bottom:8px;\">📄 Document Viewer</h3>\n    <table style=\"width:100%;font-size:13px;border-collapse:collapse;\">\n      <tr><td style=\"padding:5px;font-weight:bold;color:#555;width:40%;\">Office:</td><td style=\"padding:5px;\">" + _0x52f018 + "</td></tr>\n      <tr><td style=\"padding:5px;font-weight:bold;color:#555;\">File Name:</td><td style=\"padding:5px;color:#1565c0;\">" + (_0x3be5e5.file_name || "N/A") + "</td></tr>\n      <tr><td style=\"padding:5px;font-weight:bold;color:#555;\">Uploaded By:</td><td style=\"padding:5px;\">" + (_0x3be5e5.uploaded_by || "N/A") + "</td></tr>\n      <tr><td style=\"padding:5px;font-weight:bold;color:#555;\">Upload Time:</td><td style=\"padding:5px;\">" + (_0x3be5e5.uploaded_at ? new Date(_0x3be5e5.uploaded_at).toLocaleString("en-IN") : "N/A") + "</td></tr>\n    </table>\n    <div style=\"display:flex;gap:10px;margin-top:20px;justify-content:center;\">\n      <button onclick=\"window.open('" + _0x3be5e5.public_url + "','_blank')\" style=\"background:#1565c0;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-weight:bold;font-size:13px;\">👁️ View Document</button>\n      <button onclick=\"document.getElementById('psDocViewPopup').remove()\" style=\"background:#c62828;color:white;border:none;padding:10px 20px;border-radius:5px;cursor:pointer;font-weight:bold;font-size:13px;\">✖ Close</button>\n    </div>\n  </div>";
  document.body.appendChild(_0x374d4b);
  _0x374d4b.addEventListener("click", _0x360a5c => {
    if (_0x360a5c.target === _0x374d4b) {
      _0x374d4b.remove();
    }
  });
}
function showSummary() {
  const _0x19094b = window.currentUser || "";
  const _0x35089a = getAllowedDistricts(_0x19094b);
  const _0x121070 = [{
    name: "JD BHOPAL",
    key: "JDBHOPAL",
    districts: ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha"]
  }, {
    name: "JD GWALIOR",
    key: "JDGWALIOR",
    districts: ["Ashoknagar", "Bhind", "Datia", "Guna", "Gwalior", "Morena", "Sheopur", "Shivpuri"]
  }, {
    name: "JD INDORE",
    key: "JDINDORE",
    districts: ["Alirajpur", "Barwani", "Burhanpur", "Dhar", "Indore", "Jhabua", "Khandwa", "Khargone"]
  }, {
    name: "JD JABALPUR",
    key: "JDJABALPUR",
    districts: ["Balaghat", "Chhindwara", "Dindori", "Jabalpur", "Katni", "Mandla", "Narsinghpur", "Seoni"]
  }, {
    name: "JD UJJAIN",
    key: "JDUJJAIN",
    districts: ["Agar Malwa", "Dewas", "Mandsaur", "Neemuch", "Ratlam", "Shajapur", "Ujjain"]
  }, {
    name: "JD SAGAR",
    key: "JDSAGAR",
    districts: ["Chhatarpur", "Damoh", "Niwari", "Panna", "Sagar", "Tikamgarh"]
  }, {
    name: "JD REWA",
    key: "JDREWA",
    districts: ["Rewa", "Satna", "Sidhi", "Singrauli"]
  }, {
    name: "JD NARMADAPURAM",
    key: "JDNARMADAPURAM",
    districts: ["Betul", "Harda", "Narmadapuram"]
  }, {
    name: "JD SHAHDOL",
    key: "JDSHAHDOL",
    districts: ["Anuppur", "Shahdol", "Umaria"]
  }];
  const _0x56f2c8 = {
    JDBHOPAL: ["BHOPAL", "RAISEN", "RAJGARH", "SEHORE", "VIDISHA"],
    JDGWALIOR: ["ASHOKNAGAR", "BHIND", "DATIA", "GUNA", "GWALIOR", "MORENA", "SHEOPUR", "SHIVPURI"],
    JDINDORE: ["ALIRAJPUR", "BARWANI", "BURHANPUR", "DHAR", "INDORE", "JHABUA", "KHANDWA", "KHARGONE"],
    JDJABALPUR: ["BALAGHAT", "CHHINDWARA", "DINDORI", "JABALPUR", "KATNI", "MANDLA", "NARSINGHPUR", "SEONI"],
    JDUJJAIN: ["AGARMALWA", "DEWAS", "MANDSAUR", "NEEMUCH", "RATLAM", "SHAJAPUR", "UJJAIN"],
    JDSAGAR: ["CHHATARPUR", "DAMOH", "NIWARI", "PANNA", "SAGAR", "TIKAMGARH"],
    JDREWA: ["REWA", "SATNA", "SIDHI", "SINGRAULI"],
    JDNARMADAPURAM: ["BETUL", "HARDA", "NARMADAPURAM"],
    JDSHAHDOL: ["ANUPPUR", "SHAHDOL", "UMARIA"]
  };
  let _0x1f04ea = _0x121070;
  if (_0x35089a !== null) {
    const _0x4ad1c0 = _0x35089a.map(_0x2a17e2 => _0x2a17e2.toLowerCase());
    _0x1f04ea = _0x121070.map(_0x1f57ca => {
      const _0xea14ee = _0x1f57ca.districts.filter(_0x3bbe78 => _0x4ad1c0.some(_0x5ac1b1 => _0x5ac1b1 === _0x3bbe78.toLowerCase() || _0x3bbe78.toLowerCase().includes(_0x5ac1b1) || _0x5ac1b1.includes(_0x3bbe78.toLowerCase())));
      if (_0xea14ee.length) {
        return {
          ..._0x1f57ca,
          districts: _0xea14ee
        };
      } else {
        return null;
      }
    }).filter(Boolean);
  }
  const _0x3cb8f5 = window.fullData || [];
  if (!_0x3cb8f5.length) {
    return myAlert("❌ No data available to generate summary.");
  }
  // ── PS: registered = present posting district (field23); Updated/New/Delete = login ID ke district ke khate mein ──
  const _psAllDistricts = [];
  _0x121070.forEach(_j => _j.districts.forEach(_d => _psAllDistricts.push(_d)));
  const _psNorm = _s => String(_s || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const _psCanon = {};
  _psAllDistricts.forEach(_d => {
    _psCanon[_psNorm(_d)] = _d;
  });
  function _psResolveDistrict(_raw) {
    const _n = _psNorm(_raw);
    if (!_n) {
      return null;
    }
    if (_psCanon[_n]) {
      return _psCanon[_n];
    }
    let _best = null;
    _psAllDistricts.forEach(_d => {
      const _dn = _psNorm(_d);
      if (_n.includes(_dn) || _n.length >= 4 && _dn.includes(_n)) {
        if (!_best || _dn.length > _psNorm(_best).length) {
          _best = _d;
        }
      }
    });
    return _best;
  }
  function _psBlankStat() {
    return {
      total: 0,
      updated: 0,
      newEntry: 0,
      deleted: 0,
      deo: 0,
      jd: 0,
      dpi: 0,
      male: 0,
      female: 0,
      sc: 0,
      st: 0,
      obc: 0,
      ur: 0
    };
  }
  let _psAgg = null;
  function _psBuildAgg() {
    const _agg = {};
    const _get = _d => _agg[_d] || (_agg[_d] = _psBlankStat());
    _0x3cb8f5.forEach(_r => {
      const _P = _psResolveDistrict(_r.field23);
      if (!_P) {
        return;
      }
      // 1) Registered / gender / category -> lokseval ki vartman padasthapana (posting) district
      const _ps = _get(_P);
      _ps.total++;
      const _g = (_r.field5 || "").trim().toUpperCase();
      if (_g === "M") {
        _ps.male++;
      } else if (_g === "F") {
        _ps.female++;
      }
      const _c = (_r.field4 || "").trim().toUpperCase();
      if (_c === "SC") {
        _ps.sc++;
      } else if (_c === "ST") {
        _ps.st++;
      } else if (_c === "OBC") {
        _ps.obc++;
      } else if (_c === "UR" || _c === "GEN" || _c === "GENERAL") {
        _ps.ur++;
      }
      // 2) Updated / New / Delete -> jis ID se login karke kaam hua uske district ke khate mein
      const _s29 = (_r.field29 || "").trim();
      const _s30 = (_r.field30 || "").trim();
      const _m = _s30.match(/\bby\s+(\S+)/i);
      const _actor = _m ? _m[1].toUpperCase() : "";
      let _A = _P;
      if (_actor.startsWith("DEO")) {
        const _dd = DEO_DISTRICT[_actor];
        const _rd = _dd ? _psResolveDistrict(_dd) : null;
        if (_rd) {
          _A = _rd;
        }
      }
      const _as = _get(_A);
      if (_r._softDeleted || _s29 === "Deleted") {
        _as.deleted++;
      } else if (_s29 === "Updated") {
        _as.updated++;
      } else {
        _as.newEntry++;
      }
      if (_actor) {
        if (_actor === "DPI") {
          _as.dpi++;
        } else if (_actor.startsWith("JD")) {
          _as.jd++;
        } else if (_actor.startsWith("DEO")) {
          _as.deo++;
        } else {
          _as.dpi++;
        }
      }
    });
    return _agg;
  }
  function _0x2c7cda(_0x452467) {
    if (!_psAgg) {
      _psAgg = _psBuildAgg();
    }
    const _k = _psResolveDistrict(_0x452467) || _0x452467;
    return Object.assign(_psBlankStat(), _psAgg[_k] || {});
  }
  let _0x10917a = {
    total: 0,
    updated: 0,
    new: 0,
    deleted: 0,
    deo: 0,
    jd: 0,
    dpi: 0,
    male: 0,
    female: 0,
    sc: 0,
    st: 0,
    obc: 0,
    ur: 0
  };
  let _0x2dc093 = [];
  _0x1f04ea.forEach(_0x28bd65 => {
    let _0x53579e = {
      name: _0x28bd65.name,
      key: _0x28bd65.key,
      type: "JD",
      total: 0,
      updated: 0,
      new: 0,
      deleted: 0,
      deo: 0,
      jd: 0,
      dpi: 0,
      male: 0,
      female: 0,
      sc: 0,
      st: 0,
      obc: 0,
      ur: 0
    };
    let _0x7eff1c = [];
    _0x28bd65.districts.forEach(_0x3a8946 => {
      const _0x54d537 = _0x2c7cda(_0x3a8946);
      const _0x347251 = "DEO" + _0x3a8946.replace(/\s+/g, "").toUpperCase();
      if (_0x54d537.total > 0 || _0x54d537.updated + _0x54d537.newEntry + _0x54d537.deleted > 0) {
        _0x7eff1c.push({
          name: _0x3a8946,
          key: _0x347251,
          type: "DISTRICT",
          total: _0x54d537.total,
          updated: _0x54d537.updated,
          new: _0x54d537.newEntry,
          deleted: _0x54d537.deleted,
          deo: _0x54d537.deo,
          jd: _0x54d537.jd,
          dpi: _0x54d537.dpi,
          male: _0x54d537.male,
          female: _0x54d537.female,
          sc: _0x54d537.sc,
          st: _0x54d537.st,
          obc: _0x54d537.obc,
          ur: _0x54d537.ur
        });
        _0x53579e.total += _0x54d537.total;
        _0x53579e.updated += _0x54d537.updated;
        _0x53579e.new += _0x54d537.newEntry;
        _0x53579e.deleted += _0x54d537.deleted;
        _0x53579e.deo += _0x54d537.deo;
        _0x53579e.jd += _0x54d537.jd;
        _0x53579e.dpi += _0x54d537.dpi;
        _0x53579e.male += _0x54d537.male;
        _0x53579e.female += _0x54d537.female;
        _0x53579e.sc += _0x54d537.sc;
        _0x53579e.st += _0x54d537.st;
        _0x53579e.obc += _0x54d537.obc;
        _0x53579e.ur += _0x54d537.ur;
        _0x10917a.total += _0x54d537.total;
        _0x10917a.updated += _0x54d537.updated;
        _0x10917a.new += _0x54d537.newEntry;
        _0x10917a.deleted += _0x54d537.deleted;
        _0x10917a.deo += _0x54d537.deo;
        _0x10917a.jd += _0x54d537.jd;
        _0x10917a.dpi += _0x54d537.dpi;
        _0x10917a.male += _0x54d537.male;
        _0x10917a.female += _0x54d537.female;
        _0x10917a.sc += _0x54d537.sc;
        _0x10917a.st += _0x54d537.st;
        _0x10917a.obc += _0x54d537.obc;
        _0x10917a.ur += _0x54d537.ur;
      }
    });
    if (_0x53579e.total > 0 || _0x53579e.updated + _0x53579e.new + _0x53579e.deleted > 0) {
      _0x2dc093.push(_0x53579e);
      _0x2dc093 = _0x2dc093.concat(_0x7eff1c);
    }
  });
  const _0x366e91 = _0x2dc093.filter(_0x390216 => _0x390216.type === "JD");
  const _0x26115e = "padding:4px 6px;border:1px solid #000;white-space:nowrap;text-align:center;background:#002e5b;color:white;font-size:10px;font-weight:700;";
  const _0x4e0ac7 = "padding:4px 8px;border:1px solid #000;white-space:nowrap;text-align:left;background:#002e5b;color:white;font-size:10px;font-weight:700;";
  const _0x13828f = "padding:3px 5px;border:1px solid #ccc;text-align:center;font-size:10px;";
  const _0x8bc660 = "padding:3px 8px;border:1px solid #ccc;text-align:left;font-size:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
  function _0x245bbe() {
    return "<div style=\"border:2.5px solid #002e5b;border-radius:4px;overflow:auto;\">\n    <table style=\"width:100%;border-collapse:collapse;font-size:11px;background:white;table-layout:fixed;min-width:680px;\">\n      <colgroup>\n        <col style=\"width:18%\">\n        <col style=\"width:6%\">\n        <col style=\"width:7%\">\n        <col style=\"width:8%\">\n        <col style=\"width:7%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:5%\">\n        <col style=\"width:17%\">\n        <col style=\"width:17%\">\n      </colgroup>\n      <thead><tr>\n        <th style=\"" + _0x4e0ac7 + "\">OFFICE NAME</th>\n        <th style=\"" + _0x26115e + "\">TOTAL</th>\n        <th style=\"" + _0x26115e + "\">UPDATED</th>\n        <th style=\"" + _0x26115e + "\">NEW ENTRY</th>\n        <th style=\"" + _0x26115e + "color:#ff8a80;\">DELETE</th>\n        <th style=\"" + _0x26115e + "color:#ff8a80;\">DEO</th>\n        <th style=\"" + _0x26115e + "\">JD</th>\n        <th style=\"" + _0x26115e + "\">DPI</th>\n        <th style=\"" + _0x26115e + "background:#1b5e20;\" class=\"no-print\">📤 UPLOAD LIST</th>\n        <th style=\"" + _0x26115e + "background:#0d47a1;\" class=\"no-print\">👁️ VIEW DOC</th>\n      </tr></thead>\n      <tbody>\n      " + _0x2dc093.map(_0x37bcdb => {
      const _0x592718 = _0x37bcdb.key;
      const _0x3dbf42 = _0x37bcdb.name.replace(/\s+/g, "").toUpperCase();
      const _0x320cd5 = _0x56f2c8[_0x19094b] || [];
      const _0xe4c0fa = _0x19094b === "DPI" || _0x19094b === _0x592718 || _0x320cd5.includes(_0x3dbf42);
      const _0x4ca069 = _0xe4c0fa ? "<button onclick=\"psSummaryUploadDoc('" + _0x592718 + "')\" style=\"background:#2e7d32;color:white;border:none;padding:4px 10px;border-radius:3px;cursor:pointer;font-size:10px;font-weight:bold;display:flex;align-items:center;gap:3px;margin:auto;\">📤 Upload</button><div id='psUploadStatus_" + _0x592718 + "' style='font-size:9px;margin-top:2px;color:#555;'></div>" : "<span style=\"color:#bbb;font-size:10px;\">🔒</span>";
      const _0x536172 = "psViewContainer_" + _0x592718;
      const _0x84a24b = "<div id=\"" + _0x536172 + "\" style=\"text-align:center;\"><span style=\"color:#aaa;font-size:9px;\">⏳</span></div>";
      (async function (_0x32e159, _0x35310a) {
        const _0x323a9b = await psGetUploadedDocCloud(_0x32e159);
        const _0x5d22b3 = document.getElementById(_0x35310a);
        if (!_0x5d22b3) {
          return;
        }
        if (_0x323a9b && _0x323a9b.public_url) {
          const _0x242736 = document.createElement("button");
          _0x242736.innerHTML = "👁 View";
          _0x242736.style.cssText = "background:#1565c0;color:white;border:2px solid #1565c0;padding:4px 10px;border-radius:3px;cursor:pointer;font-size:10px;font-weight:bold;";
          _0x242736.onclick = function (_0x405ba2) {
            return function () {
              psSummaryViewDoc(_0x405ba2);
            };
          }(_0x32e159);
          _0x5d22b3.innerHTML = "";
          _0x5d22b3.appendChild(_0x242736);
        } else {
          _0x5d22b3.innerHTML = "<span style=\"color:#aaa;font-size:10px;font-style:italic;\">No Document</span>";
        }
      })(_0x592718, _0x536172);
      const _0x5284d6 = _0x37bcdb.type === "JD";
      const _0x5a9b43 = _0x5284d6 ? "background:#dbeafe;font-weight:700;" : "background:#fff;";
      return "<tr style=\"" + _0x5a9b43 + "border-bottom:1px solid #e0e0e0;\">\n          <td style=\"" + _0x8bc660 + (_0x5284d6 ? "color:#1e3a8a;font-weight:700;" : "") + "\">" + (_0x5284d6 ? "📂 " + _0x37bcdb.name : "&nbsp;&nbsp;&nbsp;DEO " + _0x37bcdb.name) + "</td>\n          <td style=\"" + _0x13828f + "font-weight:700;\">" + _0x37bcdb.total + "</td>\n          <td style=\"" + _0x13828f + "color:#2e7d32;\">" + _0x37bcdb.updated + "</td>\n          <td style=\"" + _0x13828f + "color:#1565c0;\">" + _0x37bcdb.new + "</td>\n          <td style=\"" + _0x13828f + "color:#c62828;font-weight:" + (_0x37bcdb.deleted > 0 ? "700" : "400") + ";\">" + _0x37bcdb.deleted + "</td>\n          <td style=\"" + _0x13828f + "color:#b71c1c;\">" + (_0x37bcdb.deo || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#1b5e20;\">" + (_0x37bcdb.jd || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#0d47a1;\">" + (_0x37bcdb.dpi || 0) + "</td>\n          <td style=\"" + _0x13828f + "\" class=\"no-print\"><input type=\"file\" id=\"psFileUpload_" + _0x592718 + "\" accept=\".pdf,.jpg,.jpeg,.png\" style=\"display:none;\" onchange=\"psHandleSummaryFileUpload(event,'" + _0x592718 + "')\">" + _0x4ca069 + "</td>\n          <td style=\"" + _0x13828f + "\" class=\"no-print\">" + _0x84a24b + "</td>\n        </tr>";
    }).join("") + "\n      <tr class=\"grand-total-row\" style=\"background:#002e5b;color:#fff;font-weight:700;font-size:12px;\">\n        <td style=\"padding:5px 8px;border:1px solid #fff;color:#fff;\">🏆 कुल योग (Grand Total)</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.total + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#a5d6a7;\">" + _0x10917a.updated + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#90caf9;\">" + _0x10917a.new + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#ef9a9a;\">" + _0x10917a.deleted + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#ef9a9a;\">" + _0x10917a.deo + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#a5d6a7;\">" + _0x10917a.jd + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#90caf9;\">" + _0x10917a.dpi + "</td>\n        <td class=\"no-print\"></td><td class=\"no-print\"></td>\n      </tr></tbody></table></div>";
  }
  function _0x150ab1() {
    const _0x75f38f = "width:100%;border-collapse:collapse;font-size:11px;background:white;table-layout:fixed;";
    return "<div style=\"border:2.5px solid #002e5b;border-radius:4px;overflow:auto;\">\n    <table style=\"" + _0x75f38f + "min-width:600px;\">\n      <colgroup><col style=\"width:28%\"><col style=\"width:7%\"><col style=\"width:8%\"><col style=\"width:9%\"><col style=\"width:8%\"><col style=\"width:8%\"><col style=\"width:8%\"><col style=\"width:8%\"><col style=\"width:7%\"><col style=\"width:7%\"></colgroup>\n      <thead><tr>\n        <th style=\"" + _0x4e0ac7 + "\">संभाग (Division)</th>\n        <th style=\"" + _0x26115e + "\">कुल</th>\n        <th style=\"" + _0x26115e + "\">Updated</th>\n        <th style=\"" + _0x26115e + "\">New Entry</th>\n        <th style=\"" + _0x26115e + "color:#ff8a80;\">Delete</th>\n        <th style=\"" + _0x26115e + "\">पुरुष (M)</th>\n        <th style=\"" + _0x26115e + "\">महिला (F)</th>\n        <th style=\"" + _0x26115e + "color:#ff8a80;\">DEO</th>\n        <th style=\"" + _0x26115e + "\">JD</th>\n        <th style=\"" + _0x26115e + "\">DPI</th>\n      </tr></thead>\n      <tbody>\n      " + _0x366e91.map((_0xbb9d0b, _0x4319e8) => {
      const _0xa0850b = _0x4319e8 % 2 === 0 ? "#f0f4ff" : "#fff";
      return "<tr style=\"background:" + _0xa0850b + ";\">\n          <td style=\"" + _0x8bc660 + "font-weight:700;color:#1e3a8a;\">📂 " + _0xbb9d0b.name + "</td>\n          <td style=\"" + _0x13828f + "font-weight:700;\">" + _0xbb9d0b.total + "</td>\n          <td style=\"" + _0x13828f + "color:#2e7d32;\">" + _0xbb9d0b.updated + "</td>\n          <td style=\"" + _0x13828f + "color:#1565c0;\">" + _0xbb9d0b.new + "</td>\n          <td style=\"" + _0x13828f + "color:#c62828;\">" + _0xbb9d0b.deleted + "</td>\n          <td style=\"" + _0x13828f + "color:#1565c0;\">" + (_0xbb9d0b.male || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#ad1457;\">" + (_0xbb9d0b.female || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#b71c1c;\">" + (_0xbb9d0b.deo || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#1b5e20;\">" + (_0xbb9d0b.jd || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#0d47a1;\">" + (_0xbb9d0b.dpi || 0) + "</td>\n        </tr>";
    }).join("") + "\n      <tr class=\"grand-total-row\" style=\"background:#002e5b;color:white;font-weight:700;\">\n        <td style=\"padding:5px 8px;border:1px solid #fff;color:#fff;\">🏆 कुल योग</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.total + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.updated + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.new + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.deleted + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.male + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.female + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.deo + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.jd + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.dpi + "</td>\n      </tr></tbody></table></div>";
  }
  function _0x414d16() {
    const _0x3c1f52 = "width:100%;border-collapse:collapse;font-size:11px;background:white;table-layout:fixed;";
    return "<div style=\"border:2.5px solid #002e5b;border-radius:4px;overflow:auto;\">\n    <table style=\"" + _0x3c1f52 + "min-width:450px;\">\n      <colgroup><col style=\"width:40%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"></colgroup>\n      <thead><tr>\n        <th style=\"" + _0x4e0ac7 + "\">कार्यालय</th>\n        <th style=\"" + _0x26115e + "\">कुल</th>\n        <th style=\"" + _0x26115e + "background:#1565c0;\">पुरुष (M)</th>\n        <th style=\"" + _0x26115e + "background:#ad1457;\">महिला (F)</th>\n        <th style=\"" + _0x26115e + "\">M%</th>\n        <th style=\"" + _0x26115e + "\">F%</th>\n      </tr></thead>\n      <tbody>\n      " + _0x2dc093.map(_0x2e8c3a => {
      const _0x2029e4 = _0x2e8c3a.type === "JD";
      const _0x8ed8d1 = _0x2e8c3a.total > 0 ? ((_0x2e8c3a.male || 0) / _0x2e8c3a.total * 100).toFixed(1) : "0.0";
      const _0xf3e924 = _0x2e8c3a.total > 0 ? ((_0x2e8c3a.female || 0) / _0x2e8c3a.total * 100).toFixed(1) : "0.0";
      return "<tr style=\"" + (_0x2029e4 ? "background:#dbeafe;font-weight:700;" : "background:#fff;") + "border-bottom:1px solid #e0e0e0;\">\n          <td style=\"" + _0x8bc660 + (_0x2029e4 ? "color:#1e3a8a;font-weight:700;" : "") + "\">" + (_0x2029e4 ? "📂 " + _0x2e8c3a.name : "&nbsp;&nbsp;&nbsp;DEO " + _0x2e8c3a.name) + "</td>\n          <td style=\"" + _0x13828f + "font-weight:700;\">" + _0x2e8c3a.total + "</td>\n          <td style=\"" + _0x13828f + "color:#1565c0;font-weight:600;\">" + (_0x2e8c3a.male || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#ad1457;font-weight:600;\">" + (_0x2e8c3a.female || 0) + "</td>\n          <td style=\"" + _0x13828f + "\"><div style=\"background:#bbdefb;height:14px;border-radius:2px;display:flex;align-items:center;padding:0 4px;font-size:9px;font-weight:700;color:#0d47a1;\">" + _0x8ed8d1 + "%</div></td>\n          <td style=\"" + _0x13828f + "\"><div style=\"background:#fce4ec;height:14px;border-radius:2px;display:flex;align-items:center;padding:0 4px;font-size:9px;font-weight:700;color:#880e4f;\">" + _0xf3e924 + "%</div></td>\n        </tr>";
    }).join("") + "\n      <tr class=\"grand-total-row\" style=\"background:#002e5b;color:white;font-weight:700;\">\n        <td style=\"padding:5px 8px;border:1px solid #fff;color:#fff;\">🏆 कुल योग</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.total + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.male + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.female + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + (_0x10917a.total > 0 ? (_0x10917a.male / _0x10917a.total * 100).toFixed(1) : 0) + "%</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + (_0x10917a.total > 0 ? (_0x10917a.female / _0x10917a.total * 100).toFixed(1) : 0) + "%</td>\n      </tr></tbody></table></div>";
  }
  function _0x4bb25f() {
    const _0x39c18b = "width:100%;border-collapse:collapse;font-size:11px;background:white;table-layout:fixed;";
    return "<div style=\"border:2.5px solid #002e5b;border-radius:4px;overflow:auto;\">\n    <table style=\"" + _0x39c18b + "min-width:420px;\">\n      <colgroup><col style=\"width:40%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"><col style=\"width:12%\"></colgroup>\n      <thead><tr>\n        <th style=\"" + _0x4e0ac7 + "\">कार्यालय</th>\n        <th style=\"" + _0x26115e + "\">कुल</th>\n        <th style=\"" + _0x26115e + "background:#4a148c;\">SC</th>\n        <th style=\"" + _0x26115e + "background:#1b5e20;\">ST</th>\n        <th style=\"" + _0x26115e + "background:#e65100;\">OBC</th>\n        <th style=\"" + _0x26115e + "background:#0d47a1;\">UR/GEN</th>\n      </tr></thead>\n      <tbody>\n      " + _0x2dc093.map(_0x402ec3 => {
      const _0x55dced = _0x402ec3.type === "JD";
      return "<tr style=\"" + (_0x55dced ? "background:#dbeafe;font-weight:700;" : "background:#fff;") + "border-bottom:1px solid #e0e0e0;\">\n          <td style=\"" + _0x8bc660 + (_0x55dced ? "color:#1e3a8a;font-weight:700;" : "") + "\">" + (_0x55dced ? "📂 " + _0x402ec3.name : "&nbsp;&nbsp;&nbsp;DEO " + _0x402ec3.name) + "</td>\n          <td style=\"" + _0x13828f + "font-weight:700;\">" + _0x402ec3.total + "</td>\n          <td style=\"" + _0x13828f + "color:#4a148c;font-weight:600;\">" + (_0x402ec3.sc || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#1b5e20;font-weight:600;\">" + (_0x402ec3.st || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#e65100;font-weight:600;\">" + (_0x402ec3.obc || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#0d47a1;font-weight:600;\">" + (_0x402ec3.ur || 0) + "</td>\n        </tr>";
    }).join("") + "\n      <tr class=\"grand-total-row\" style=\"background:#002e5b;color:white;font-weight:700;\">\n        <td style=\"padding:5px 8px;border:1px solid #fff;color:#fff;\">🏆 कुल योग</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.total + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.sc + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.st + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.obc + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.ur + "</td>\n      </tr></tbody></table></div>";
  }
  function _0x45e680() {
    const _0x2dd7df = "width:100%;border-collapse:collapse;font-size:11px;background:white;table-layout:fixed;";
    return "<div style=\"border:2.5px solid #002e5b;border-radius:4px;overflow:auto;\">\n    <table style=\"" + _0x2dd7df + "min-width:480px;\">\n      <colgroup><col style=\"width:34%\"><col style=\"width:10%\"><col style=\"width:10%\"><col style=\"width:10%\"><col style=\"width:10%\"><col style=\"width:13%\"><col style=\"width:13%\"></colgroup>\n      <thead><tr>\n        <th style=\"" + _0x4e0ac7 + "\">कार्यालय</th>\n        <th style=\"" + _0x26115e + "\">कुल</th>\n        <th style=\"" + _0x26115e + "background:#1b5e20;\">New Entry</th>\n        <th style=\"" + _0x26115e + "background:#0d47a1;\">Updated</th>\n        <th style=\"" + _0x26115e + "background:#b71c1c;\">Deleted</th>\n        <th style=\"" + _0x26115e + "\">New%</th>\n        <th style=\"" + _0x26115e + "\">Upd%</th>\n      </tr></thead>\n      <tbody>\n      " + _0x2dc093.map(_0x1855a9 => {
      const _0x326355 = _0x1855a9.type === "JD";
      const _0x349076 = _0x1855a9.total > 0 ? ((_0x1855a9.new || 0) / _0x1855a9.total * 100).toFixed(1) : "0.0";
      const _0x1b6f43 = _0x1855a9.total > 0 ? ((_0x1855a9.updated || 0) / _0x1855a9.total * 100).toFixed(1) : "0.0";
      return "<tr style=\"" + (_0x326355 ? "background:#dbeafe;font-weight:700;" : "background:#fff;") + "border-bottom:1px solid #e0e0e0;\">\n          <td style=\"" + _0x8bc660 + (_0x326355 ? "color:#1e3a8a;font-weight:700;" : "") + "\">" + (_0x326355 ? "📂 " + _0x1855a9.name : "&nbsp;&nbsp;&nbsp;DEO " + _0x1855a9.name) + "</td>\n          <td style=\"" + _0x13828f + "font-weight:700;\">" + _0x1855a9.total + "</td>\n          <td style=\"" + _0x13828f + "color:#2e7d32;font-weight:600;\">" + (_0x1855a9.new || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#1565c0;font-weight:600;\">" + (_0x1855a9.updated || 0) + "</td>\n          <td style=\"" + _0x13828f + "color:#c62828;font-weight:" + ((_0x1855a9.deleted || 0) > 0 ? "700" : "400") + ";\">" + (_0x1855a9.deleted || 0) + "</td>\n          <td style=\"" + _0x13828f + "\"><div style=\"background:#e8f5e9;height:14px;border-radius:2px;display:flex;align-items:center;padding:0 4px;font-size:9px;font-weight:700;color:#1b5e20;\">" + _0x349076 + "%</div></td>\n          <td style=\"" + _0x13828f + "\"><div style=\"background:#e3f2fd;height:14px;border-radius:2px;display:flex;align-items:center;padding:0 4px;font-size:9px;font-weight:700;color:#0d47a1;\">" + _0x1b6f43 + "%</div></td>\n        </tr>";
    }).join("") + "\n      <tr class=\"grand-total-row\" style=\"background:#002e5b;color:white;font-weight:700;\">\n        <td style=\"padding:5px 8px;border:1px solid #fff;color:#fff;\">🏆 कुल योग</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.total + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.new + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.updated + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + _0x10917a.deleted + "</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + (_0x10917a.total > 0 ? (_0x10917a.new / _0x10917a.total * 100).toFixed(1) : 0) + "%</td>\n        <td style=\"padding:5px 8px;border:1px solid #fff;text-align:center;color:#fff;\">" + (_0x10917a.total > 0 ? (_0x10917a.updated / _0x10917a.total * 100).toFixed(1) : 0) + "%</td>\n      </tr></tbody></table></div>";
  }
  if (document.getElementById("summaryModal")) {
    document.getElementById("summaryModal").remove();
  }
  const _0x2729fc = document.createElement("div");
  _0x2729fc.id = "summaryModal";
  _0x2729fc.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.78);z-index:20000;display:flex;align-items:center;justify-content:center;padding:10px;box-sizing:border-box;";
  _0x2729fc.innerHTML = "\n  <style>\n    @media print{body *{visibility:hidden;}#summaryModal,#summaryModal *{visibility:visible;}#summaryModal{position:absolute;left:0;top:0;width:100%!important;height:auto!important;display:block!important;background:white!important;padding:20px!important;}.no-print{display:none!important;}}\n    .sm-tab-btn{padding:6px 14px;border:none;cursor:pointer;font-size:11px;font-weight:700;border-radius:4px 4px 0 0;transition:all .15s;white-space:nowrap;}\n    .sm-tab-btn.active{background:#002e5b;color:white;}\n    .sm-tab-btn:not(.active){background:#dce8f5;color:#002e5b;}\n    .sm-tab-btn:hover:not(.active){background:#b3d1f0;}\n    .sm-tab-pane{display:none;}\n    .sm-tab-pane.active{display:block;}\n  </style>\n  <div style=\"background:white;border-radius:10px;border:2px solid #334;width:96%;max-width:950px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 16px 48px rgba(0,0,0,0.5);overflow:hidden;\">\n\n    <!-- HEADER: centered title + badges -->\n    <div style=\"background:linear-gradient(135deg,#002e5b,#1a4a8a);color:white;padding:14px 20px 12px;flex-shrink:0;text-align:center;\">\n      <div style=\"font-size:17px;font-weight:800;letter-spacing:0.5px;\">PS — District Enrollment Summary</div>\n      <div style=\"font-size:10px;opacity:.75;margin-top:2px;\">Prathmik Shikshak Gradation ERP 2026 — DPI Madhya Pradesh</div>\n      <!-- Badges row — large rectangular boxes -->\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;justify-content:center;\">\n        <div style=\"background:white;border:2.5px solid #333;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#111;\">Total : " + _0x10917a.total + "</div>\n        <div style=\"background:white;border:2.5px solid #2e7d32;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#2e7d32;\">Updated : " + _0x10917a.updated + "</div>\n        <div style=\"background:white;border:2.5px solid #333;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#111;\">New Entry : " + _0x10917a.new + "</div>\n        <div style=\"background:#fff0f0;border:2.5px solid #c62828;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#c62828;\">Delete : " + _0x10917a.deleted + "</div>\n        <div style=\"background:#fff0f0;border:2.5px solid #c62828;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#c62828;\">DEO : " + _0x10917a.deo + "</div>\n        <div style=\"background:white;border:2.5px solid #555;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#333;\">JD : " + _0x10917a.jd + "</div>\n        <div style=\"background:#f0f4ff;border:2.5px solid #1565c0;padding:5px 16px;border-radius:5px;font-size:13px;font-weight:800;color:#1565c0;\">DPI : " + _0x10917a.dpi + "</div>\n      </div>\n    </div>\n\n    <!-- TAB BAR -->\n    <div style=\"display:flex;gap:3px;padding:6px 10px 0;background:#f0f4f8;border-bottom:2px solid #002e5b;flex-shrink:0;flex-wrap:wrap;\">\n      <button class=\"sm-tab-btn active\" id=\"smTab1\" onclick=\"smSwitchTab(1)\">🗂️ जिलेवार समरी</button>\n      <button class=\"sm-tab-btn\" id=\"smTab2\" onclick=\"smSwitchTab(2)\">🏛️ संभागवार</button>\n      <button class=\"sm-tab-btn\" id=\"smTab3\" onclick=\"smSwitchTab(3)\">👥 लिंगवार</button>\n      <button class=\"sm-tab-btn\" id=\"smTab4\" onclick=\"smSwitchTab(4)\">🏷️ वर्गवार</button>\n      <button class=\"sm-tab-btn\" id=\"smTab5\" onclick=\"smSwitchTab(5)\">📋 स्थितिवार</button>\n    </div>\n\n    <!-- TABLE CONTENT (scrollable) -->\n    <div style=\"overflow:auto;flex:1;padding:12px 14px;\" id=\"smTabContent\">\n      <div id=\"smPane1\" class=\"sm-tab-pane active\">" + _0x245bbe() + "</div>\n      <div id=\"smPane2\" class=\"sm-tab-pane\">" + _0x150ab1() + "</div>\n      <div id=\"smPane3\" class=\"sm-tab-pane\">" + _0x414d16() + "</div>\n      <div id=\"smPane4\" class=\"sm-tab-pane\">" + _0x4bb25f() + "</div>\n      <div id=\"smPane5\" class=\"sm-tab-pane\">" + _0x45e680() + "</div>\n    </div>\n\n    <!-- BOTTOM BUTTONS -->\n    <div style=\"padding:10px 16px;background:#f0f4f8;border-top:1px solid #ccc;display:flex;justify-content:flex-end;gap:10px;flex-shrink:0;\" class=\"no-print\">\n      <button onclick=\"window.print()\" style=\"padding:8px 22px;background:#2e7d32;color:white;border:none;border-radius:5px;cursor:pointer;font-size:13px;font-weight:700;\">🖨️ Print Report</button>\n      <button onclick=\"document.getElementById('summaryModal').remove()\" style=\"padding:8px 22px;background:#b71c1c;color:white;border:none;border-radius:5px;cursor:pointer;font-size:13px;font-weight:700;\">✕ Close</button>\n    </div>\n\n  </div>";
  document.body.appendChild(_0x2729fc);
  window.smSwitchTab = function (_0x10f4e9) {
    for (let _0x3cfcc7 = 1; _0x3cfcc7 <= 5; _0x3cfcc7++) {
      const _0x1ba4be = document.getElementById("smTab" + _0x3cfcc7);
      const _0x59397a = document.getElementById("smPane" + _0x3cfcc7);
      if (_0x1ba4be) {
        _0x1ba4be.classList.toggle("active", _0x3cfcc7 === _0x10f4e9);
      }
      if (_0x59397a) {
        _0x59397a.classList.toggle("active", _0x3cfcc7 === _0x10f4e9);
      }
    }
    const _0x3cd72e = document.getElementById("smTabContent");
    if (_0x3cd72e) {
      _0x3cd72e.scrollTop = 0;
    }
  };
  _0x2729fc.addEventListener("click", _0x3673d2 => {
    if (_0x3673d2.target === _0x2729fc) {
      _0x2729fc.remove();
    }
  });
}
function escHtml(_0x15bebc) {
  return String(_0x15bebc || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function viewHistorySmart() {
  var _0x2486b6 = document.querySelector("#tableBody tr.selected-row");
  if (_0x2486b6 && _0x2486b6.cells[2]) {
    var _0x1a188f = _0x2486b6.cells[2].textContent.trim();
    if (_0x1a188f) {
      viewRecordHistory(_0x1a188f);
      return;
    }
  }
  viewHistory();
}
function viewHistory() {
  function _0x1972e8() {
    if (!historyStore.length) {
      return "<p style=\"text-align:center;color:#888;padding:30px;\">No audit entries yet.</p>";
    }
    return "<table style=\"width:100%;border-collapse:collapse;font-size:12px;\">\n      <thead><tr style=\"background:#002e5b;color:white;\">\n        <th style=\"padding:8px 12px;text-align:left;\">Time</th>\n        <th style=\"padding:8px 12px;\">User</th>\n        <th style=\"padding:8px 12px;\">Action</th>\n        <th style=\"padding:8px 12px;text-align:left;\">Detail</th>\n      </tr></thead>\n      <tbody>" + historyStore.slice().reverse().map(_0x5d79fc => "\n        <tr style=\"border-bottom:1px solid #f0f0f0;\">\n          <td style=\"padding:7px 12px;color:#888;white-space:nowrap;\">" + _0x5d79fc.time + "</td>\n          <td style=\"padding:7px 12px;text-align:center;font-weight:700;\">" + _0x5d79fc.user + "</td>\n          <td style=\"padding:7px 12px;text-align:center;\">\n            <span class=\"badge " + (_0x5d79fc.action === "DELETE" ? "badge-deleted" : _0x5d79fc.action === "UPDATE" ? "badge-updated" : "badge-new") + "\">" + _0x5d79fc.action + "</span>\n          </td>\n          <td style=\"padding:7px 12px;\">" + _0x5d79fc.detail + "</td>\n        </tr>").join("") + "\n      </tbody></table>";
  }
  function _0x1dc7f6(_0x2a6a64) {
    if (!_0x2a6a64) {
      return "<p style=\"text-align:center;color:#aaa;padding:30px;\">Enter a Unique ID above and click Search.</p>";
    }
    const _0x5b0a12 = window.fullData.find(_0x3f0d75 => (_0x3f0d75.field2 || "").trim().toUpperCase() === _0x2a6a64.toUpperCase());
    if (!_0x5b0a12) {
      return "<p style=\"text-align:center;color:#e53935;padding:20px;\">❌ Record not found: <b>" + _0x2a6a64 + "</b></p>";
    }
    const _0x47ce5f = _0x5b0a12.history_log;
    if (!_0x47ce5f || !_0x47ce5f.length) {
      return "<p style=\"text-align:center;color:#888;padding:20px;\">No update history for <b>" + _0x2a6a64 + "</b> yet.</p>";
    }
    let _0x1aa544 = "<div style=\"font-size:12px;font-weight:700;color:#002e5b;margin-bottom:10px;\">📄 " + escHtml(_0x5b0a12.field3 || _0x2a6a64) + " — " + _0x47ce5f.length + " update(s)</div>";
    _0x47ce5f.slice().reverse().forEach(function (_0x3050f6, _0x2ad60b) {
      var _0x313d0a = {};
      var _0xdf11a4 = {};
      try {
        _0x313d0a = JSON.parse(_0x3050f6.before || "{}");
      } catch (_0x507f96) {}
      try {
        _0xdf11a4 = JSON.parse(_0x3050f6.after || "{}");
      } catch (_0x75c84) {}
      var _0x2cd69d = {};
      Object.keys(_0x313d0a).forEach(function (_0x437d95) {
        _0x2cd69d[_0x437d95] = 1;
      });
      Object.keys(_0xdf11a4).forEach(function (_0x4f2efd) {
        _0x2cd69d[_0x4f2efd] = 1;
      });
      var _0x39c974 = [];
      Object.keys(_0x2cd69d).forEach(function (_0x1f3c02) {
        var _0x596dd4 = (_0x313d0a[_0x1f3c02] || "").toString().trim();
        var _0x58ba7b = (_0xdf11a4[_0x1f3c02] || "").toString().trim();
        if (_0x596dd4 !== _0x58ba7b) {
          _0x39c974.push({
            key: _0x1f3c02,
            from: _0x596dd4,
            to: _0x58ba7b
          });
        }
      });
      _0x1aa544 += "<div style=\"margin-bottom:16px;border:1px solid #cdd5df;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.06);\">";
      _0x1aa544 += "<div style=\"background:#002e5b;color:white;padding:9px 14px;display:flex;justify-content:space-between;align-items:center;\">";
      _0x1aa544 += "<span style=\"font-weight:700;\">✏️ Update " + (_0x47ce5f.length - _0x2ad60b) + "</span>";
      _0x1aa544 += "<span style=\"font-size:11px;opacity:.85;\">🕐 " + escHtml(_0x3050f6.time) + "&nbsp;&nbsp;👤 " + escHtml(_0x3050f6.user || "?") + "</span>";
      _0x1aa544 += "</div>";
      if (!_0x39c974.length) {
        _0x1aa544 += "<div style=\"padding:12px 16px;color:#888;font-style:italic;background:#fafafa;\">✅ No field changes detected.</div>";
      } else {
        _0x39c974.forEach(function (_0x25451e, _0x2bf9a9) {
          var _0x5b5927 = _0x2bf9a9 % 2 === 0 ? "#fff" : "#fafcff";
          _0x1aa544 += "<div style=\"display:grid;grid-template-columns:160px 1fr 1fr;border-bottom:1px solid #eef0f4;background:" + _0x5b5927 + ";\">";
          _0x1aa544 += "<div style=\"padding:9px 12px;font-weight:700;font-size:11px;color:#002e5b;border-right:1px solid #eef0f4;display:flex;align-items:center;\">" + escHtml(fieldNames[_0x25451e.key] || _0x25451e.key) + "</div>";
          _0x1aa544 += "<div style=\"padding:9px 12px;border-right:1px solid #eef0f4;background:#fff8f8;\"><div style=\"font-size:9px;color:#c62828;font-weight:700;margin-bottom:2px;\">Before</div><div style=\"color:#c62828;font-weight:600;font-size:12px;\">" + escHtml(_0x25451e.from || "(empty)") + "</div></div>";
          _0x1aa544 += "<div style=\"padding:9px 12px;background:#f6fff8;\"><div style=\"font-size:9px;color:#2e7d32;font-weight:700;margin-bottom:2px;\">After</div><div style=\"color:#2e7d32;font-weight:700;font-size:12px;\">" + escHtml(_0x25451e.to || "(empty)") + "</div></div>";
          _0x1aa544 += "</div>";
        });
      }
      _0x1aa544 += "</div>";
    });
    return _0x1aa544;
  }
  const _0x414f76 = document.getElementById("historyBody");
  _0x414f76.innerHTML = "\n    <div style=\"display:flex;gap:0;border-bottom:2px solid #002e5b;margin-bottom:14px;\">\n      <button id=\"hTabAudit\" onclick=\"switchHistoryTab('audit')\"\n        style=\"padding:8px 20px;background:#002e5b;color:white;border:none;cursor:pointer;font-weight:700;font-size:12px;border-radius:4px 4px 0 0;\">\n        📋 Audit Log\n      </button>\n      <button id=\"hTabRecord\" onclick=\"switchHistoryTab('record')\"\n        style=\"padding:8px 20px;background:#e3ebf6;color:#002e5b;border:none;cursor:pointer;font-weight:700;font-size:12px;border-radius:4px 4px 0 0;margin-left:4px;\">\n        🔍 Record History\n      </button>\n    </div>\n    <div id=\"hPaneAudit\">" + _0x1972e8() + "</div>\n    <div id=\"hPaneRecord\" style=\"display:none;\">\n      <div style=\"display:flex;gap:8px;margin-bottom:12px;align-items:center;\">\n        <input id=\"hSearchUID\" type=\"text\" placeholder=\"Enter Unique ID...\"\n          style=\"border:1px solid #ccc;border-radius:4px;padding:6px 10px;font-size:12px;width:180px;text-transform:uppercase;\"\n          oninput=\"this.value=this.value.toUpperCase()\"\n          onkeydown=\"if(event.key==='Enter') document.getElementById('hSearchBtn').click()\">\n        <button id=\"hSearchBtn\" onclick=\"doRecordHistorySearch()\"\n          style=\"background:#002e5b;color:white;border:none;padding:6px 16px;border-radius:4px;cursor:pointer;font-weight:700;font-size:12px;\">Search</button>\n        <span style=\"font-size:11px;color:#888;\">or double-click any row then open history</span>\n      </div>\n      <div id=\"hRecordResult\"><p style=\"color:#aaa;text-align:center;padding:20px;\">Enter a Unique ID above and click Search.</p></div>\n    </div>";
  window._buildAuditTab = _0x1972e8;
  window._buildRecordTab = _0x1dc7f6;
  document.getElementById("historyOverlay").style.display = "flex";
}
function switchHistoryTab(_0x2150e9) {
  document.getElementById("hTabAudit").style.background = _0x2150e9 === "audit" ? "#002e5b" : "#e3ebf6";
  document.getElementById("hTabAudit").style.color = _0x2150e9 === "audit" ? "white" : "#002e5b";
  document.getElementById("hTabRecord").style.background = _0x2150e9 === "record" ? "#002e5b" : "#e3ebf6";
  document.getElementById("hTabRecord").style.color = _0x2150e9 === "record" ? "white" : "#002e5b";
  document.getElementById("hPaneAudit").style.display = _0x2150e9 === "audit" ? "block" : "none";
  document.getElementById("hPaneRecord").style.display = _0x2150e9 === "record" ? "block" : "none";
}
function doRecordHistorySearch() {
  var _0x352521 = (document.getElementById("hSearchUID").value || "").trim().toUpperCase();
  document.getElementById("hRecordResult").innerHTML = window._buildRecordTab ? window._buildRecordTab(_0x352521) : "";
}
function viewRecordHistory(_0x422c3f) {
  viewHistory();
  setTimeout(function () {
    switchHistoryTab("record");
    document.getElementById("hSearchUID").value = _0x422c3f;
    doRecordHistorySearch();
  }, 80);
}
async function clearAllData() {
  if (window.currentUser !== "DPI") {
    myAlert("⛔ Only DPI can clear all data.");
    return;
  }
  if (!confirm("⚠️ CLEAR ALL DATA?\n\nThis will delete ALL records AND uploaded documents from Supabase!\n\nक्या आप निश्चित हैं?")) {
    return;
  }
  const _0x4ec46a = getSupabase();
  if (_0x4ec46a) {
    await _0x4ec46a.from("ps_gradation").delete().neq("id", 0);
    try {
      const {
        data: _0x1279bb,
        error: _0x5f0242
      } = await _0x4ec46a.storage.from("ums-documents").list("ps_summary_docs", {
        limit: 1000
      });
      if (!_0x5f0242 && _0x1279bb && _0x1279bb.length > 0) {
        const _0xb2081b = _0x1279bb.map(_0x1be803 => "ps_summary_docs/" + _0x1be803.name);
        await _0x4ec46a.storage.from("ums-documents").remove(_0xb2081b);
      }
    } catch (_0x7d8a8a) {
      console.warn("Storage clear error:", _0x7d8a8a);
    }
  }
  window.fullData = [];
  window.filteredData = [];
  renderVirtual();
  myAlert("✅ All data AND uploaded documents cleared.");
}
async function clearDivisionData() {
  const _0x5eb952 = window.currentUser || "";
  if (_0x5eb952 !== "DPI" && !_0x5eb952.startsWith("JD")) {
    myAlert("⛔ Sirf JD aur DPI clear kar sakte hain.");
    return;
  }
  if (_0x5eb952 === "DPI") {
    if (!confirm("⚠️ CLEAR ALL DATA?\n\nThis will delete ALL records AND uploaded documents from Supabase!\n\nक्या आप निश्चित हैं?")) {
      return;
    }
    const _0x5c886c = getSupabase();
    if (_0x5c886c) {
      await _0x5c886c.from("ps_gradation").delete().neq("id", 0);
      try {
        const {
          data: _0x1a4cea,
          error: _0x30a8c8
        } = await _0x5c886c.storage.from("ums-documents").list("ps_summary_docs", {
          limit: 1000
        });
        if (!_0x30a8c8 && _0x1a4cea && _0x1a4cea.length > 0) {
          const _0x2c3205 = _0x1a4cea.map(_0x50b017 => "ps_summary_docs/" + _0x50b017.name);
          await _0x5c886c.storage.from("ums-documents").remove(_0x2c3205);
        }
      } catch (_0x449480) {
        console.warn("Storage clear error:", _0x449480);
      }
    }
    window.fullData = [];
    window.filteredData = [];
    renderVirtual();
    myAlert("✅ All data AND uploaded documents cleared.");
    if (auditLog) {
      auditLog("CLEAR_ALL", "DPI ne sabhi data aur documents clear kiya.");
    }
    return;
  }
  const _0x8a5d46 = getAllowedDistricts(_0x5eb952);
  if (!_0x8a5d46 || !_0x8a5d46.length) {
    myAlert("⛔ आपके संभाग की जानकारी नहीं मिली।");
    return;
  }
  const _0x2254af = window.DPI_DIVISION_INFO && window.DPI_DIVISION_INFO[_0x5eb952];
  const _0x505795 = _0x2254af ? _0x2254af.label : _0x5eb952;
  if (!confirm("⚠️ " + _0x505795 + " का DATA CLEAR करें?\n\nकेवल आपके संभाग (" + _0x8a5d46.join(", ") + ") के records Supabase से हटाए जाएंगे।\n\nक्या आप निश्चित हैं?")) {
    return;
  }
  const _0x167659 = window.fullData.filter(_0x1f6a34 => isRowAllowed(_0x1f6a34, _0x8a5d46));
  const _0x4df225 = _0x167659.map(_0x83ee8c => _0x83ee8c._sbId).filter(Boolean);
  const _0x12bd41 = getSupabase();
  if (_0x12bd41 && _0x4df225.length) {
    const _0x27113f = 100;
    for (let _0xb06632 = 0; _0xb06632 < _0x4df225.length; _0xb06632 += _0x27113f) {
      const _0x11ddd3 = _0x4df225.slice(_0xb06632, _0xb06632 + _0x27113f);
      await _0x12bd41.from("ps_gradation").delete().in("id", _0x11ddd3);
    }
    try {
      const {
        data: _0x1d63b4,
        error: _0x349f06
      } = await _0x12bd41.storage.from("ums-documents").list("ps_summary_docs", {
        limit: 1000
      });
      if (!_0x349f06 && _0x1d63b4 && _0x1d63b4.length > 0) {
        const _0x4fd998 = new Set(_0x8a5d46.map(_0x53c5a1 => _0x53c5a1.replace(/\s+/g, "").toUpperCase()));
        const _0x2c59eb = _0x1d63b4.filter(_0x35e5af => {
          const _0x4b4c46 = _0x35e5af.name.replace(/\.[^.]+$/, "").replace(/_meta$/, "");
          const _0x4eb3f4 = _0x4b4c46.replace(/^DEO/i, "").replace(/\s+/g, "").toUpperCase();
          return _0x4fd998.has(_0x4eb3f4);
        }).map(_0xfd633f => "ps_summary_docs/" + _0xfd633f.name);
        if (_0x2c59eb.length > 0) {
          await _0x12bd41.storage.from("ums-documents").remove(_0x2c59eb);
        }
      }
    } catch (_0x3fae2a) {
      console.warn("Storage clear error:", _0x3fae2a);
    }
  }
  window.fullData = window.fullData.filter(_0x2baed0 => !isRowAllowed(_0x2baed0, _0x8a5d46));
  window.filteredData = [...window.fullData];
  renderVirtual();
  myAlert("✅ " + _0x505795 + " के " + _0x167659.length + " records और संबंधित documents clear हो गए।");
  if (auditLog) {
    auditLog("CLEAR_DIVISION", _0x5eb952 + " ne apne sambhag ka data aur documents clear kiya: " + _0x167659.length + " records.");
  }
}
function openPasteDataModal() {
  document.getElementById("pasteDataOverlay").style.display = "flex";
  document.getElementById("pasteDataArea").value = "";
  document.getElementById("pasteDataStatus").textContent = "";
  setTimeout(() => document.getElementById("pasteDataArea").focus(), 100);
}
function closePasteDataModal() {
  document.getElementById("pasteDataOverlay").style.display = "none";
}
function processPasteData() {
  const _0x63d599 = window.currentUser || "";
  if (_0x63d599 !== "DPI" && !_0x63d599.startsWith("JD")) {
    myAlert("⛔ Sirf JD aur DPI paste kar sakte hain.");
    return;
  }
  const _0x1ca9f0 = document.getElementById("pasteDataArea").value.trim();
  if (!_0x1ca9f0) {
    myAlert("❌ Koi data nahi mila. Pehle paste karein.");
    return;
  }
  const _0x55f197 = _0x1ca9f0.split("\n").filter(_0x1f00a9 => _0x1f00a9.trim());
  if (!_0x55f197.length) {
    myAlert("❌ Data empty hai.");
    return;
  }
  const _0x31daec = getAllowedDistricts(_0x63d599);
  const _0x3675ad = [];
  const _0x1c9e64 = [];
  for (let _0x2f7f1d = 0; _0x2f7f1d < _0x55f197.length; _0x2f7f1d++) {
    const _0x3a2afa = _0x55f197[_0x2f7f1d].split("\t");
    const _0x9b13f4 = {};
    for (let _0xc61a0f = 0; _0xc61a0f < 28; _0xc61a0f++) {
      _0x9b13f4["field" + (_0xc61a0f + 1)] = (_0x3a2afa[_0xc61a0f] || "").toString().trim();
    }
    _0x9b13f4.field1 = String(window.fullData.length + _0x3675ad.length + 1);
    [5, 16, 17, 18].forEach(_0x178d44 => {
      const _0x39eb29 = "field" + (_0x178d44 + 1);
      const _0x1d7e75 = _0x9b13f4[_0x39eb29];
      if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(_0x1d7e75)) {
        const _0x211c08 = _0x1d7e75.replace(/-/g, "/").split("/");
        _0x9b13f4[_0x39eb29] = _0x211c08[2] + "-" + _0x211c08[1] + "-" + _0x211c08[0];
      }
    });
    if (_0x31daec !== null) {
      const _0x2a39c1 = (_0x9b13f4.field23 || "").trim();
      const _0x236c80 = _0x2a39c1 && _0x31daec.some(_0x2587c8 => _0x2a39c1.toLowerCase() === _0x2587c8.toLowerCase() || _0x2a39c1.toLowerCase().includes(_0x2587c8.toLowerCase()) || _0x2587c8.toLowerCase().includes(_0x2a39c1.toLowerCase()));
      if (!_0x236c80) {
        _0x1c9e64.push({
          row: _0x2f7f1d + 1,
          district: _0x2a39c1 || "(blank)"
        });
        continue;
      }
    }
    _0x3675ad.push(_0x9b13f4);
  }
  if (!_0x3675ad.length) {
    const _0x5535a7 = window.DPI_DIVISION_INFO && window.DPI_DIVISION_INFO[_0x63d599];
    const _0x1c4bf9 = _0x5535a7 ? _0x5535a7.label : _0x63d599;
    myAlert("❌ कोई valid rows नहीं मिलीं।\n\nध्यान दें: आप केवल " + _0x1c4bf9 + " के जिलों (" + (_0x31daec ? _0x31daec.join(", ") : "सभी") + ") का data paste कर सकते हैं।" + (_0x1c9e64.length ? "\n\n⚠️ " + _0x1c9e64.length + " rows skip हुईं (गलत district)" : ""));
    return;
  }
  let _0x122564 = _0x3675ad.length + " rows paste होंगी।";
  if (_0x31daec !== null) {
    const _0xa1e8d8 = window.DPI_DIVISION_INFO && window.DPI_DIVISION_INFO[_0x63d599];
    const _0x2cc170 = _0xa1e8d8 ? _0xa1e8d8.label : _0x63d599;
    _0x122564 += "\nसंभाग: " + _0x2cc170;
  }
  if (_0x1c9e64.length) {
    _0x122564 += "\n\n⚠️ " + _0x1c9e64.length + " rows skip (गलत/blank district)।";
  }
  _0x122564 += "\n\nआगे बढ़ें?";
  const _0xd2e89b = window.confirm(_0x122564);
  if (!_0xd2e89b) {
    return;
  }
  const _0x23ad7c = new Date().toLocaleString("en-IN");
  _0x3675ad.forEach(_0x1ac9b2 => {
    _0x1ac9b2.field29 = "New Entry";
    _0x1ac9b2.field30 = "Paste by " + _0x63d599 + " | " + _0x23ad7c;
    _0x1ac9b2.field31 = "";
    window.fullData.push(_0x1ac9b2);
  });
  window.filteredData = [...window.fullData];
  renderVirtual();
  auditLog("PASTE", "Pasted " + _0x3675ad.length + " rows by " + _0x63d599 + (_0x1c9e64.length ? " | Skipped: " + _0x1c9e64.length : ""));
  const _0xd31bfc = getSupabase();
  if (_0xd31bfc) {
    const _0x53678f = 500;
    for (let _0x3e6368 = 0; _0x3e6368 < _0x3675ad.length; _0x3e6368 += _0x53678f) {
      const _0xa89642 = _0x3675ad.slice(_0x3e6368, _0x3e6368 + _0x53678f).map(_0x5592d8 => {
        const _0x5d02ef = {};
        for (let _0x2b033c = 1; _0x2b033c <= 28; _0x2b033c++) {
          _0x5d02ef["field" + _0x2b033c] = _0x5592d8["field" + _0x2b033c] || "";
        }
        _0x5d02ef.field29 = _0x5592d8.field29 || "";
        _0x5d02ef.field30 = _0x5592d8.field30 || "";
        return _0x5d02ef;
      });
      _0xd31bfc.from("ps_gradation").insert(_0xa89642).select("id").then(({
        data: _0x5bfbf7,
        error: _0x26edb0
      }) => {
        if (!_0x26edb0 && _0x5bfbf7) {
          _0x5bfbf7.forEach((_0x585169, _0x2f8c3e) => {
            _0x3675ad[_0x3e6368 + _0x2f8c3e]._sbId = _0x585169.id;
          });
        }
      });
    }
  }
  let _0x632fa3 = "✅ " + _0x3675ad.length + " rows successfully added!";
  if (_0x1c9e64.length) {
    _0x632fa3 += " (" + _0x1c9e64.length + " rows skip हुईं)";
  }
  document.getElementById("pasteDataStatus").textContent = _0x632fa3;
  document.getElementById("pasteDataStatus").style.color = "#2e7d32";
  setTimeout(() => closePasteDataModal(), 1800);
}
document.addEventListener("DOMContentLoaded", function () {
  const _0x4bc9ac = document.createElement("div");
  _0x4bc9ac.style.cssText = "position:fixed;bottom:20px;right:20px;background:#002e5b;color:white;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:20px;z-index:9990;box-shadow:0 4px 12px rgba(0,0,0,0.3);transition:transform 0.2s;";
  _0x4bc9ac.innerHTML = "🕐";
  _0x4bc9ac.title = "Jump to Record";
  _0x4bc9ac.onclick = () => {
    showPassModal("🔍 Unique ID darj karein (Jump to Record):", function (_0x3b86fa) {
      if (_0x3b86fa) {
        document.getElementById("searchVal").value = _0x3b86fa.toUpperCase();
        performSearch();
      }
    }, "text");
  };
  _0x4bc9ac.onmouseover = () => _0x4bc9ac.style.transform = "scale(1.1)";
  _0x4bc9ac.onmouseout = () => _0x4bc9ac.style.transform = "scale(1)";
  document.body.appendChild(_0x4bc9ac);
});
let presenceChannel = null;
const _rowLocks = {};
let _psPollingTimer = null;
let _psHeartbeatTimer = null;
function _psRealtimeUser() {
  return window.currentUser || "Unknown";
}
function _psRealtimeDistrict() {
  const _0x12e482 = window.currentUser || "";
  if (!_0x12e482) {
    return "UNKNOWN";
  }
  if (_0x12e482 === "DPI") {
    return "DPI";
  }
  if (_0x12e482.startsWith("JD")) {
    return "JD " + _0x12e482.replace(/^JD/, "").trim();
  }
  if (_0x12e482.startsWith("DEO")) {
    return _0x12e482.replace(/^DEO/, "").trim() || _0x12e482;
  }
  return _0x12e482;
}
function _psLabelFromKey(_0x42471d) {
  if (!_0x42471d) {
    return "User";
  }
  if (_0x42471d === "DPI") {
    return "DPI";
  }
  if (_0x42471d.startsWith("JD")) {
    return "JD " + _0x42471d.replace(/^JD/, "").trim();
  }
  if (_0x42471d.startsWith("DEO")) {
    return _0x42471d.replace(/^DEO/, "").trim();
  }
  return _0x42471d;
}
async function _psHeartbeat() {
  const _0x328189 = getSupabase();
  if (!_0x328189 || !window.currentUser) {
    return;
  }
  try {
    await _0x328189.from("ps_online_users").upsert({
      user_id: window.currentUser,
      district: _psRealtimeDistrict(),
      last_seen: new Date().toISOString()
    }, {
      onConflict: "user_id"
    });
  } catch (_0x8df19d) {}
}
async function _psPollOnlineUsers() {
  const _0x34fb0d = getSupabase();
  if (!_0x34fb0d || !window.currentUser) {
    return;
  }
  try {
    const _0x2892c4 = new Date(Date.now() - 300000).toISOString();
    const {
      data: _0x2f6b42,
      error: _0x387546
    } = await _0x34fb0d.from("ps_online_users").select("user_id, district, last_seen").gte("last_seen", _0x2892c4);
    if (_0x387546) {
      console.warn("[PS Online] poll error:", _0x387546.message);
      _psRenderOnlineUsers([]);
      return;
    }
    _psRenderOnlineUsers(_0x2f6b42 || []);
  } catch (_0x3cab3a) {
    _psRenderOnlineUsers([]);
  }
}
function _psRenderOnlineUsers(_0x3c3747) {
  const _0x1c4171 = document.getElementById("onlineStatus");
  if (!_0x1c4171) {
    return;
  }
  if (!_0x3c3747.length) {
    _0x1c4171.innerHTML = "<span style=\"color:#999;font-style:italic;font-size:11px;\">Koi user online nahi</span>";
    return;
  }
  _0x1c4171.innerHTML = _0x3c3747.map(_0x4df05c => {
    const _0x3fbc5a = _0x4df05c.district || _psLabelFromKey(_0x4df05c.user_id);
    const _0x5ec1a0 = _0x4df05c.last_seen ? new Date(_0x4df05c.last_seen).toLocaleTimeString("en-IN") : "";
    const _0x2628c2 = _0x4df05c.user_id === window.currentUser;
    return "<span title=\"" + _0x3fbc5a + (_0x5ec1a0 ? " | Online since: " + _0x5ec1a0 : "") + "\"\n      style=\"padding:2px 8px;background:" + (_0x2628c2 ? "#bbdefb" : "#e8f5e9") + ";border-radius:12px;font-size:10px;\n             border:1px solid " + (_0x2628c2 ? "#1565c0" : "#4caf50") + ";white-space:nowrap;margin-right:4px;\n             cursor:default;" + (_0x2628c2 ? "font-weight:700;" : "") + "\">\n      🟢 " + _0x3fbc5a + (_0x2628c2 ? " (Aap)" : "") + "\n    </span>";
  }).join("");
}
async function initRealtime() {
  const _0x49415e = getSupabase();
  if (!_0x49415e) {
    return;
  }
  await _psHeartbeat();
  await _psPollOnlineUsers();
  clearInterval(_psHeartbeatTimer);
  _psHeartbeatTimer = setInterval(_psHeartbeat, 15000);
  clearInterval(_psPollingTimer);
  _psPollingTimer = setInterval(_psPollOnlineUsers, 10000);
  _psInitRealtimeChannel(_0x49415e);
}
function _psInitRealtimeChannel(_0x646f4b) {
  if (presenceChannel) {
    try {
      _0x646f4b.removeChannel(presenceChannel);
    } catch (_0x241cc1) {}
    presenceChannel = null;
  }
  const _0x232da2 = _psRealtimeUser();
  presenceChannel = _0x646f4b.channel("ps-gradation-collab");
  presenceChannel.on("broadcast", {
    event: "row-locked"
  }, ({
    payload: _0x57fc3f
  }) => {
    if (_0x57fc3f.user !== _0x232da2) {
      _psHandleExternalLock(_0x57fc3f);
    }
  }).on("broadcast", {
    event: "row-unlocked"
  }, ({
    payload: _0x53979d
  }) => {
    _psHandleExternalUnlock(_0x53979d);
  }).on("broadcast", {
    event: "data-update"
  }, ({
    payload: _0x10a226
  }) => {
    if (_0x10a226.user !== _0x232da2) {
      showNotification((_0x10a226.msg || "Kisi aur user ne data update kiya.") + " (refresh ho raha hai...)", _0x10a226.type || "update");
      const _0x26e803 = document.getElementById("formOverlay")?.style.display === "block";
      if (!_0x26e803) {
        loadDataFromSupabase().then(_0x2f3e05 => {
          if (_0x2f3e05) {
            window.filteredData = [...window.fullData];
            if (typeof renderVirtual === "function") {
              renderVirtual();
            }
            if (typeof updateStorageBadge === "function") {
              updateStorageBadge(true);
            }
          }
        });
      } else {
        showNotification("⚠️ Doosre user ne data update kiya. Form band karke refresh kar lena.", "info");
      }
    }
  }).subscribe();
}
function lockRow(_0x1cec4e) {
  if (!presenceChannel || !_0x1cec4e) {
    return;
  }
  _rowLocks[_0x1cec4e] = {
    user: _psRealtimeUser(),
    district: _psRealtimeDistrict(),
    self: true
  };
  presenceChannel.send({
    type: "broadcast",
    event: "row-locked",
    payload: {
      rowId: _0x1cec4e,
      user: _psRealtimeUser(),
      district: _psRealtimeDistrict()
    }
  });
}
function unlockRow(_0x3782c5) {
  if (!_0x3782c5) {
    return;
  }
  delete _rowLocks[_0x3782c5];
  if (presenceChannel) {
    presenceChannel.send({
      type: "broadcast",
      event: "row-unlocked",
      payload: {
        rowId: _0x3782c5
      }
    });
  }
}
function _psHandleExternalLock(_0x5a217a) {
  _rowLocks[_0x5a217a.rowId] = {
    user: _0x5a217a.user,
    district: _0x5a217a.district,
    self: false
  };
  const _0x10ea55 = document.querySelector("#tableBody tr[data-id=\"" + _0x5a217a.rowId + "\"]");
  if (_0x10ea55) {
    _0x10ea55.classList.add("row-locked-external");
    _0x10ea55.title = "🔒 " + _0x5a217a.district + " edit kar raha hai";
    if (!_0x10ea55.querySelector(".lock-icon")) {
      const _0x2d745c = document.createElement("span");
      _0x2d745c.className = "lock-icon";
      _0x2d745c.textContent = " 🔒";
      if (_0x10ea55.cells[2]) {
        _0x10ea55.cells[2].appendChild(_0x2d745c);
      }
    }
  }
}
function _psHandleExternalUnlock(_0x4db573) {
  delete _rowLocks[_0x4db573.rowId];
  const _0x32ad20 = document.querySelector("#tableBody tr[data-id=\"" + _0x4db573.rowId + "\"]");
  if (_0x32ad20) {
    _0x32ad20.classList.remove("row-locked-external");
    _0x32ad20.title = "";
    _0x32ad20.querySelector(".lock-icon")?.remove();
  }
}
function broadcastDataUpdate(_0x58cc0b, _0x4daac2 = "update") {
  if (!presenceChannel) {
    return;
  }
  presenceChannel.send({
    type: "broadcast",
    event: "data-update",
    payload: {
      msg: _0x58cc0b,
      type: _0x4daac2,
      user: _psRealtimeUser(),
      district: _psRealtimeDistrict()
    }
  });
}
const _psToastColors = {
  update: "#4caf50",
  join: "#2196f3",
  leave: "#9e9e9e",
  delete: "#f44336",
  info: "#607d8b"
};
function showNotification(_0x5ef0ff, _0x3f05c9 = "info") {
  const _0x25d324 = _psToastColors[_0x3f05c9] || _psToastColors.info;
  const _0x79861b = {
    update: "✏️",
    join: "👤",
    leave: "👋",
    delete: "🗑️",
    info: "ℹ️"
  };
  const _0x126d8a = document.createElement("div");
  _0x126d8a.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:100000;background:#1e293b;color:white;padding:11px 18px;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.35);border-left:5px solid " + _0x25d324 + ";font-size:13px;font-family:'Inter',sans-serif;max-width:340px;word-wrap:break-word;";
  _0x126d8a.innerHTML = (_0x79861b[_0x3f05c9] || "🔔") + " " + _0x5ef0ff;
  document.body.appendChild(_0x126d8a);
  setTimeout(() => {
    _0x126d8a.style.opacity = "0";
    _0x126d8a.style.transition = "opacity 0.4s";
    setTimeout(() => _0x126d8a.remove(), 400);
  }, 4500);
}
async function _psCleanupRealtime() {
  clearInterval(_psHeartbeatTimer);
  clearInterval(_psPollingTimer);
  if (presenceChannel) {
    try {
      getSupabase()?.removeChannel(presenceChannel);
    } catch (_0x1b6783) {}
    presenceChannel = null;
  }
  const _0x3da7bb = getSupabase();
  if (_0x3da7bb && window.currentUser) {
    try {
      await _0x3da7bb.from("ps_online_users").delete().eq("user_id", window.currentUser);
    } catch (_0x59bf68) {}
  }
  const _0x345198 = document.getElementById("onlineStatus");
  if (_0x345198) {
    _0x345198.innerHTML = "<span style=\"color:#999;font-style:italic;\">Loading...</span>";
  }
  const _0x143c2e = document.getElementById("onlineStatusBar");
  if (_0x143c2e) {
    _0x143c2e.style.display = "none";
  }
}
const _psOrigRenderVirtual = typeof renderVirtual === "function" ? renderVirtual : null;
if (_psOrigRenderVirtual) {
  renderVirtual = function () {
    _psOrigRenderVirtual.apply(this, arguments);
    Object.entries(_rowLocks).forEach(([_0x192380, _0x133a95]) => {
      if (!_0x133a95.self) {
        _psHandleExternalLock({
          rowId: _0x192380,
          ..._0x133a95
        });
      }
    });
  };
}
window.addEventListener("beforeunload", () => {
  clearInterval(_psHeartbeatTimer);
  clearInterval(_psPollingTimer);
  const _0x46a477 = getSupabase();
  if (_0x46a477 && window.currentUser) {
    try {
      _0x46a477.from("ps_online_users").delete().eq("user_id", window.currentUser);
    } catch (_0x15deff) {}
  }
});
(function () {
  'use strict';

  function _0x25773d() {
    const _0x13c62f = document.getElementById("tableBody");
    if (!_0x13c62f) {
      return;
    }
    const _0x1fdae4 = new IntersectionObserver(_0x54ca22 => {
      _0x54ca22.forEach((_0x10648e, _0x2c6bbc) => {
        if (_0x10648e.isIntersecting) {
          const _0x3ba39e = _0x10648e.target;
          _0x3ba39e.style.animationDelay = _0x2c6bbc * 0.018 + "s";
          _0x3ba39e.classList.add("row-enter");
          _0x1fdae4.unobserve(_0x3ba39e);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px 60px 0px"
    });
    const _0x4fc39d = _0x13c62f.querySelectorAll("tr");
    _0x4fc39d.forEach(_0x483c05 => _0x1fdae4.observe(_0x483c05));
  }
  function _0x296149() {
    const _0x5bc5ae = document.getElementById("tableBody");
    if (!_0x5bc5ae) {
      return;
    }
    const _0x24d04c = new MutationObserver(_0x373f1d => {
      _0x373f1d.forEach(_0x5663e6 => {
        _0x5663e6.addedNodes.forEach((_0x940fcd, _0xb7095c) => {
          if (_0x940fcd.nodeType === 1 && _0x940fcd.tagName === "TR") {
            _0x940fcd.style.animationDelay = _0xb7095c * 0.012 + "s";
            _0x940fcd.classList.remove("row-enter");
            _0x940fcd.classList.add("row-enter");
          }
        });
      });
    });
    _0x24d04c.observe(_0x5bc5ae, {
      childList: true
    });
  }
  function _0x53cfb0() {
    document.addEventListener("click", function (_0x791e7a) {
      const _0x1188b2 = _0x791e7a.target.closest(".btn, .footer-btn, .btn-blue");
      if (!_0x1188b2) {
        return;
      }
      const _0x4cfbe6 = _0x1188b2.getBoundingClientRect();
      const _0x1e5526 = Math.max(_0x4cfbe6.width, _0x4cfbe6.height) * 2;
      const _0x3cf1f6 = _0x791e7a.clientX - _0x4cfbe6.left - _0x1e5526 / 2;
      const _0x219751 = _0x791e7a.clientY - _0x4cfbe6.top - _0x1e5526 / 2;
      const _0x368c97 = document.createElement("span");
      _0x368c97.style.cssText = "\n      position:absolute;\n      width:" + _0x1e5526 + "px;height:" + _0x1e5526 + "px;\n      top:" + _0x219751 + "px;left:" + _0x3cf1f6 + "px;\n      background:rgba(255,255,255,.28);\n      border-radius:50%;\n      transform:scale(0);\n      animation:ripple .55s ease-out forwards;\n      pointer-events:none;\n      z-index:0;\n    ";
      _0x1188b2.style.position = "relative";
      _0x1188b2.style.overflow = "hidden";
      _0x1188b2.appendChild(_0x368c97);
      setTimeout(() => _0x368c97.remove(), 600);
    });
  }
  function _0x5e1647() {
    const _0x1dc9ff = document.getElementById("formOverlay");
    const _0x1b1159 = document.getElementById("formCard");
    if (!_0x1dc9ff || !_0x1b1159) {
      return;
    }
    const _0x583ead = window.toggleForm;
    if (typeof _0x583ead !== "function") {
      return;
    }
    window.toggleForm = function (_0xbba2bc) {
      if (_0xbba2bc) {
        _0x583ead.call(this, _0xbba2bc);
        _0x1dc9ff.style.animation = "overlayIn .25s ease both";
        _0x1b1159.style.animation = "cardDrop .4s cubic-bezier(.22,.61,.36,1) .05s both";
        const _0x4c72dd = _0x1b1159.querySelectorAll(".field-group");
        _0x4c72dd.forEach((_0x1f6452, _0x36f5cd) => {
          _0x1f6452.style.animation = "fadeInUp .3s cubic-bezier(.22,.61,.36,1) " + (_0x36f5cd * 0.04 + 0.1) + "s both";
        });
      } else {
        _0x1b1159.style.animation = "fadeIn .2s ease reverse both";
        _0x1dc9ff.style.animation = "overlayIn .2s ease reverse both";
        setTimeout(() => _0x583ead.call(this, _0xbba2bc), 180);
      }
    };
  }
  function _0x489f7e() {
    const _0x145862 = window.showNotification;
    if (typeof _0x145862 !== "function") {
      return;
    }
    window.showNotification = function (_0x4c2e37, _0x21082b) {
      const _0x5cd075 = {
        update: "#16a34a",
        join: "#1d6fce",
        leave: "#64748b",
        delete: "#dc2626",
        info: "#64748b"
      };
      const _0x1e43b9 = {
        update: "✏️",
        join: "👤",
        leave: "👋",
        delete: "🗑️",
        info: "ℹ️"
      };
      const _0x395f0b = _0x5cd075[_0x21082b] || _0x5cd075.info;
      const _0x474465 = document.createElement("div");
      _0x474465.style.cssText = "\n      position:fixed;bottom:24px;right:24px;z-index:100000;\n      background:#0f172a;color:white;\n      padding:12px 18px;\n      border-radius:12px;\n      box-shadow:0 8px 32px rgba(0,0,0,.4);\n      border-left:4px solid " + _0x395f0b + ";\n      font-size:13px;font-family:'DM Sans',sans-serif;\n      max-width:340px;word-wrap:break-word;\n      display:flex;align-items:flex-start;gap:10px;\n      animation:toastSlideIn .4s cubic-bezier(.22,.61,.36,1) both;\n    ";
      const _0x20ae56 = document.createElement("div");
      _0x20ae56.style.cssText = "\n      position:absolute;bottom:0;left:0;height:3px;width:100%;\n      background:" + _0x395f0b + ";border-radius:0 0 12px 12px;\n      transform-origin:left;\n      transition:transform 4.5s linear;\n    ";
      _0x474465.style.position = "fixed";
      _0x474465.innerHTML = "<span style=\"font-size:16px;line-height:1;\">" + (_0x1e43b9[_0x21082b] || "🔔") + "</span><span>" + _0x4c2e37 + "</span>";
      _0x474465.appendChild(_0x20ae56);
      document.body.appendChild(_0x474465);
      setTimeout(() => {
        _0x20ae56.style.transform = "scaleX(0)";
      }, 50);
      setTimeout(() => {
        _0x474465.style.animation = "toastSlideOut .35s ease forwards";
        setTimeout(() => _0x474465.remove(), 360);
      }, 4500);
    };
  }
  function _0xc0c00c() {
    document.addEventListener("click", function (_0x10ccd6) {
      const _0xf41a1d = _0x10ccd6.target.closest("#tableBody tr");
      if (!_0xf41a1d) {
        return;
      }
      _0xf41a1d.classList.remove("row-flash");
      _0xf41a1d.classList.add("row-flash");
    });
  }
  function _0x41c1cd() {}
  function _0x130e42() {
    const _0x3b53ed = document.querySelector(".toolbar");
    if (!_0x3b53ed) {
      return;
    }
    const _0x29993d = _0x3b53ed.querySelectorAll("button, .btn, span[id]");
    _0x29993d.forEach((_0x12ca20, _0x2076a4) => {
      _0x12ca20.style.opacity = "0";
      _0x12ca20.style.transform = "translateY(-8px)";
      setTimeout(() => {
        _0x12ca20.style.transition = "opacity .3s ease, transform .3s cubic-bezier(.22,.61,.36,1)";
        _0x12ca20.style.opacity = "1";
        _0x12ca20.style.transform = "translateY(0)";
      }, 200 + _0x2076a4 * 45);
    });
  }
  function _0x37cd6e() {
    const _0x65aed2 = document.getElementById("loginOverlay");
    if (!_0x65aed2) {
      return;
    }
    for (let _0x311957 = 0; _0x311957 < 8; _0x311957++) {
      const _0x4dd2e5 = document.createElement("div");
      const _0x57da50 = 40 + Math.random() * 120;
      const _0x71b0bb = Math.random() * 100;
      const _0x1f776d = Math.random() * 100;
      const _0x53ce1f = 6 + Math.random() * 8;
      const _0x4893dc = Math.random() * -10;
      _0x4dd2e5.style.cssText = "\n      position:absolute;\n      width:" + _0x57da50 + "px;height:" + _0x57da50 + "px;\n      left:" + _0x71b0bb + "%;top:" + _0x1f776d + "%;\n      border-radius:50%;\n      background:radial-gradient(circle, rgba(29,111,206," + (0.04 + Math.random() * 0.06) + ") 0%, transparent 70%);\n      animation:floatY " + _0x53ce1f + "s ease-in-out " + _0x4893dc + "s infinite;\n      pointer-events:none;\n    ";
      _0x65aed2.appendChild(_0x4dd2e5);
    }
  }
  function _0x26edbf() {
    const _0x2781a5 = [{
      id: "pwPanelOverlay",
      card: "#pwPanelBox",
      anim: "fadeInScale .4s cubic-bezier(.22,.61,.36,1) both"
    }, {
      id: "pwChangeBox",
      card: "#pwChangeBox > div",
      anim: "popIn .35s cubic-bezier(.22,.61,.36,1) both"
    }, {
      id: "dpiPassModal",
      card: "#dpiPassModal > div",
      anim: "popIn .35s cubic-bezier(.22,.61,.36,1) both"
    }, {
      id: "dpiDivisionModal",
      card: "#dpiDivisionModal > div",
      anim: "cardDrop .45s cubic-bezier(.22,.61,.36,1) .05s both"
    }, {
      id: "titleEditorOverlay",
      card: "#titleEditorOverlay > div",
      anim: "fadeInScale .35s cubic-bezier(.22,.61,.36,1) both"
    }];
    _0x2781a5.forEach(({
      id: _0x3ae899,
      card: _0x3f405d,
      anim: _0x2faf49
    }) => {
      const _0x2b19eb = document.getElementById(_0x3ae899);
      if (!_0x2b19eb) {
        return;
      }
      const _0x2fea69 = new MutationObserver(() => {
        const _0x42a25b = _0x2b19eb.style.display === "flex" || _0x2b19eb.style.display === "block";
        if (_0x42a25b) {
          _0x2b19eb.style.animation = "overlayIn .22s ease both";
          let _0x31a1bd = null;
          try {
            const _0x8515ba = _0x3f405d.replace("#" + _0x3ae899, "").trim();
            _0x31a1bd = _0x8515ba ? _0x2b19eb.querySelector(_0x8515ba) : null;
          } catch (_0x56c94c) {}
          if (!_0x31a1bd) {
            try {
              _0x31a1bd = document.querySelector(_0x3f405d);
            } catch (_0x53b794) {}
          }
          if (!_0x31a1bd) {
            _0x31a1bd = _0x2b19eb.querySelector("div");
          }
          if (_0x31a1bd) {
            _0x31a1bd.style.animation = "none";
            _0x31a1bd.style.animation = _0x2faf49;
          }
        }
      });
      _0x2fea69.observe(_0x2b19eb, {
        attributes: true,
        attributeFilter: ["style"]
      });
    });
  }
  function _0x5a8f37() {
    const _0x559f25 = document.getElementById("otherToolbarMenu");
    if (!_0x559f25) {
      return;
    }
    const _0x2c399a = new MutationObserver(() => {
      if (_0x559f25.style.display !== "none") {
        _0x559f25.style.animation = "slideDown .22s cubic-bezier(.22,.61,.36,1) both";
      }
    });
    _0x2c399a.observe(_0x559f25, {
      attributes: true,
      attributeFilter: ["style"]
    });
  }
  function _0x27bfd6() {
    const _0x2ed56e = document.getElementById("onlineStatus");
    if (!_0x2ed56e) {
      return;
    }
    const _0xb0769 = new MutationObserver(() => {
      const _0x153916 = _0x2ed56e.querySelectorAll("span");
      _0x153916.forEach((_0x22bf5f, _0x26d1cf) => {
        if (!_0x22bf5f.dataset.animated) {
          _0x22bf5f.style.animation = "fadeInUp .3s cubic-bezier(.22,.61,.36,1) " + _0x26d1cf * 0.06 + "s both";
          _0x22bf5f.dataset.animated = "1";
        }
      });
    });
    _0xb0769.observe(_0x2ed56e, {
      childList: true,
      subtree: true
    });
  }
  function _0x5f3229() {
    const _0x43d812 = document.getElementById("dataLoadBar");
    if (!_0x43d812) {
      return;
    }
    _0x43d812.style.background = "linear-gradient(90deg, var(--navy) 0%, var(--accent) 50%, #0ea5e9 100%)";
    _0x43d812.style.backgroundSize = "200% 100%";
    _0x43d812.style.animation = "gradientShift 2s ease infinite, progressGlow 1.5s ease-in-out infinite";
  }
  function _0x29cfe8() {}
  function _0x4dd223() {
    const _0x37c489 = document.getElementById("loginOverlay");
    if (!_0x37c489) {
      return;
    }
    const _0x5b2ae4 = _0x37c489.querySelector("div[style*=\"font-size:36px\"], div[style*=\"font-size:28px\"]");
    if (_0x5b2ae4) {
      _0x5b2ae4.classList.add("login-icon");
      _0x5b2ae4.style.animation = "floatY 3s ease-in-out infinite";
    }
  }
  function _0xf734f3() {
    const _0x186255 = document.getElementById("dpiControlPanel");
    if (!_0x186255) {
      return;
    }
    const _0x31f337 = new MutationObserver(() => {
      if (_0x186255.style.display !== "none") {
        requestAnimationFrame(() => {
          _0x186255.style.animation = "fadeInScale .3s cubic-bezier(.22,.61,.36,1) both";
          const _0x1f6c8f = _0x186255.querySelectorAll(".ap-dist-row");
          _0x1f6c8f.forEach((_0x59faab, _0x1fdf07) => {
            _0x59faab.style.opacity = "0";
            _0x59faab.style.transform = "translateX(-6px)";
            setTimeout(() => {
              _0x59faab.style.transition = "opacity .2s ease, transform .2s ease, background .15s";
              _0x59faab.style.opacity = "1";
              _0x59faab.style.transform = "translateX(0)";
            }, 60 + _0x1fdf07 * 20);
          });
        });
      }
    });
    _0x31f337.observe(_0x186255, {
      attributes: true,
      attributeFilter: ["style"]
    });
  }
  function _0x5e7a93() {
    _0x37cd6e();
    _0x4dd223();
    _0x53cfb0();
    _0x489f7e();
    _0xc0c00c();
    _0x26edbf();
    _0x5a8f37();
    _0x27bfd6();
    _0x5f3229();
    _0x29cfe8();
    _0xf734f3();
    const _0x1895be = setInterval(() => {
      if (document.getElementById("tableBody")) {
        clearInterval(_0x1895be);
        _0x296149();
        _0x41c1cd();
      }
    }, 500);
    const _0x4bbfea = window.checkLogin;
    if (typeof _0x4bbfea === "function") {
      window.checkLogin = function () {
        _0x4bbfea.apply(this, arguments);
        setTimeout(_0x130e42, 300);
        setTimeout(() => {
          const _0x24fa63 = document.querySelectorAll("#tableBody tr");
          _0x24fa63.forEach((_0x493899, _0x17e627) => {
            _0x493899.style.animationDelay = _0x17e627 * 0.012 + "s";
            _0x493899.classList.add("row-enter");
          });
        }, 1200);
      };
    }
    const _0x564d24 = setInterval(() => {
      if (typeof window.toggleForm === "function") {
        clearInterval(_0x564d24);
        _0x5e1647();
      }
    }, 300);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x5e7a93);
  } else {
    setTimeout(_0x5e7a93, 0);
  }
})();
function printRecordCard() {
  const _0x47532e = _0x570a4e => {
    const _0x4e780e = document.getElementById(_0x570a4e);
    if (_0x4e780e) {
      return _0x4e780e.value || "—";
    } else {
      return "—";
    }
  };
  const _0x38b423 = _0x109cc5 => {
    const _0x417ea0 = document.getElementById(_0x109cc5);
    if (_0x417ea0) {
      return (_0x417ea0.textContent || _0x417ea0.innerText || "—").trim();
    } else {
      return "—";
    }
  };
  const _0x3c17d1 = _0x47532e("in3");
  const _0x5e0ca4 = _0x47532e("in2");
  const _0x2f95cc = _0x38b423("formStatusBadge") === "EDIT MODE" ? window._currentGradNo || "—" : "NEW ENTRY";
  const _0x2caceb = _0x47532e("in1");
  const _0x19c3c8 = _0x47532e("in4");
  const _0x133a8c = _0x47532e("in5");
  const _0x22e50e = _0x47532e("in6");
  const _0x36519f = (() => {
    const _0x431379 = document.getElementById("retirementField");
    if (_0x431379) {
      return _0x431379.value || "—";
    } else {
      return "—";
    }
  })();
  const _0x5828e8 = (() => {
    const _0x14e277 = document.getElementById("ms7Text");
    if (_0x14e277) {
      return _0x14e277.textContent || "—";
    } else {
      return _0x47532e("in7");
    }
  })();
  const _0x48aa13 = _0x47532e("in8");
  const _0x479980 = _0x47532e("in9");
  const _0x49f495 = _0x47532e("in10");
  const _0x597cf5 = _0x47532e("in11");
  const _0x2e1d34 = _0x47532e("in12");
  const _0xb54c9a = _0x47532e("in13");
  const _0x48da86 = _0x47532e("in14");
  const _0x120179 = _0x47532e("in15");
  const _0x543d14 = _0x47532e("in16");
  const _0x2a6936 = _0x47532e("in17");
  const _0x4388d2 = _0x47532e("in18");
  const _0x10a818 = _0x47532e("in19");
  const _0x31d4e2 = (() => {
    const _0x50ae3b = document.getElementById("in19b");
    if (_0x50ae3b) {
      return _0x50ae3b.value || "—";
    } else {
      return "—";
    }
  })();
  const _0xe6b826 = (() => {
    const _0x4a6e89 = document.getElementById("in17b");
    if (_0x4a6e89) {
      return _0x4a6e89.value || "—";
    } else {
      return "—";
    }
  })();
  const _0x2de1ea = (() => {
    const _0x35b360 = document.getElementById("in18b");
    if (_0x35b360) {
      return _0x35b360.value || "—";
    } else {
      return _0x47532e("in18");
    }
  })();
  const _0x962bdb = (() => {
    const _0xd7a278 = document.getElementById("in18b");
    if (_0xd7a278) {
      return _0xd7a278.value || "—";
    } else {
      return _0x47532e("in18");
    }
  })();
  const _0x5d4149 = _0x47532e("in20");
  const _0x2ff392 = _0x47532e("in21");
  const _0x1c38c0 = _0x47532e("in23");
  const _0x444ecb = _0x47532e("in24");
  const _0x3cc696 = _0x47532e("in25");
  const _0x374b42 = _0x47532e("in26");
  const _0x4b6aaf = _0x47532e("in27");
  const _0x39987b = _0x47532e("in28");
  const _0x3e029b = document.getElementById("dpiLogoForm");
  const _0x3348af = _0x3e029b ? _0x3e029b.src : "";
  const _0x469c51 = new Date().toLocaleString("hi-IN", {
    hour12: true
  });
  const _0x38bc7f = "<!DOCTYPE html>\n<html lang=\"hi\">\n<head>\n<meta charset=\"UTF-8\">\n<title>लोक सेवक विवरण पत्र — " + _0x3c17d1 + "</title>\n<style>\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');\n  *{box-sizing:border-box;margin:0;padding:0;}\n  body{font-family:'Noto Sans Devanagari',Arial,sans-serif;background:#f0f2f5;color:#111;font-size:12px;}\n  .page{background:white;max-width:900px;margin:0 auto;padding:24px 28px 32px;}\n  /* Top Action Buttons */\n  .action-bar{display:flex;gap:12px;justify-content:center;padding:14px 0 16px;background:#f0f2f5;position:sticky;top:0;z-index:99;border-bottom:1px solid #ccc;}\n  .action-bar button{padding:10px 28px;font-size:14px;font-weight:700;border:none;border-radius:6px;cursor:pointer;font-family:inherit;display:flex;align-items:center;gap:8px;}\n  .btn-print{background:#1a3a5c;color:white;}\n  .btn-close{background:#555;color:white;}\n  /* Header */\n  .header{text-align:center;border-bottom:2.5px double #1a3a5c;padding-bottom:12px;margin-bottom:14px;position:relative;}\n  .header img{width:64px;height:64px;object-fit:contain;position:absolute;right:0;top:0;}\n  .header h1{font-size:18px;font-weight:700;color:#1a3a5c;letter-spacing:.5px;}\n  .header h2{font-size:12px;color:#333;margin-top:4px;}\n  .header .print-date{font-size:10px;color:#666;margin-top:4px;}\n  /* Name banner */\n  .name-banner{display:flex;justify-content:space-between;align-items:center;border:1.5px solid #1a3a5c;padding:8px 14px;margin-bottom:14px;border-radius:4px;background:#f7f9fc;}\n  .name-banner .emp-name{font-size:15px;font-weight:700;color:#1a3a5c;}\n  .name-banner .ids{text-align:right;font-size:11px;line-height:1.8;color:#444;}\n  /* Section */\n  .section{margin-bottom:12px;}\n  .section-title{background:#1a3a5c;color:white;padding:5px 12px;font-size:12px;font-weight:700;border-radius:3px 3px 0 0;margin-bottom:0;}\n  table.data-table{width:100%;border-collapse:collapse;}\n  table.data-table td{border:1px solid #ccc;padding:5px 9px;font-size:11.5px;vertical-align:middle;}\n  table.data-table td.lbl{background:#eef2f7;font-weight:600;color:#2c3e50;width:28%;white-space:nowrap;}\n  table.data-table td.lbl .fno{display:inline-block;background:#1a3a5c;color:white;border-radius:3px;padding:1px 5px;font-size:10px;margin-right:5px;font-weight:700;}\n  table.data-table td.val{color:#1a1a1a;width:22%;}\n  /* Footer */\n  .footer{margin-top:18px;border-top:1.5px solid #1a3a5c;padding-top:8px;text-align:center;font-size:10px;color:#555;}\n  @media print {\n    .action-bar{display:none!important;}\n    body{background:white;}\n    .page{padding:12px 16px;max-width:100%;}\n  }\n</style>\n</head>\n<body>\n<div class=\"action-bar\">\n  <button class=\"btn-print\" onclick=\"window.print()\">🖨 प्रिंट करें</button>\n  <button class=\"btn-close\" onclick=\"window.close()\">✕ बंद करें</button>\n</div>\n<div class=\"page\">\n  <!-- HEADER -->\n  <div class=\"header\">\n    " + (_0x3348af ? "<img src=\"" + _0x3348af + "\" alt=\"DPI\">" : "") + "\n    <h1>लोक शिक्षण संचालनालय, मध्यप्रदेश</h1>\n    <h2>MS संवर्ग वरीयता सूची 01/04/2026 — लोक सेवक विवरण पत्र</h2>\n    <div class=\"print-date\">मुद्रण दिनांक: " + _0x469c51 + "</div>\n  </div>\n\n  <!-- NAME BANNER -->\n  <div class=\"name-banner\">\n    <div class=\"emp-name\">\n      <span class=\"fno\" style=\"font-size:11px;margin-right:4px;\">3</span>\n      " + (_0x3c17d1 === "—" ? "नाम उपलब्ध नहीं" : _0x3c17d1) + "\n    </div>\n    <div class=\"ids\">\n      <span class=\"fno\" style=\"font-size:9px;padding:1px 4px;margin-right:3px;\">1</span> S.No.: " + (_0x2caceb === "—" ? "—" : _0x2caceb) + "<br>\n      <span class=\"fno\" style=\"font-size:9px;padding:1px 4px;margin-right:3px;\">G</span> G.N.: " + _0x2f95cc + "<br>\n      <span class=\"fno\" style=\"font-size:9px;padding:1px 4px;margin-right:3px;\">2</span> Unique ID: " + _0x5e0ca4 + "\n    </div>\n  </div>\n\n  <!-- SECTION 1: व्यक्तिगत एवं शैक्षणिक जानकारी -->\n  <div class=\"section\">\n    <div class=\"section-title\">① व्यक्तिगत एवं शैक्षणिक जानकारी</div>\n    <table class=\"data-table\">\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">4</span> वर्ग</td>\n        <td class=\"val\">" + _0x19c3c8 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">★</span> नियुक्ति तरीका</td>\n        <td class=\"val\">" + _0x31d4e2 + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">5</span> लिंग</td>\n        <td class=\"val\">" + _0x133a8c + "</td>\n        <td class=\"lbl\"><span class=\"fno\">9</span> UG विषय</td>\n        <td class=\"val\">" + _0x479980 + (_0x49f495 !== "—" ? ", " + _0x49f495 : "") + (_0x597cf5 !== "—" ? ", " + _0x597cf5 : "") + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">6</span> जन्म तिथि</td>\n        <td class=\"val\">" + _0x22e50e + "</td>\n        <td class=\"lbl\"><span class=\"fno\">7</span> व्यावसायिक योग्यता</td>\n        <td class=\"val\">" + _0x5828e8 + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">R</span> सेवानिवृति (62Y)</td>\n        <td class=\"val\">" + _0x36519f + "</td>\n        <td class=\"lbl\"><span class=\"fno\">12</span> PG योग्यता</td>\n        <td class=\"val\">" + _0x2e1d34 + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">13</span> PG विषय</td>\n        <td class=\"val\">" + _0xb54c9a + (_0x48da86 !== "—" ? ", " + _0x48da86 : "") + (_0x120179 !== "—" ? ", " + _0x120179 : "") + "</td>\n        <td class=\"lbl\"><span class=\"fno\">16</span> गृह जिला</td>\n        <td class=\"val\">" + _0x543d14 + "</td>\n      </tr>\n    </table>\n  </div>\n\n  <!-- SECTION 2: नियुक्ति एवं पदोन्नति विवरण -->\n  <div class=\"section\">\n    <div class=\"section-title\">② नियुक्ति एवं पदोन्नति विवरण</div>\n    <table class=\"data-table\">\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">17</span> प्रथम नियुक्ति तिथि</td>\n        <td class=\"val\">" + _0x2a6936 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">8</span> प्रथम नियुक्ति पद</td>\n        <td class=\"val\">" + _0x48aa13 + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">P</span> अध्यापक प्रोन्नति तिथि</td>\n        <td class=\"val\">" + _0xe6b826 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">18</span> वर्तमान संवर्ग तिथि</td>\n        <td class=\"val\">" + _0x2de1ea + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">18</span> वरिष्ठता तिथि</td>\n        <td class=\"val\">" + _0x4388d2 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">19</span> अंतर संभाग स्थानांतरण</td>\n        <td class=\"val\">" + _0x10a818 + "</td>\n      </tr>\n    </table>\n  </div>\n\n  <!-- SECTION 3: वर्तमान पदस्थापना -->\n  <div class=\"section\">\n    <div class=\"section-title\">③ वर्तमान पदस्थापना</div>\n    <table class=\"data-table\">\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">20</span> वर्तमान शाला</td>\n        <td class=\"val\">" + _0x5d4149 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">21</span> UDISE कोड</td>\n        <td class=\"val\">" + _0x2ff392 + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">22</span> पदस्थापना जिला</td>\n        <td class=\"val\" colspan=\"3\">" + _0x1c38c0 + "</td>\n      </tr>\n    </table>\n  </div>\n\n  <!-- SECTION 4: उच्च पद प्रभार -->\n  <div class=\"section\">\n    <div class=\"section-title\">④ उच्च पद प्रभार</div>\n    <table class=\"data-table\">\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">23</span> उच्च पद ज्वाइन</td>\n        <td class=\"val\">" + _0x3cc696 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">26</span> उच्च पद जिला</td>\n        <td class=\"val\">" + _0x39987b + "</td>\n      </tr>\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">24</span> शाला नाम</td>\n        <td class=\"val\">" + _0x374b42 + "</td>\n        <td class=\"lbl\"><span class=\"fno\">25</span> UDISE कोड</td>\n        <td class=\"val\">" + _0x4b6aaf + "</td>\n      </tr>\n    </table>\n  </div>\n\n  <!-- SECTION 5: टिप्पणी -->\n  <div class=\"section\">\n    <div class=\"section-title\">⑤ टिप्पणी (REMARK)</div>\n    <table class=\"data-table\">\n      <tr>\n        <td class=\"lbl\"><span class=\"fno\">27</span> REMARK</td>\n        <td class=\"val\" colspan=\"3\">" + (_0x444ecb === "—" ? "NO" : _0x444ecb) + "</td>\n      </tr>\n    </table>\n  </div>\n\n  <div class=\"footer\">\n    ✨ Developed by: <b>Devendra Rai</b> &nbsp;|&nbsp; 📞 8319942987 &nbsp;|&nbsp; ©2026 PS Gradation ERP\n  </div>\n</div>\n</body>\n</html>";
  const _0x25074a = window.open("", "_blank", "width=960,height=800,scrollbars=yes");
  _0x25074a.document.write(_0x38bc7f);
  _0x25074a.document.close();
}

/* PS Gradation ERP — UG Qualification → Subject Mapping Manager
 * Sirf DPI aur JD edit kar sakte hain. Har badlav ka history (user + date-time) DPI ko dikhta hai.
 * Data ps_settings mein save hota hai: __ug_subject_map__ , __ug_subject_log__
 * Is file ko index.html mein app.js ke BAAD load karein.
 */
(function () {
  "use strict";
  var KEY_MAP = "__ug_subject_map__";
  var KEY_LOG = "__ug_subject_log__";
  var CS_OPTIONS = ["", "Maths", "Science", "Social Science", "Hindi", "English", "Sanskrit", "Urdu", "NIL"];

  // app.js ke original (default) maps ki copy
  var BASE = {};
  Object.keys(ugSubjectMap).forEach(function (q) {
    if (q === "NIL") return;
    BASE[q] = { subjects: ugSubjectMap[q].slice(), cs: ugToCounsellingMap[q] || "" };
  });

  var ui = { sel: "", tab: "map", edit: null, busy: false, state: null, filterUser: "" };

  function cu() { return String(window.currentUser || ""); }
  function isDpi() { return cu() === "DPI"; }
  function isMgr() { return cu() === "DPI" || cu().indexOf("JD") === 0; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function seedMap() { return clone(BASE); }

  async function fetchState() {
    var m = null, l = null;
    try { m = await _sbSettingGet(KEY_MAP); } catch (e) {}
    try { l = await _sbSettingGet(KEY_LOG); } catch (e) {}
    return { map: (m && typeof m === "object") ? m : seedMap(), log: Array.isArray(l) ? l : [] };
  }

  function syncQualOptions(map) {
    ["in8", "in12"].forEach(function (id) {
      var sel = document.getElementById(id);
      if (!sel) return;
      var existing = {};
      Array.prototype.forEach.call(sel.options, function (o) { existing[o.value] = o; });
      Object.keys(map).forEach(function (q) {
        if (!existing[q] && !BASE[q]) {          // sirf naya qualification add karo
          var op = document.createElement("option");
          op.value = q; op.textContent = q;
          sel.appendChild(op);
        }
      });
      Object.keys(existing).forEach(function (v) {
        if (v && v !== "NIL" && !map[v] && sel.value !== v) {
          if (existing[v].parentNode) existing[v].parentNode.removeChild(existing[v]);
        }
      });
    });
  }

  function applyMap(map) {
    Object.keys(ugSubjectMap).forEach(function (k) { if (k !== "NIL") delete ugSubjectMap[k]; });
    Object.keys(ugToCounsellingMap).forEach(function (k) { if (k !== "NIL") delete ugToCounsellingMap[k]; });
    Object.keys(ugToCounsellingSubject).forEach(function (k) { if (k !== "NIL") delete ugToCounsellingSubject[k]; });
    Object.keys(map).forEach(function (q) {
      ugSubjectMap[q] = (map[q].subjects || []).slice();
      ugToCounsellingMap[q] = map[q].cs || "";
      ugToCounsellingSubject[q] = map[q].cs || "";
    });
    syncQualOptions(map);
  }

  async function loadAndApply() {
    var s = await fetchState();
    ui.state = s;
    var saved = null;
    try { saved = await _sbSettingGet(KEY_MAP); } catch (e) {}
    if (saved) applyMap(s.map);      // cloud mein koi badlav save hua ho tabhi override
    return s;
  }

  // Read-modify-write: pehle latest cloud data, phir badlav, phir save (JD ek-doosre ka badlav na mitayein)
  async function mutate(fn, entry) {
    if (!isMgr()) { myAlert("⛔ यह अधिकार केवल DPI और JD को है।"); return false; }
    if (ui.busy) return false;
    ui.busy = true;
    try {
      var s = await fetchState();
      var err = fn(s.map);
      if (err) { myAlert(err); return false; }
      var d = new Date();
      s.log.push({
        iso: d.toISOString(),
        time: d.toLocaleString("en-IN", { hour12: true }),
        user: cu(),
        action: entry.action,
        qual: entry.qual || "",
        detail: entry.detail || ""
      });
      if (s.log.length > 1500) s.log = s.log.slice(-1500);
      var ok1 = await _sbSettingSet(KEY_MAP, s.map);
      var ok2 = ok1 && await _sbSettingSet(KEY_LOG, s.log);
      if (!ok1 || !ok2) { myAlert("❌ Save नहीं हुआ। इंटरनेट जांचकर दोबारा प्रयास करें।"); return false; }
      ui.state = s;
      applyMap(s.map);
      if (typeof computeCounsellingSubjects === "function") { try { computeCounsellingSubjects(); } catch (e) {} }
      return true;
    } finally {
      ui.busy = false;
      render();
    }
  }

  // ───── Actions ─────
  function addSubject(q, name) {
    name = (name || "").trim();
    if (!q) return myAlert("❌ पहले Qualification चुनें।");
    if (!name) return myAlert("❌ Subject का नाम लिखें।");
    return mutate(function (m) {
      if (!m[q]) return "❌ Qualification नहीं मिली।";
      if (m[q].subjects.some(function (x) { return x.toLowerCase() === name.toLowerCase(); })) return "❌ यह Subject पहले से मौजूद है।";
      m[q].subjects.push(name);
    }, { action: "SUBJECT ADD", qual: q, detail: "जोड़ा: " + name });
  }
  function editSubject(q, i, name) {
    name = (name || "").trim();
    if (!name) return myAlert("❌ Subject का नाम खाली नहीं हो सकता।");
    var old = "";
    return mutate(function (m) {
      if (!m[q] || m[q].subjects[i] === undefined) return "❌ Subject नहीं मिला।";
      old = m[q].subjects[i];
      if (m[q].subjects.some(function (x, k) { return k !== i && x.toLowerCase() === name.toLowerCase(); })) return "❌ यह नाम पहले से मौजूद है।";
      m[q].subjects[i] = name;
    }, { action: "SUBJECT EDIT", qual: q, detail: old + " → " + name }).then(function (ok) { if (ok) ui.edit = null; render(); });
  }
  function delSubject(q, i) {
    var old = "";
    return mutate(function (m) {
      if (!m[q] || m[q].subjects[i] === undefined) return "❌ Subject नहीं मिला।";
      old = m[q].subjects[i];
      m[q].subjects.splice(i, 1);
    }, { action: "SUBJECT DELETE", qual: q, detail: "हटाया: " + old });
  }
  function setCS(q, cs) {
    var old = "";
    return mutate(function (m) {
      if (!m[q]) return "❌ Qualification नहीं मिली।";
      old = m[q].cs || "(blank)";
      m[q].cs = cs;
    }, { action: "COUNSELLING MAP", qual: q, detail: "Counselling Subject: " + old + " → " + (cs || "(blank)") });
  }
  function addQual(name, cs) {
    name = (name || "").trim();
    if (!name) return myAlert("❌ Qualification का नाम लिखें।");
    return mutate(function (m) {
      if (name.toUpperCase() === "NIL") return "❌ NIL पहले से है।";
      if (Object.keys(m).some(function (k) { return k.toLowerCase() === name.toLowerCase(); })) return "❌ यह Qualification पहले से मौजूद है।";
      m[name] = { subjects: [], cs: cs || "" };
    }, { action: "QUALIFICATION ADD", qual: name, detail: "नई Qualification जोड़ी (Counselling: " + (cs || "blank") + ")" })
      .then(function (ok) { if (ok) ui.sel = name; render(); });
  }
  function delQual(q) {
    if (!confirm("⚠️ Qualification \"" + q + "\" और उसके सभी Subjects की मैपिंग हटाएं?")) return;
    var cnt = 0;
    return mutate(function (m) {
      if (!m[q]) return "❌ Qualification नहीं मिली।";
      cnt = m[q].subjects.length;
      delete m[q];
    }, { action: "QUALIFICATION DELETE", qual: q, detail: "Qualification हटाई (" + cnt + " subjects)" })
      .then(function (ok) { if (ok) ui.sel = ""; render(); });
  }
  function resetQual(q) {
    if (!BASE[q]) return myAlert("ℹ️ यह नई Qualification है, इसका Default नहीं है।");
    if (!confirm("\"" + q + "\" को original (Default) subjects पर वापस लाएं?")) return;
    return mutate(function (m) { m[q] = clone(BASE[q]); },
      { action: "RESET DEFAULT", qual: q, detail: "Default subject list बहाल की" });
  }

  // ───── UI ─────
  function modal() {
    var m = document.getElementById("ugsModal");
    if (!m) {
      m = document.createElement("div");
      m.id = "ugsModal";
      m.style.cssText = "display:none;position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:100001;align-items:center;justify-content:center;padding:10px;box-sizing:border-box;font-family:'DM Sans','Noto Sans Devanagari',sans-serif;";
      m.addEventListener("click", onClick);
      m.addEventListener("change", onChange);
      document.body.appendChild(m);
    }
    return m;
  }

  function tabBtn(id, label) {
    var a = ui.tab === id;
    return '<button data-act="tab" data-v="' + id + '" style="padding:8px 18px;border:none;cursor:pointer;font-weight:700;font-size:12px;border-radius:5px 5px 0 0;background:' + (a ? "#002e5b" : "#dce8f5") + ";color:" + (a ? "#fff" : "#002e5b") + ';">' + label + "</button>";
  }

  function renderMap() {
    var map = ui.state ? ui.state.map : seedMap();
    var quals = Object.keys(map);
    if (!ui.sel || !map[ui.sel]) ui.sel = quals[0] || "";
    var cur = ui.sel ? map[ui.sel] : null;

    var left = quals.map(function (q) {
      var a = q === ui.sel;
      return '<div data-act="pick" data-q="' + esc(q) + '" style="padding:8px 10px;cursor:pointer;border-bottom:1px solid #e3e8ef;font-size:12px;font-weight:' + (a ? 800 : 600) + ";background:" + (a ? "#dbeafe" : "#fff") + ";color:" + (a ? "#0d47a1" : "#222") + ';display:flex;justify-content:space-between;gap:6px;"><span>' + esc(q) + '</span><span style="color:#888;font-weight:600;">' + map[q].subjects.length + "</span></div>";
    }).join("");

    var right = "";
    if (cur) {
      var rows = cur.subjects.map(function (s, i) {
        var editing = ui.edit && ui.edit.q === ui.sel && ui.edit.i === i;
        var cell = editing
          ? '<input id="ugsEditInp" value="' + esc(s) + '" style="width:100%;padding:5px 8px;border:1.5px solid #1565c0;border-radius:4px;font-size:12px;font-weight:700;box-sizing:border-box;">'
          : '<span style="font-weight:600;">' + esc(s) + "</span>";
        var btns = editing
          ? '<button data-act="saveEdit" data-i="' + i + '" style="' + btn("#2e7d32") + '">✔ Save</button> <button data-act="cancelEdit" style="' + btn("#777") + '">✕</button>'
          : '<button data-act="edit" data-i="' + i + '" style="' + btn("#1565c0") + '">✏️ Edit</button> <button data-act="del" data-i="' + i + '" style="' + btn("#c62828") + '">🗑 Delete</button>';
        return '<tr><td style="padding:6px 8px;border:1px solid #ddd;text-align:center;width:36px;color:#888;">' + (i + 1) + '</td><td style="padding:6px 8px;border:1px solid #ddd;">' + cell + '</td><td style="padding:6px 8px;border:1px solid #ddd;white-space:nowrap;text-align:center;width:170px;">' + btns + "</td></tr>";
      }).join("") || '<tr><td colspan="3" style="padding:16px;text-align:center;color:#999;">इस Qualification में कोई Subject नहीं है।</td></tr>';

      var csOpts = CS_OPTIONS.map(function (o) {
        return '<option value="' + esc(o) + '"' + (o === (cur.cs || "") ? " selected" : "") + ">" + (o || "(blank)") + "</option>";
      }).join("");

      right =
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">' +
          '<div style="font-size:15px;font-weight:800;color:#002e5b;">🎓 ' + esc(ui.sel) + "</div>" +
          '<div style="display:flex;gap:6px;align-items:center;font-size:11px;font-weight:700;color:#333;">Counselling Subject: ' +
            '<select id="ugsCS" data-act="cs" style="padding:5px 8px;border:1.5px solid #90a4ae;border-radius:4px;font-weight:700;">' + csOpts + "</select>" +
            '<button data-act="resetQ" style="' + btn("#6a1b9a") + '">↺ Default</button>' +
            '<button data-act="delQ" style="' + btn("#b71c1c") + '">🗑 Qualification हटाएं</button>' +
          "</div></div>" +
        '<table style="width:100%;border-collapse:collapse;font-size:12px;background:#fff;margin-bottom:10px;"><thead><tr style="background:#002e5b;color:#fff;"><th style="padding:6px;">#</th><th style="padding:6px;text-align:left;">Subject</th><th style="padding:6px;">Action</th></tr></thead><tbody>' + rows + "</tbody></table>" +
        '<div style="display:flex;gap:8px;align-items:center;background:#e8f5e9;border:1px solid #a5d6a7;border-radius:6px;padding:8px;">' +
          '<input id="ugsNewSub" placeholder="नया Subject (जैसे: Statistics)" style="flex:1;padding:7px 10px;border:1.5px solid #81c784;border-radius:4px;font-size:12px;font-weight:700;">' +
          '<button data-act="addSub" style="' + btn("#2e7d32", true) + '">➕ Subject जोड़ें</button></div>';
    } else {
      right = '<div style="padding:30px;text-align:center;color:#999;">कोई Qualification नहीं है।</div>';
    }

    var csNew = CS_OPTIONS.map(function (o) { return '<option value="' + esc(o) + '">' + (o || "Counselling: (blank)") + "</option>"; }).join("");
    return '<div style="display:flex;gap:12px;flex-wrap:wrap;">' +
      '<div style="width:230px;flex-shrink:0;"><div style="border:1.5px solid #002e5b;border-radius:6px;overflow:hidden;max-height:52vh;overflow-y:auto;">' + left + "</div>" +
        '<div style="margin-top:8px;border:1px dashed #1565c0;border-radius:6px;padding:8px;background:#f0f6ff;"><div style="font-size:11px;font-weight:800;color:#0d47a1;margin-bottom:5px;">➕ नई Qualification</div>' +
        '<input id="ugsNewQual" placeholder="नाम (जैसे: M.Sc.)" style="width:100%;padding:6px 8px;border:1.5px solid #90caf9;border-radius:4px;font-size:12px;font-weight:700;box-sizing:border-box;margin-bottom:5px;">' +
        '<select id="ugsNewQualCS" style="width:100%;padding:6px;border:1.5px solid #90caf9;border-radius:4px;font-size:11px;box-sizing:border-box;margin-bottom:5px;">' + csNew + "</select>" +
        '<button data-act="addQ" style="' + btn("#1565c0", true) + 'width:100%;">➕ जोड़ें</button></div></div>' +
      '<div style="flex:1;min-width:300px;">' + right + "</div></div>";
  }

  function renderHistory() {
    var log = (ui.state && ui.state.log) || [];
    var users = {};
    log.forEach(function (e) { users[e.user] = 1; });
    var f = ui.filterUser;
    var rows = log.slice().reverse().filter(function (e) { return !f || e.user === f; });
    var opts = '<option value="">सभी Users</option>' + Object.keys(users).sort().map(function (u) {
      return '<option value="' + esc(u) + '"' + (u === f ? " selected" : "") + ">" + esc(u) + "</option>";
    }).join("");
    var colors = { "SUBJECT ADD": "#2e7d32", "SUBJECT EDIT": "#1565c0", "SUBJECT DELETE": "#c62828", "QUALIFICATION ADD": "#2e7d32", "QUALIFICATION DELETE": "#c62828", "COUNSELLING MAP": "#6a1b9a", "RESET DEFAULT": "#e65100" };
    var body = rows.map(function (e, i) {
      return '<tr style="background:' + (i % 2 ? "#fafcff" : "#fff") + ';"><td style="padding:6px 8px;border:1px solid #ddd;white-space:nowrap;color:#555;">' + esc(e.time) + '</td><td style="padding:6px 8px;border:1px solid #ddd;font-weight:800;color:#1b5e20;white-space:nowrap;">' + esc(e.user) + '</td><td style="padding:6px 8px;border:1px solid #ddd;"><span style="background:' + (colors[e.action] || "#455a64") + ';color:#fff;padding:2px 7px;border-radius:10px;font-size:10px;font-weight:700;white-space:nowrap;">' + esc(e.action) + '</span></td><td style="padding:6px 8px;border:1px solid #ddd;font-weight:700;">' + esc(e.qual) + '</td><td style="padding:6px 8px;border:1px solid #ddd;">' + esc(e.detail) + "</td></tr>";
    }).join("") || '<tr><td colspan="5" style="padding:20px;text-align:center;color:#999;">अभी कोई बदलाव दर्ज नहीं है।</td></tr>';
    return '<div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;font-size:12px;font-weight:700;">User:<select data-act="fuser" style="padding:5px 8px;border:1.5px solid #90a4ae;border-radius:4px;">' + opts + '</select><span style="color:#777;font-weight:600;">कुल: ' + rows.length + "</span></div>" +
      '<div style="max-height:56vh;overflow:auto;border:1.5px solid #002e5b;border-radius:6px;"><table style="width:100%;border-collapse:collapse;font-size:11.5px;"><thead style="position:sticky;top:0;"><tr style="background:#002e5b;color:#fff;"><th style="padding:7px;">दिनांक / समय</th><th style="padding:7px;">किसने (User)</th><th style="padding:7px;">Action</th><th style="padding:7px;">Qualification</th><th style="padding:7px;text-align:left;">विवरण</th></tr></thead><tbody>' + body + "</tbody></table></div>";
  }

  function btn(bg, big) {
    return "background:" + bg + ";color:#fff;border:none;border-radius:4px;padding:" + (big ? "7px 14px" : "4px 9px") + ";font-size:11px;font-weight:700;cursor:pointer;";
  }

  function render() {
    var m = modal();
    if (m.style.display === "none") return;
    if (ui.tab === "hist" && !isDpi()) ui.tab = "map";
    m.innerHTML =
      '<div style="background:#fff;border-radius:10px;border:2px solid #002e5b;width:96%;max-width:980px;max-height:94vh;display:flex;flex-direction:column;box-shadow:0 16px 48px rgba(0,0,0,.5);overflow:hidden;">' +
        '<div style="background:linear-gradient(135deg,#002e5b,#1a4a8a);color:#fff;padding:12px 18px;display:flex;justify-content:space-between;align-items:center;">' +
          '<div><div style="font-size:16px;font-weight:800;">📚 UG Qualification — Subject Mapping</div><div style="font-size:10px;opacity:.8;">' + (isDpi() ? "DPI" : cu()) + " | हर बदलाव दिनांक सहित DPI को दिखेगा</div></div>" +
          '<button data-act="close" style="background:rgba(255,255,255,.2);border:none;color:#fff;width:30px;height:30px;border-radius:50%;font-size:16px;cursor:pointer;font-weight:bold;">✕</button></div>' +
        '<div style="display:flex;gap:4px;padding:8px 14px 0;background:#f0f4f8;border-bottom:2px solid #002e5b;">' + tabBtn("map", "🗂️ Mapping Table") + (isDpi() ? tabBtn("hist", "🕘 History (JD/DPI Changes)") : "") + "</div>" +
        '<div style="padding:14px;overflow:auto;flex:1;position:relative;' + (ui.busy ? "opacity:.55;pointer-events:none;" : "") + '">' + (ui.tab === "hist" ? renderHistory() : renderMap()) + "</div>" +
      "</div>";
    var inp = document.getElementById("ugsEditInp");
    if (inp) { inp.focus(); inp.select(); }
  }

  function onClick(ev) {
    var t = ev.target.closest("[data-act]");
    if (!t) { if (ev.target === modal()) closeModal(); return; }
    var act = t.getAttribute("data-act");
    var i = parseInt(t.getAttribute("data-i"), 10);
    if (act === "close") return closeModal();
    if (act === "tab") { ui.tab = t.getAttribute("data-v"); if (ui.tab === "hist") { refresh(); } return render(); }
    if (act === "pick") { ui.sel = t.getAttribute("data-q"); ui.edit = null; return render(); }
    if (act === "edit") { ui.edit = { q: ui.sel, i: i }; return render(); }
    if (act === "cancelEdit") { ui.edit = null; return render(); }
    if (act === "saveEdit") return editSubject(ui.sel, i, (document.getElementById("ugsEditInp") || {}).value);
    if (act === "del") {
      var nm = ui.state.map[ui.sel].subjects[i];
      if (!confirm("Subject \"" + nm + "\" को " + ui.sel + " से हटाएं?")) return;
      return delSubject(ui.sel, i);
    }
    if (act === "addSub") {
      var el = document.getElementById("ugsNewSub");
      return addSubject(ui.sel, el && el.value);
    }
    if (act === "addQ") {
      return addQual((document.getElementById("ugsNewQual") || {}).value, (document.getElementById("ugsNewQualCS") || {}).value);
    }
    if (act === "delQ") return delQual(ui.sel);
    if (act === "resetQ") return resetQual(ui.sel);
  }
  function onChange(ev) {
    var t = ev.target;
    var act = t.getAttribute && t.getAttribute("data-act");
    if (act === "cs") return setCS(ui.sel, t.value);
    if (act === "fuser") { ui.filterUser = t.value; render(); }
  }

  async function refresh() {
    ui.state = await fetchState();
    render();
  }

  function openModal() {
    if (!isMgr()) { myAlert("⛔ यह सुविधा केवल DPI और JD के लिए है।"); return; }
    var m = modal();
    m.style.display = "flex";
    ui.tab = "map"; ui.edit = null; ui.filterUser = "";
    ui.state = ui.state || { map: seedMap(), log: [] };
    render();
    refresh();
  }
  function closeModal() { var m = document.getElementById("ugsModal"); if (m) m.style.display = "none"; }
  window.openUgSubjectManager = openModal;

  // Toolbar (OTHER TOOLBAR menu) mein button — sirf JD/DPI ko dikhe
  function ensureButton() {
    var menu = document.getElementById("otherToolbarMenu");
    if (!menu) return;
    var b = document.getElementById("ugsMenuBtn");
    if (!b) {
      var hdr = document.createElement("div");
      hdr.id = "ugsMenuHdr";
      hdr.style.cssText = "padding:4px 14px 6px;font-size:10px;font-weight:700;color:#888;text-transform:uppercase;border-bottom:1px solid #eee;margin:6px 0 4px;";
      hdr.textContent = "SUBJECT MANAGEMENT";
      b = document.createElement("button");
      b.id = "ugsMenuBtn";
      b.className = "otb-item";
      b.style.cssText = "color:#0d47a1;font-weight:700;";
      b.textContent = "📚 SUBJECT MAPPING";
      b.onclick = function () { openModal(); if (typeof closeOtherToolbar === "function") closeOtherToolbar(); };
      menu.insertBefore(b, menu.firstChild);
      menu.insertBefore(hdr, b);
    }
    var show = isMgr() ? "" : "none";
    b.style.display = show;
    document.getElementById("ugsMenuHdr").style.display = show;
  }

  // Login ke baad (sabhi users ke liye) saved mapping load karo, taaki dropdown sahi bane
  var loadedFor = null;
  setInterval(function () {
    ensureButton();
    var u = window.currentUser || null;
    if (u && u !== loadedFor) {
      loadedFor = u;
      loadAndApply().catch(function () {});
    }
    if (!u) loadedFor = null;
  }, 600);
})();
