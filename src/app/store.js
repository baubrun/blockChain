import { configureStore } from "@reduxjs/toolkit";
import { currencyApi } from "../services/currency";
import { newsApi } from "../services/news";

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
});
