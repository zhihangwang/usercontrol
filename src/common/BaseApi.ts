export const Write = (key: string, data: any) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const Read = (key: string): any => {
  return JSON.parse(window.localStorage.getItem(key)??"");
};
