import { createSlice } from "@reduxjs/toolkit";
import { STATUS_INFO } from "../constants/layout";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    isToasterShow: false,
    toasterMessage: null,
    toasterStatus: STATUS_INFO,
    isLoading: false,
  },

  reducers: {
    hideLoader: (state) => {
      state.isLoading = false;
    },
    showLoader: (state, action) => {
      state.isLoading = action.payload;
    },
    hideToaster: (state) => {
      state.isToasterShow = false;
    },
    showToaster: (state, action) => {
      console.log(`action :>>`, action);
      state.isToasterShow = true;
      state.toasterMessage = action.payload?.message?.data?.message;
      state.toasterStatus = action.payload?.status;
    },
  },
});

export const { hideLoader, showLoader, hideToaster, showToaster } =
  layoutSlice.actions;

export const layoutState = (state) => state.layout;

export default layoutSlice.reducer;
