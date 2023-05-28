const setLocalStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageItem = (key: string) => {
  const value = localStorage.getItem(key);
  console.log('getLocalStorageItem', value);
  if (value) {
    return JSON.parse(value);
  } else return '';
};

export { setLocalStorageItem, getLocalStorageItem };
