const dbName = "perfume";
const dbVersion = 3

export function getAllProducts() {
  // Open a connection to the IndexedDB database
  return new Promise((resolve, reject) => {
  const request = indexedDB.open(dbName, dbVersion);
  let db = null;

  request.onsuccess = (event: any) => {
    db = event.target.result;

    // Now that the database is open, handle transactions
    const transaction = db.transaction(["products"], "readonly");
    const objectStore = transaction.objectStore("products");

    const request = objectStore.getAll();


    request.onsuccess = (event: any) => {
      const products = event.target.result;
      resolve(products); 
    };

    request.onerror = (event: any) => {
      console.error("Error getting all products:", event.target.error);
    };
  };

  request.onerror = (event: any) => {
    console.error("Error opening IndexedDB:", reject(event.target.error));
  };
  })
}
