registerSW();

// Fungsi untuk mendaftarkan service worker
async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("sw.js");       
      showResult("Service Worker berhasil didaftarkan.");
    } catch (error) {
      showResult("Error saat registrasi: " + error.message);
    }    
  } else {
    showResult("Service Worker tidak didukung pada browser ini.");
  }
}

// Fungsi untuk menampilkan hasil status ke elemen <output>
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}
