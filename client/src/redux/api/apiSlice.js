import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";


export const baseQuery = fetchBaseQuery({
  baseUrl: server,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes:["Chat" , "User" , "Message"],

  endpoints: () => ({}),
});

