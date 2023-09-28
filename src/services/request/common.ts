import { STORE_ACCESS_TOKEN, TOKEN_INVALID, ROUTES_LOGIN } from '@/constants';
import { Service, http } from '@/utils';
import store from 'store2';

const navigate = () => {
  window.location.hash = `#${ROUTES_LOGIN}`;
};

http.interceptors.request.use(
  (config: any) => {
    // 在请求发出之前进行拦截
    // 可以在这里添加一些公共的请求头或者参数
    const { headers } = config;
    const token = store(STORE_ACCESS_TOKEN);
    if (headers) {
      headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: { data: any }) => {
    console.log('response-data', response);
    if (response.data.code === TOKEN_INVALID) {
      store(STORE_ACCESS_TOKEN, '');
      navigate();
    }
    // 在响应返回之后进行拦截
    // 可以在这里统一处理错误码或者数据格式等问题
    return response.data;
  },
  (error: any) => {
    // 处理响应错误
    return Promise.reject(error);
  },
);

const service = new Service({
  baseUrl: API_BASE_URL,
  http: http,
});

export { service };
