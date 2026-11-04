// Uygulama dosyalarını önbelleğe alır; harita, rota ve arama verisi her zaman internetten gelir.
const CACHE = "omniflow-v9";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png",
  "./lib/maplibre-gl.js", "./lib/maplibre-gl.css"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;          // dış servislere dokunma
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(e.request, c)); }
    return r;
  }).catch(() => caches.match(e.request)));
});
