import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
  },
});

export default searchSlice;
export const { setIsSearch } = searchSlice.actions;
