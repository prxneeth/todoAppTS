import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
