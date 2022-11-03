import storage from './localStorage';

const saveToStorage = (key, data) => {
  let storageData = storage.get(key);
  storageData = {
    ...storageData,
    ...data,
  };
  storage.save(key, storageData);
};

const saveArrayItemToStorage = (key, item) => {
  let storageData = storage.get(key) || [];
  storageData = [...storageData, item];
  storage.save(key, storageData);
};

const deleteArrayItemFromStorage = (key, item) => {
  let storageData = storage.get(key);
  storageData = storageData.filter(data => data !== item);
  storage.save(key, storageData);
};

export { saveToStorage, saveArrayItemToStorage, deleteArrayItemFromStorage };
