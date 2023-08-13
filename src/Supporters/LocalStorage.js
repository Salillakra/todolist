// Supporters/LocalStorage.js

export function setLocalStorage(id, value) {
  localStorage.setItem(`todo_${id}`, JSON.stringify(value));
}

export function getLocalStorage() {
  const items = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith("todo_")) {
      const value = localStorage.getItem(key);
      if (value !== undefined && value !== null) {
        try {
          const parsedValue = JSON.parse(value);
          items.push(parsedValue);
        } catch (error) {
          console.error(`Error parsing JSON for key: ${key}`, error);
        }
      }
    }
  }
  return items;
}

export const CheckedStateUpdater = (id, check) => {
  let checkedUpdate = JSON.parse(localStorage.getItem(`todo_${id}`));
  checkedUpdate.checked = check;
  setLocalStorage(id, checkedUpdate);
};

export const getCheckedState = (id) => {
  const state = JSON.parse(localStorage.getItem(`todo_${id}`));
  return state.checked;
};
