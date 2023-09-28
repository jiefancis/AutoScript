import { service } from './request';
import { userLoginTypeEnum } from '@/enums';

interface EmailCodeParams {
  email: string;
}
export const getEmailCodeApi = async (params: EmailCodeParams) => {
  return service.call<any>({
    apiName: '/autoape/v1/user/email-code',
    params: {
      data: params,
    },
    options: {
      method: 'POST',
    },
  });
};

interface LoginParams {
  account_source: userLoginTypeEnum; // Email: 0, Google: 1, Apple: 2, Facebook: 3, Twitter: 4, Snapchat: 5, TikTok: 6, DeviceID: 7
  email?: string;
  pass_code?: string;
  token?: string;
  account_id?: string;
}
export const loginApi = async (params: LoginParams) => {
  return service.call<any>({
    apiName: '/autoape/v1/user/login',
    params: {
      data: params,
    },
    options: {
      method: 'POST',
    },
  });
};

export const logoutApi = async () => {
  return service.call<any>({
    apiName: '/autoape/v1/user/logout',
    options: {
      method: 'POST',
    },
  });
};
// 使用令牌调用谷歌 API 获取用户信息
export const fetchUserInfo = async (token: string) =>
  fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('catch', error);
    });
