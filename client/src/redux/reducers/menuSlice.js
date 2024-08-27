import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFileMenu: false,
  isDeleteMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsFileMenu: (state, action) => {
      state.isFileMenu = action.payload;
    },
    setIsDeleteMenu: (state, action) => {
      state.isDeleteMenu = action.payload;
    },
  },
});

export default menuSlice;
export const { setIsFileMenu, setIsDeleteMenu } = menuSlice.actions;
