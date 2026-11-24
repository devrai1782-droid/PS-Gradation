// PS Gradation ERP Service Worker
// Har deploy par CACHE_NAME ka number badlo (v2 -> v3 -> v4) taaki users ko "Update available" banner dikhe.
const CACHE_NAME = 'ps-gradation-v9';

self.addEventListener('install', function(e) { self.skipWaiting(); });
self.addEventListener('activate', function(e) {
  // purane caches saaf karo, phir turant control lo
  e.waitUntil(
    caches.keys()
      .then(function(keys) { return Promise.all(keys.map(function(k) { return caches.delete(k); })); })
      .then(function() { return clients.claim(); })
  );
});

// Network first for same-origin GET only. Cross-origin (Worker API, fonts, CDN) and
// non-GET (POST/upload/websocket) go straight to the browser - SW never touches them.
// cache:'no-cache' = browser HTTP cache ko bypass karke server se revalidate karta hai,
// isliye kisi bhi device pe purani app.js/index.html atakti nahi.
self.addEventListener('fetch', function(e) {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).catch(function() {
      return caches.match(req).then(function(r) {
        return r || new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
