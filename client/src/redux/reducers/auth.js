import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAdmin: false,
        isLoading : true
    },
    reducers: {
        // userExist:(state,action)=>{
        //     ta
        // },
        reduxLogin: (state, action) => {
            console.log("action.payload")
            console.log(action.payload)
            state.user = action.payload;
            state.isLoading = false;
        },
        reduxLogout: (state) => {
            state.user = null;
            state.isLoading = false;
        }
    }
})

export const {reduxLogin, reduxLogout} = authSlice.actions
export default authSlice