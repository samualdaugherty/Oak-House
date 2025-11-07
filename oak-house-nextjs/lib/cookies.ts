import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string, options?: { expires?: number; secure?: boolean }) => {
  Cookies.set(name, value, options);
};

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

export const hasGuideCookie = (): boolean => {
  return getCookie('hasGuide') === 'yes';
};

export const hasHideTempCookie = (): boolean => {
  return getCookie('hidetemp') === 'yes';
};

