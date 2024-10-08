import { server } from "../../constants/config";
import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `${server}/api/v1/user/login`,
        method: "POST",
        body: body,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        
       
      }),
    }),

    register: builder.mutation({
      query: (body) => ({
        url: `${server}/api/v1/user/register`,
        method: "POST",
        body: body,
        credentials: 'include',
        headers:{
            'Content-Type': 'multipart/form-data'
        }

      }),
    }),

    getProfile: builder.query({
      
      query: () => `${server}/api/v1/user/me`,
      extraOptions:{
        credentials:'include',
      }
    }),

    logout:builder.query({
      query:() => `${server}/api/v1/user/logout`,
      extraOptions:{
        credentials:'include'
      }
    }),

    getMyNotifications:builder.query({
      query:()=>({
          url:'/api/v1/user/notifications',
          credentials:'include'
      }),
      keepUnusedDataFor:0
    }),

    acceptRequest: builder.mutation({
      query:(body)=>({
        url:'/api/v1/user/acceptrequest',
        method:'PUT',
        credentials:'include',
        body:body
    })
    })
  }),
});

export const { useGetProfileQuery, useLoginMutation, useRegisterMutation , useGetMyNotificationsQuery , useAcceptRequestMutation} =
  userSlice;
