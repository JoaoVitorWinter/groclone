var cacheGroclone = 'groclone-v1';

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/assets/iconFeature1.png",
    "/assets/favicon.ico"
]


self.addEventListener('install', function (event) {

  event.waitUntil(

    caches.open(cacheGroclone).then(function (cache) {

      return cache.addAll(assets);

    })

  )

});




self.addEventListener('activate', function activator(event) {

  event.waitUntil(

    caches.keys().then(function (keys) {

      return Promise.all(keys

        .filter(function (key) {

          return key.indexOf(cacheGroclone) !== 0;

        })

        .map(function (key) {

          return caches.delete(key);

        })

      );

    })

  );

});




self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (cachedResponse) {

      return cachedResponse || fetch(event.request);

    })

  );

});