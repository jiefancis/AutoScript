import { service } from './request';

export const getAllTask = async () => {
  return service.call<any>({
    apiName: '/autoape/v1/task/all',

    options: {
      method: 'GET',
    },
  });
};

export const getMyTask = async () => {
  return service.call<any>({
    apiName: '/autoape/v1/task/my',

    options: {
      method: 'GET',
    },
  });
};
export const getTaskDetail = async (params: any) => {
  return service.call<any>({
    apiName: '/autoape/v1/task/detail',
    params: params,
    options: {
      method: 'GET',
    },
  });
};

export const runToEarn = async (params: any) => {
  return service.call<any>({
    apiName: '/autoape/v1/task/run-to-earn',
    params: {
      data: params,
    },
    options: {
      method: 'POST',
    },
  });
};
