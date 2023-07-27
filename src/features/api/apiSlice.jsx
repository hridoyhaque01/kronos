import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {} from

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({}),
});
