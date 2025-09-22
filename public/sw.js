// Service Worker para EMT Exam PWA
// Este archivo permite que la aplicación funcione offline

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('emtexam-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/estrella-de-la-vida.png',
                '/src/main.tsx',
                '/src/App.tsx',
                '/src/index.css',
                '/src/App.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                return caches.open('emtexam-v1').then((cache) => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(() => {
            // Si tanto la caché como la red fallan, mostrar una página offline
            return caches.match('/');
        })
    );
});

// Actualiza la caché cuando hay una nueva versión del service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['emtexam-v1'];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
