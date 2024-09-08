
import { server } from "../../constants/config";
import { apiSlice } from "./apiSlice";

export const usersSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        searchUsers:builder.query({
            query:(val) => ({
                url:`/api/v1/user/search/${val}`,
                credentials:"include",
            }),
            providesTags:["User"]
        }),

        sendConnectionRequest: builder.mutation({
            query:(data) => ({

                url:`/api/v1/user/sendrequest`,
                method:"PUT",
                body:data,
                credentials:"include",
                headers:{
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags:["User"]
        })
      
    })
})

export const {useLazySearchUsersQuery, useSendConnectionRequestMutation} = usersSlice