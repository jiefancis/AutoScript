import { HttpStatusCode } from 'axios';

export const HttpCodeError: Record<number, string> = {
  [HttpStatusCode.BadRequest]: 'Bad Request',
  [HttpStatusCode.Unauthorized]: 'Unauthorized Access',
  [HttpStatusCode.Forbidden]: 'Access Forbidden',
  [HttpStatusCode.NotFound]: 'Resource Not Found',
  [HttpStatusCode.InternalServerError]: 'Server Busy, Please Try Again Later',
  [HttpStatusCode.BadGateway]: 'Server Busy, Please Try Again Later',
  [HttpStatusCode.ServiceUnavailable]: 'Server Busy, Please Try Again Later',
  [HttpStatusCode.GatewayTimeout]: 'Request Timeout, Please Try Again Later',
};

export const BEFORE_PATH_REGX = /^\//;
export const AFTER_PATH_REGX = /\/$/;

export const GET_REGX = /GET/i;
export const COMMON_REQUEST_METHODS = /(POST|PUT|PATCH)/i;
