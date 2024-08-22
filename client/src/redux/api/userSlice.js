import { server } from "../../../constants/config";
import { apiSlice } from "./apiSlice";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: `${server}/api/v1/user/login`,
        method: "POST",
        body: body,
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
        headers:{
            'Content-Type': 'application/json'
        }

      }),
    }),

    getProfile: builder.query({
      query: () => `${server}/api/v1/user/me`,
    }),
  }),
});

export const { useGetProfileQuery, useLoginMutation, useRegisterMutation } =
  userSlice;
