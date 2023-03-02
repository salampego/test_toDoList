import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./reducer";

export const store = configureStore({
  reducer: { todo: todoListReducer },
});
