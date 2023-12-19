import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../../Api";
import {
  ResponseProfile,
  ResponseTechnician,
  ResponseTechnicians,
} from "../../@types/@types";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: "include" }),
  tagTypes: ["Technicians", "Profile", "Technician", "Posts"],
  endpoints: (builder) => ({
    //get profile
    getProfile: builder.query<ResponseProfile, string>({
      query: (args: string) => `/${args}`,
      providesTags: ["Profile"],
    }),

    //get technicians
    getTechnicians: builder.query<ResponseTechnicians, any>({
      query: ({ location, category, search, sort }) => ({
        url: "/technicians",
        method: "GET",
        params: {
          location,
          category,
          search,
          sort,
        },
      }),
      providesTags: ["Technicians"],
    }),
    //get single technician
    getSingleTechnician: builder.query<ResponseTechnician, string>({
      query: (args: string) => `/technicians/${args}`,
      providesTags: ["Technician"],
    }),

    //create posts
    createPost: builder.mutation({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),

    //get all posts
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetTechniciansQuery,
  useGetSingleTechnicianQuery,
  useCreatePostMutation,
  useGetPostsQuery,
} = Api;
