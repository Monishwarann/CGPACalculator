const CACHE_NAME = "msec-cgpa-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
