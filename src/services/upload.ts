import { fileService } from './request';

export const uploadFile = async (params: any) => {
  return fileService.call<any>({
    apiName: '/upload/v1/photo?thumb=0',
    params,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
};
