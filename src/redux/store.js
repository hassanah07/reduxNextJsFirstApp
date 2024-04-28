import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/newSlice";

export const store = configureStore({ reducer });
