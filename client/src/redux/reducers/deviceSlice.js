import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export default deviceSlice;
export const { setIsMobile } = deviceSlice.actions;
