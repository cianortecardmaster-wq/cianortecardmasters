const CCM_CACHE = 'ccm-pwa-v2026-06-02-atividades-md-03';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/manifest-armory.webmanifest',
  '/manifest-editor-autores.webmanifest',
  '/admin/gerador-armory.html',
  '/admin/editor-autores.html',
  '/ferramentas/',
  '/atividades/',
  '/assets/css/styles.min.css',
  '/assets/js/site.min.js',
  '/assets/img/pwa/site/icon-192.png',
  '/assets/img/pwa/site/icon-512.png',
  '/assets/img/pwa/armory/icon-192.png',
  '/assets/img/pwa/armory/icon-512.png',
  '/assets/img/pwa/editor/icon-192.png',
  '/assets/img/pwa/editor/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CCM_CACHE)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CCM_CACHE).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CCM_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
    );
    return;
  }

  const isStaticAsset = /\.(?:css|js|png|jpg|jpeg|webp|svg|ico|json|webmanifest|woff2?)$/i.test(url.pathname);

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CCM_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        }).catch(() => cached);

        return cached || networkFetch;
      })
    );
  }
});
