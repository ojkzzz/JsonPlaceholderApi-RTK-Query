import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "./api/jsonPlaceholder.api";
import usersSlice from "./slices/users.slice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
