
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

        chatDetails: builder.query({
            query:(chatId,populate = false) => {
                let url = `api/v1/chat/${chatId}/1`;
                if(populate) url += "?populate=true";
                return {
                    url,
                    credentials:"include",
                }
            },
            providesTags:["Chat"]
        }),

        getOldMessages: builder.query({
            query:({chatId,page}) => ({
                url:`api/v1/chat/message/${chatId}?page=${page}`,
                credentials:'include'
            }),
            providesTags:["Message"]
        }),


      
    })
})

export const {useChatsQuery , useChatDetailsQuery, useGetOldMessagesQuery} = chatSlice