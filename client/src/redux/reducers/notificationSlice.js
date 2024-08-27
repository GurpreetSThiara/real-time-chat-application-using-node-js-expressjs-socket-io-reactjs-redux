import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotification: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setIsNotification: (state, action) => {
      state.isNotification = action.payload;
    },
  },
});

export default notificationSlice;
export const { setIsNotification } = notificationSlice.actions;
