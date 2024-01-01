const CACHE_NAME = 'sulthon-portfolio-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/js/custom.js',
  '/js/jquery-3.5.1.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.min.js',
  '/js/jquery.easing.min.js',
  '/js/jquery.waypoints.min.js',
  '/js/jquery.counterup.min.js',
  '/js/jquery.fancybox.min.js',
  '/js/contact.js',
  '/js/wow.min.js',
  '/js/morphext.min.js',
  '/js/parallax.min.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/typed.js',
  '/js/main.js',
  '/firebase-messaging-sw.js',

  '/css/style.css',
  '/css/all.min.css',
  '/css/animate.css',
  '/css/jquery.fancybox.css',
  '/css/magnific-popup.css',
  '/css/slick.css',
  '/css/bootstrap.css',
  '/css/bootstrap.css.map',
  '/css/bootstrap.min.css',
  '/css/bootstrap.min.css.map',
  '/css/bootstrap-reboot.min.css.map',
  '/css/bootstrap-reboot.min.css',
  '/css/bootstrap-reboot.css',
  '/css/bootstrap-reboot.css.map',
  '/css/bootstrap-grid.min.css.map',
  '/css/bootstrap-grid.min.css',
  '/css/bootstrap-grid.css',
  '/css/bootstrap-grid.css.map',

  '/fonts/Simple-Line-Iconsb26c.eot',
  '/fonts/Simple-Line-Iconsb26c.svg',
  '/fonts/Simple-Line-Iconsb26c.html',
  '/fonts/Simple-Line-Iconsb26c.ttf',
  '/fonts/Simple-Line-Iconsb26c.woff',
  '/fonts/slick.eot',
  '/fonts/slick.svg',
  '/fonts/slick.ttf',
  '/fonts/slick.woff',
  '/fonts/slickd41d.eot',

  '/images/ajax-loader.gif',
  '/images/dots-bg-light.svg',
  '/images/dots-bg.svg',
  '/images/logoku.svg',
  '/images/logoku192.jpg',
  '/images/logoku512.jpg',
  '/images/map-light.png',
  '/images/map.svg',
  '/images/notif.svg',
  '/images/profile.webp',

  '/webfonts/fa-brands-400.eot',
  '/webfonts/fa-brands-400.html',
  '/webfonts/fa-brands-400.svg',
  '/webfonts/fa-brands-400.ttf',
  '/webfonts/fa-brands-400.woff',
  '/webfonts/fa-brands-400d41d.eot',
  '/webfonts/fa-regular-400.eot',
  '/webfonts/fa-regular-400.html',
  '/webfonts/fa-regular-400.svg',
  '/webfonts/fa-regular-400.ttf',
  '/webfonts/fa-regular-400.woff',
  '/webfonts/fa-regular-400d41d.eot',
  '/webfonts/fa-solid-900.eot',
  '/webfonts/fa-solid-900.html',
  '/webfonts/fa-solid-900.svg',
  '/webfonts/fa-solid-900.ttf',
  '/webfonts/fa-solid-900.woff',
  '/webfonts/fa-solid-900d41d.eot',

];

//permintaan fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request)
          .catch(() => {
            return caches.match('/offline.html');
          });
      })
  );
});

//saat offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Menggunakan sumber dari cache jika tersedia, jika tidak, ambil dari jaringan
        return response || fetch(event.request)
          .catch(() => {
            // Tampilkan halaman offline jika tidak ada sumber dari cache dan jaringan tidak tersedia
            return caches.match('/offline.html');
          });
      })
  );
});

// untuk install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

//Event activate dapat digunakan untuk membersihkan cache lama 
//saat ada versi baru dari service worker yang diinstal.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});




