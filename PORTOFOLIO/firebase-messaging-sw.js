importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAFwnO0h1O0N6FDr7eW5jMNx3pyhatBejM",
  authDomain: "pengguaan-fcm-untuk-push-notif.firebaseapp.com",
  projectId: "pengguaan-fcm-untuk-push-notif",
  storageBucket: "pengguaan-fcm-untuk-push-notif.appspot.com",
  messagingSenderId: "764382201991",
  appId: "1:764382201991:web:095ac050a8132d9d2a9022",
  measurementId: "G-W47W4ZV16G"
});

// Inisialisasi Firebase Cloud Messaging dan dapatkan referensi ke layanan tersebut
const messaging = firebase.messaging();

