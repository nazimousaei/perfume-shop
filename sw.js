self.addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("SERVICEWORKER installed");
});

self.addEventListener("activate", (event) => {
  console.log("SERVICEWORKER activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
