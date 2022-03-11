const CACHE_ELEMENTS = [
    "./",
    "https://unpkg.com/jquery@3.6.0/dist/jquery.js",
    "./bootstrap-5/js/bootstrap.js",
    "./bootstrap-5/css/bootstrap.css",
    "./fontawesome-free-6.0.0/css/fontawesome.css",
    "./fontawesome-free-6.0.0/js/fontawesome.js",
    "./js/todo.js"
]

const CACHE_NAME = "v1_cache_contador_react"

self.addEventListener("install", (e) => {

    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then( () =>{
                self.skipWaiting()
            }).catch(console.log)
        })
    )
});

self-addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then( (res) => {
            if(res){
                return res;
            }

            return fetch(e.request);
        })
    );
});