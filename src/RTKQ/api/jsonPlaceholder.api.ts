import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPhotos, IPosts, ITodos, IUsers } from "../../models/models";

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholder/api",
  // tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getUsers: build.query<IUsers[], void>({
      query: () => "users",
      // providesTags: ["users"],
    }),
    getTodos: build.query<ITodos[], void>({
      query: () => "todos",
    }),
    getPosts: build.query<IPosts[], void>({
      query: () => "posts",
    }),
    getPhotos: build.query<IPhotos[], void>({
      query: () => "photos",
    }),
    setUser: build.mutation<any, IUsers>({
      query: (user: any) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      // invalidatesTags: ["users"],

      // Таким образом мы вручную изменили закэшированные данные
      //
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled;
          dispatch(
            jsonPlaceholderApi.util.updateQueryData(
              "getUsers",
              undefined,
              (users) => {
                return [...users, user];
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetTodosQuery,
  useGetPostsQuery,
  useGetPhotosQuery,
  useSetUserMutation,
} = jsonPlaceholderApi;
