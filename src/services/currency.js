import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const currencyHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_CURRENCY_HOST,
  "x-rapidapi-key": process.env.REACT_APP_CURRENCY_KEY,
};
const baseUrl = process.env.REACT_APP_CURRENCY_BASE_URL;

const requestQuery = (url) => ({ url, headers: currencyHeaders });

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: (count) => requestQuery(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => requestQuery(`/exchanges`),
    }),
    getCurrencyDetails: builder.query({
      query: (coinId) => requestQuery(`/coin/${coinId}`),
    }),
    getCurrencyHistory: builder.query({
      query: ({ coinId, timeframe }) =>
        requestQuery(`coin/${coinId}/history/${timeframe}`),
    }),
  }),
});

export const {
  useGetCurrencyQuery,
  useGetExchangesQuery,
  useGetCurrencyDetailsQuery,
  useGetCurrencyHistoryQuery,
} = currencyApi;
