import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadingLoader: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setUploadingLoader: (state, action) => {
      state.uploadingLoader = action.payload;
    },
  },
});

export default loadingSlice;
export const { setUploadingLoader } = loadingSlice.actions;
