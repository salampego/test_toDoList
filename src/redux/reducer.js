import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    addToDo(state, { payload }) {
      state.push(payload);
    },
    toggleCompleted(state, { payload }) {
      state.forEach((todo) => {
        if (todo.id === payload) {
          todo.status = !todo.status;
        }
      });
    },
  },
});

export const { addToDo, toggleCompleted } = todoSlice.actions;
export const todoListReducer = todoSlice.reducer;
