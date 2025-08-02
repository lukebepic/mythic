// Basic service worker for PWA offline support
const CACHE_NAME = "shopify-theme-cache-v1";
const urlsToCache = ["/", "/collections", "/products"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});