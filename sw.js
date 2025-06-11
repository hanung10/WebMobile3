// Event saat service worker diinstal pertama kali
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // Simpan file statis ke cache untuk digunakan offline
  cache.addAll([
    "/", 
    "app.js", 
    "index.html",
    "pendaftaran.html",
    "style.css", 
    "img/kampus.png"
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
