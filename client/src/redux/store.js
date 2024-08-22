import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reducers/auth";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        [authSlice.name] : authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})

export default store;