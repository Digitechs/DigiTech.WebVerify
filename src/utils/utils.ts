import { ObjStringT } from '@/models/base';
import { parse } from 'querystring';
import store from 'store';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getStateFromStore = (key: string) => {
  if (!key) return null;
  const data = store.get(key);
  if (!data || typeof data !== 'string') return data;
  try {
    const _parsedData = JSON.parse(data);
    return _parsedData;
  } catch (error) {
    return data;
  }
};

export const UrlFormat = (baseUrl: string, path?: string, query?: ObjStringT<string>) => {
  try
  {
      let result: string = '';
      if (baseUrl == undefined || baseUrl == null || baseUrl == '') return result;
      result += baseUrl;
      if (path === undefined || path === null || path === '') return result;
      result += path;
      if (query === undefined || query === null) return result;
      let countQuery = 0;
      Object.keys(query).forEach(key => {
        if (query[key] === undefined || key === undefined || key === null 
            || query[key] === null|| query[key] === '' || key === '') return;
        result += (countQuery > 0 ? '&' : '?') + key + '=' + query[key];
        countQuery++;
      });
      baseUrl = result;
      return baseUrl;
  }
  catch (error)
  {
      console.log("UrlWithQuery => Error:" + error);
      return baseUrl;
  }
}