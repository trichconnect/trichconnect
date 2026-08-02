const CACHE_NAME = "trichconnect-v1";
const ASSETS_TO_CACHE = [
  "../index.html",
  "../css/style.css",
  "../js/app.js"
];

// Save files to phone storage when installed
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});