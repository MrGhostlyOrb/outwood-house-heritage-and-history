// Simple service worker for caching the app's assets
// Language: javascript
// Path: public/js/serviceWorker.js


// This is the service worker with the Cache-first network
// strategy:


let cacheName = 'cache-v1';
let filesToCache = [
    '/index.html',
    '/css/style.css',
    '/images/logo.webp',
    '/images/favicon.ico',
    '/images/outwood.webp',
    '/manifest.json',
    'images/CDF.webp',
    '/images/CDF.png',
    'images/HLF.webp',
    '/images/HLF.png',
    'images/icons/icon-16.png',
    'images/icons/icon-32.png',
    'images/icons/icon-36.png',
    'images/icons/icon-48.png',
    'images/icons/icon-72.png',
    'images/icons/icon-96.png',
    'images/icons/icon-128.png',
    'images/icons/icon-144.png',
    'images/icons/icon-152.png',
    'images/icons/icon-168.png',
    'images/icons/icon-192.png',
    'images/icons/icon-256.png',
    'images/icons/icon-512.png',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        }
    ));
});
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('cache-') &&
                        cacheName !== cacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                }));
        })
    );
});
