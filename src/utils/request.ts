import { extend, RequestOptionsInit } from 'umi-request';
import { notification } from 'antd';
import { history, formatMessage } from 'umi';
import store from 'store';
import { stringify } from 'querystring';

const _apiPrefix = process.env.API_VERIFY_ECARD_PROD || '';

interface FetchOptions extends RequestOptionsInit {
  url: string;
  autoPrefix?: boolean;
}

interface FetchResponseType {
  statusCode?: number;
  result?: object;
  error?: string;
  data?: object; // if api success
  message?: string; // if api success
  success?: boolean; // if api success
  code?: string; // if api success
}

interface ErrorType {
  message: any;
}

const errorHandler = (error: { response: Response; data: any }): Response => {
  const { response } = error;
  if (!response) {
    // notification.error({
    //   description:
    //     'Mạng của bạn không bình thường và không thể kết nối với máy chủ',
    //   message: 'Mạng bất thường',
    // });
  }
  return error.data;
};

const request = extend({
  errorHandler,
  timeout: 30000,
});

const generateUrl = (url: string, _autoPrefix = false) => {
  if (!_autoPrefix) return url;
  return `${_apiPrefix}/${url}`;
};

export const fetch = ({
  url,
  headers,
  autoPrefix = true,
  ...options
}: FetchOptions) => {
  return request(generateUrl(url, autoPrefix), {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  }).then(({ statusCode, result, error, success, data }: FetchResponseType) => {
    var isSuccess = success != undefined && success;
    if (!isSuccess) {
      if (statusCode === undefined || statusCode !== 200) {
        notification.error({
          message: `Lỗi yêu cầu `,
          description: formatMessage({
            id: `error.${error ?? ""}`,
            defaultMessage: error ?? "",
          }),
        });
      }
    }
    return { ...data, success: success != undefined && success };
  });
};

const renderMessage = (error: ErrorType) => {
  if (!error) return 'Error';
  if (typeof error.message === 'string') return error.message;
  return error.message.error;
};

export const fetchAuth = async ({
  url,
  headers,
  autoPrefix = true,
  ...options
}: FetchOptions) => {
  // const store = useStore();
  const accessToken = store.get('accessToken');

  if (!accessToken) {
    history.replace(`/login`);
    return { success: false };
  }

  const response: FetchResponseType = await request(
    generateUrl(url, autoPrefix),
    {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
      ...options,
    },
  );

  if (!response) {
    return { success: false };
  }
  const { statusCode, result, error, success, data,message } = response;
  var isSuccess = success != undefined && success;
  if (!isSuccess) {
    if (statusCode !== 200) {
      if (statusCode === 401) {
        history.replace({
          pathname: '/login',
          search: stringify({
            redirect: window.location.href,
            logout: true,
          }),
        });
        return { success: false };
      } else {
        notification.error({
          message: `Lỗi yêu cầu`,
          description: formatMessage({
            id: `error.${error}`,
            defaultMessage: error,
          }),
        });
        return { success: false,data  };
      }
    }
  }

  return { ...data, success: success != undefined && success };
};

export const getFetchAuthOptions = ({
  url,
  headers,
  autoPrefix = true,
  ...options
}: FetchOptions) => {
  // const store = useStore();
  const accessToken = store.get('accessToken');
  if (!accessToken) {
    notification.error({
      message: `Lỗi xác thực`,
      description: 'Bạn cần phải đăng nhập',
    });
    history.replace(`/login`);
    return null;
  }

  return {
    url: generateUrl(url, autoPrefix),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...headers,
    },
    ...options,
  };
};

export default request;
