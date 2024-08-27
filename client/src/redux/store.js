import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reducers/auth";
import { apiSlice } from "./api/apiSlice";
import groupSlice from "./reducers/groupSlice";
import notificationSlice from "./reducers/notificationSlice";
import deviceSlice from "./reducers/deviceSlice";
import menuSlice from "./reducers/menuSlice";
import searchSlice from "./reducers/searchSlice";
import loadingSlice from "./reducers/loadingSlice";
import { chatSlice } from "./api/chatSlice";


const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        [authSlice.name] : authSlice.reducer,
        group: groupSlice.reducer,
        notification: notificationSlice.reducer,
        device: deviceSlice.reducer,
        menu: menuSlice.reducer,
        search: searchSlice.reducer,
        loading: loadingSlice.reducer,
        chat: chatSlice.reducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})

export default store;