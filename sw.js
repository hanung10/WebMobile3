// Event saat service worker diinstal pertama kali
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // Simpan file statis ke cache untuk digunakan offline
  cache.addAll([
    "/", 
    "index.html",
    "pendaftaran.html",
    "app.js", 
    "style.css", 
    "img/kampus.png", 
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
  ]);
});

// Event saat browser mencoba fetch resource (online/offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Jika ditemukan di cache, tampilkan dari cache. Jika tidak, ambil dari jaringan.
      return cachedResponse || fetch(event.request);
    })
  );
});
