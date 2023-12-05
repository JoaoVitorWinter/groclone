const cacheGroclone = "groclone-v1"

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/assets/iconFeature1.png",
    "/assets/favicon.ico"
]

self.addEventListener("install", installEvent => {
    console.log("entrou install")
    installEvent.waitUntil(
        caches.open(cacheGroclone).then(cache => {
            cache.addAll(assets)
        })
    )
    console.log("saiu install")
})

self.addEventListener("fetch", fetchEvent => {
    console.log("entrou fetch")
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
    console.log("saiu fetch")
})