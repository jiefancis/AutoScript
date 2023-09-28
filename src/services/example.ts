import { service } from './request';

export type GetCandlesServiceResponseData = {
  prices: Array<{
    t: number;
    o: number;
    c: number;
    h: number;
    l: number;
  }>;
  period: string;
};

export interface GetCandleServiceRequestParams {
  period: string;
  tokenAddress: string;
  limit: number;
}

export type GetCandles24hServiceResponseData = Record<
  string,
  {
    o: number;
    c: number;
    h: number;
    l: number;
    change: number;
  }
>;

export const getCandlesService = (params: GetCandleServiceRequestParams) => {
  return service.call<GetCandlesServiceResponseData>({
    apiName: '/candles',
    params,
    options: {
      method: 'GET',
    },
  });
};

export const getCandles24hService = () => {
  return service.call<GetCandles24hServiceResponseData>({
    apiName: '/candles_24h',
    options: {
      method: 'GET',
    },
  });
};
