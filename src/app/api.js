import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().register.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  // Modified to include Book and Library in addition to User
  tagTypes: ["User", "Book", "Library"],
  endpoints: () => ({}),
});
