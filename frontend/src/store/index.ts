import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import pathSlice from "./pathSlice";
import { Api } from "./service/Api";
// ...

export const store = configureStore({
  reducer: {
    auth:authSlice,
    path:pathSlice,

    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefault)=>getDefault().concat(Api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
