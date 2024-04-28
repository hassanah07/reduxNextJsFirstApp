import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/newSlice";
import TodoReducer from "./slices/todoSlice";

export const store = configureStore({
  reducer: { userData: UserReducer, todoData: TodoReducer }
});
