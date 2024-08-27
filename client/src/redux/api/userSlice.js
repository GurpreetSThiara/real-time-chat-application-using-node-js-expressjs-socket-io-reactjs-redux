import { server } from "../../../constants/config";
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
    })
  }),
});

export const { useGetProfileQuery, useLoginMutation, useRegisterMutation } =
  userSlice;
