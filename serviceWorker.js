var cacheGroclone = 'groclone-v1';

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/assets/avatar1.png",
    "/assets/avatar2.png",
    "/assets/check.png",
    "/assets/citacaoAspas.png",
    "/assets/estrelaAvaliacao.png",
    "/assets/facebook.png",
    "/assets/iconFeature1.png",
    "/assets/iconFeature2.png",
    "/assets/iconFeature3.png",
    "/assets/iconFeature4.png",
    "/assets/iconFeature5.png",
    "/assets/iconFeature6.png",
    "/assets/instagram.png",
    "/assets/interface1.png",
    "/assets/interface2.png",
    "/assets/tresLinhas.png",
    "/assets/twitter.png",
    "/assets/favicon.ico"
]


self.addEventListener('install', function (event) {

  event.waitUntil(

    caches.open(cacheGroclone).then(function (cache) {

      return cache.addAll(assets);

    })

  )

});


self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (cachedResponse) {

      return cachedResponse || fetch(event.request);

    })

  );

});