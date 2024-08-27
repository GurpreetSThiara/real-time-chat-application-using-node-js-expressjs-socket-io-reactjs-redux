
import { apiSlice } from "./apiSlice";

export const chatSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        chats:builder.query({
            query:() => ({
                url:"api/v1/chat/my",
                credentials:"include",
            }),
            providesTags:["Chat"]
        }),
      
    })
})

export const {useChatsQuery} = chatSlice