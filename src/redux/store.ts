import { configureStore } from "@reduxjs/toolkit";
import prodSlice from "./reducers";

export const store = configureStore({
  reducer: prodSlice,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
