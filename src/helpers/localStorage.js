const storeLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const clearLocalStorage = () => localStorage.clear();

export { storeLocalStorage, getLocalStorage, clearLocalStorage };