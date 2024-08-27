import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDeleteChat: {
    chatId: "",
    groupChat: false,
  },
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSelectedDeleteChat: (state, action) => {
      state.selectedDeleteChat = action.payload;
    },
  },
});

export default chatSlice;
export const { setSelectedDeleteChat } = chatSlice.actions;
