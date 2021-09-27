import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_NEWS_HOST,
  "x-rapidapi-key": process.env.REACT_APP_NEWS_KEY,
};
const baseUrl = process.env.REACT_APP_NEWS_BASE_URL;

const requestQuery = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category, count }) =>
        requestQuery(
          `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
