// Signature 1: Function returning T | null
export function getStorageItem<T>(key: string): T | null;
// Signature 2: Function returning T
export function getStorageItem<T>(key: string, defaultValue: T): T;
// Implementation
export function getStorageItem<T>(key: string, defaultValue?: T): T | null {
  if (typeof window === "undefined") {
    return defaultValue ? defaultValue : null;
  }

  const data = window.localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : defaultValue ? defaultValue : null;
}

/**
 * When passed a key name and value, will add that key to localStorage,
 * or update that key's value if it already exists.
 *
 * @param {string} key - The name of the key you want to create/update
 * @param {unknown} value - The value you want to give the key you are creating/updating
 */
export function setStorageItem(key: string, value: unknown) {
  if (typeof window === "undefined") {
    return;
  }

  const data = JSON.stringify(value);
  window.localStorage.setItem(key, data);
}

/**
 * When passed a key name, will remove that key to localStorage.
 *
 * @param {string} key - The name of the key you want to remove
 */
export function removeStorageItem(key: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(key);
}
