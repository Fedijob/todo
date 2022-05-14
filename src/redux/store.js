import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "./todoslice/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
