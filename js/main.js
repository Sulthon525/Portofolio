document.addEventListener('DOMContentLoaded', function () {
  const tombol = document.getElementById('tombol');
  const tokenElement = document.getElementById('token');
  const judul = document.getElementById('judul');
  const pesan = document.getElementById('pesan');

  // Konfigurasi Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAFwnO0h1O0N6FDr7eW5jMNx3pyhatBejM",
    authDomain: "penggunaan-fcm-untuk-push-notif.firebaseapp.com",
    projectId: "penggunaan-fcm-untuk-push-notif",
    storageBucket: "penggunaan-fcm-untuk-push-notif.appspot.com",
    messagingSenderId: "764382201991",
    appId: "1:764382201991:web:095ac050a8132d9d2a9022",
    measurementId: "G-W47W4ZV16G"
  };

  // Inisialisasi Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  // Saat Tombol Allow Notification di klik
  tombol.onclick = function () {
    // Request notification permission
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        // Permission granted, proceed to get token
        messaging.getToken({ vapidKey: 'BGk3UjPm4dExAeIFxUiuT1rKWsCuw-Qw-CSjs46Lt2BSnAajZgxszORZ_GkZPiP8iXM8JB-Aa0L3p_TZ8vqRlWU' })
          .then((currentToken) => {
            if (currentToken) {
              // jika Tokennya ada atau benar
              tokenElement.innerHTML = 'Token : ' + currentToken;
              console.log(currentToken);
            } else {
              // jika tokennya tidak ada
              console.log('No registration token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            // Untuk menangani jika gagal
            console.log('An error occurred while retrieving token. ', err);
          });
      } else {
        // Permission denied
        console.log('Permission denied for notifications');
      }
    });
  };

  // Untuk menerima pesan saat aplikasi dibuka atau sedang aktif
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    const { title, ...options } = payload.notification;
    judul.innerHTML = 'Judul Pesan : ' + title;
    pesan.innerHTML = 'Isi Pesan : ' + options.body;
  });
});
