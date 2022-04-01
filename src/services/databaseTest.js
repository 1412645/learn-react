class DatabaseTestProvider {
  constructor() {
    this.db = {};
    this.dbName = 'demo';
    this.dbVersion = 1;
    this.stores = { DEMO: 'demo' };
    this.request = null;
  }
  init = () => {
    return new Promise((resolve, reject) => {
      this.request = window.indexedDB.open(this.dbName, this.dbVersion);

      this.request.onupgradeneeded = () => {
        this.db = this.request.result;
        this.createObjectStore();
      };

      this.request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve();
      };

      this.request.onerror = (error) => {
        console.log('error: ', error);
      };
    });
  };

  createObjectStore = () => {
    const storeConfig = { keyPath: 'id', autoIncrement: true };
    const objectStore = this.db.createObjectStore(
      this.stores.DEMO,
      storeConfig
    );
    objectStore.createIndex('name', 'name');
  };

  getDemosObjectStore = () => {
    const transaction = this.db.transaction([this.stores.DEMO], 'readwrite');
    console.log('transaction: ', transaction);
    transaction.onerror = (error) => {
      console.error('There was a transaction error', { error });
    };
    return transaction.objectStore(this.stores.DEMO);
  };

  getAll = () => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getDemosObjectStore();
      const openCursor = objectStore.openCursor();
      const items = [];

      console.log('objectStore: ', objectStore);

      openCursor.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        } else {
          resolve(items);
        }
      };

      openCursor.onerror = (error) => {
        console.log('error: ', error);
      };
    });
  };

  add = (text) => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getDemosObjectStore();
      const addRequest = objectStore.put({ name: text });
      addRequest.onsuccess = async () => {
        const allDemos = await this.getAll();
        resolve(allDemos);
      };

      addRequest.onerror = (error) => {
        console.log('error: ', error);
      };
    });
  };

  deleteById = (id) => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getDemosObjectStore();
      const deleting = objectStore.delete(id);

      deleting.onsuccess = async () => {
        const allDemos = await this.getAll();
        resolve(allDemos);
      };

      deleting.onerror = (error) => {
        console.log('error: ', error);
      };
    });
  };

  clearAll = () => {
    const objectStore = this.getDemosObjectStore();
    const clearStore = objectStore.clear();
    clearStore.onsuccess = (event) => {
      console.log('clear success: ', event);
    };

    clearStore.onerror = (error) => {
      console.log('error: ', error);
    };
  };
}

export const DatabaseTestService = new DatabaseTestProvider();
