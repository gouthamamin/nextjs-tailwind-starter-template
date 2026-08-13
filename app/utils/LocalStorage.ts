const isBrowser = typeof window !== "undefined";

class LocalStorage {

  static get<T>(key: string): T | null {
    if (!isBrowser) return null;
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };

  static set<T>(key: string, value: T): void {
    if (!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value));
  };

};

export default LocalStorage;
