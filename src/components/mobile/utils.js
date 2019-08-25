const DATA_KEY = 'INTERHACK_LOCAL_STORAGE_DATA'

export const setData = (data) => localStorage.setItem(DATA_KEY, JSON.stringify(data));
export const getData = () => {
  const data = localStorage.getItem(DATA_KEY);
  if (data) return JSON.parse(data);
  return null;
}
export const clearData = () => localStorage.setItem(DATA_KEY, null);
