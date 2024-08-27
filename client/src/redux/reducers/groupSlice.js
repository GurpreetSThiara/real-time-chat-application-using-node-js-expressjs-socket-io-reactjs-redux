import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNewGroup: false,
  isAddMember: false,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setIsNewGroup: (state, action) => {
      state.isNewGroup = action.payload;
    },
    setIsAddMember: (state, action) => {
      state.isAddMember = action.payload;
    },
  },
});

export default groupSlice;
export const { setIsNewGroup, setIsAddMember } = groupSlice.actions;
