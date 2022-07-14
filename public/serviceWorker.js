// Simple service worker for caching the app's assets
// Language: javascript
// Path: public/js/serviceWorker.js


// This is the service worker with the Cache-first network
// strategy:


let cacheName = 'cache-v1';
let filesToCache = [
    'index.html',
    'about.html',
    'contact.html',
    'thestoryofoutwood.html',
    'historyof.html',
    'phasetwo.html',
    'css/style.css',
    'images/logo.webp',
    'images/favicon.ico',
    'images/outwood.webp',
    'manifest.json',
    'images/CDF.webp',
    'images/HLF.webp',
    'images/icons/icon-16.png',
    'images/icons/icon-32.png',
    'images/icons/icon-36.png',
    'images/icons/icon-48.png',
    'images/icons/icon-72.png',
    'images/icons/icon-76.png',
    'images/icons/icon-96.png',
    'images/icons/icon-128.png',
    'images/icons/icon-144.png',
    'images/icons/icon-152.png',
    'images/icons/icon-168.png',
    'images/icons/icon-192.png',
    'images/icons/icon-256.png',
    'images/icons/icon-512.png',
    'videos/virtual_tour_compressed.mp4',
    'images/features/IMG_0842.JPG',
    'images/features/IMG_0857.JPG',
    'images/features/IMG_0972.JPG',
    'images/features/IMG_0987.JPG',
    'images/features/IMG_1091.JPG',
    'images/features/IMG_1092.JPG',
    'images/phase_two/1.jpg',
    'images/phase_two/2.jpg',
    'images/phase_two/3.jpg',
    'images/phase_two/4.jpg',
    'images/phase_two/5.jpg',
    'images/phase_two/6.jpg',
    'images/phase_two/7.jpg',
    'images/phase_two/8.jpg',
    'images/phase_two/9.jpg',
    'images/phase_two/10.jpg',
    'images/phase_two/11.jpg',
    'images/phase_two/12.jpg',
    'images/phase_two/13.jpg',
    'images/phase_two/14.jpg',
    'images/phase_two/15.jpg',
    'images/phase_two/16.jpg',
    'images/phase_two/17.jpg',
    'images/phase_two/18.jpg',
    'images/phase_two/21.jpg',
    'images/phase_two/22.jpg',
    'images/phase_two/23.jpg',
    'images/phase_two/24.jpg',
    'images/phase_two/25.jpg',
    'images/phase_two/26.jpg',
    'images/phase_two/27.jpg',
    'images/phase_two/28.jpg',
    'images/phase_two/29.jpg',
    'images/phase_two/34.jpg',
    'images/phase_two/35.jpg',
    'images/phase_two/36.jpg',
    'images/phase_two/37.jpg'
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
