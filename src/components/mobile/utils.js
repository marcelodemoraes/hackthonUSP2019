const DATA_KEY = 'INTERHACK_LOCAL_STORAGE_DATA'
const LOGIN_DATA_KEY = 'INTERHACK_LOCAL_STORAGE_DATA_LOGIN'

export const setData = (data) => localStorage.setItem(DATA_KEY, JSON.stringify(data));

export const getData = () => {
  const data = localStorage.getItem(DATA_KEY);
  if (data) return JSON.parse(data);
  return null;
}

export const login = () => localStorage.setItem(LOGIN_DATA_KEY, 'true');

export const isLoggedIn = () => {
  const data = localStorage.getItem(LOGIN_DATA_KEY);
  return data === 'true';
}

export const logout = () => localStorage.setItem(LOGIN_DATA_KEY, null);

export const clearData = () => localStorage.setItem(DATA_KEY, null);
