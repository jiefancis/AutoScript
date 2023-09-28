import { AxiosInstance } from 'axios';

export interface ServiceOptions {
  baseUrl: string;
  http: AxiosInstance;
}

export interface ServiceCallOptions {
  apiName: string;
  params?: Record<string, any>;
  options?: Record<string, any>;
}

export interface ServiceError {
  code: number;
  msg: string;
}
