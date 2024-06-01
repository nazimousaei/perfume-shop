const dbName = "perfume";
const dbVersion = 3;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  console.log("SERVICEWORKER installed");
});

self.addEventListener("activate", (event) => {
  console.log("SERVICEWORKER activated");
});

self.addEventListener("fetch", (event) => {
  const urls = ["https://db-perfume.liara.run/products?_start=15&_end=25"];

  if (urls.includes(event.request.url)) {
    return event.respondWith(
      fetch(event.request).then((response) => {
        const responseClone = response.clone();
        responseClone.json().then((data) => {
          const requestD = indexedDB.open(dbName, dbVersion);

          requestD.onupgradeneeded = (e) => {
            
            const db = e.target.result;
            // Create an object store if it doesn't already exist
            if (!db.objectStoreNames.contains("products")) {
              db.createObjectStore("products");
            }
          };

          requestD.onsuccess = (e) => {
            const db = e.target.result;
            const transaction = db.transaction("products", "readwrite");
            const store = transaction.objectStore("products");

            // Check if each product already exists before adding
            const existingKeys = new Set();
            const request = store.openCursor();
            request.onsuccess = (event) => {
              const cursor = event.target.result;
              if (cursor) {
                existingKeys.add(cursor.key);
                cursor.continue();
              }
            };

            for (const product of data) {
              if (!existingKeys.has(product.id)) {
                store.put(product, product.id);
              }
            }
          };
          requestD.onerror = (e) => {
            console.error("IndexedDB error:", e.target.error);
          };
        });
        return response;
      })
    );
  } else {
    return event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
    );
  }
});

self.addEventListener("notificationclick", (event) => {
  const action = event.action;
  const notif = event.notification;

  if (action === "confirm") {
    console.log("ok");
  } else if (action === "deny") {
    console.log("deny");
  } else {
    console.log("err");
  }

  notif.close();
});
