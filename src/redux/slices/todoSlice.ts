import { createSlice } from "@reduxjs/toolkit";
import { getLocalTodos } from "@/components/custom/TodoDisplay";

export interface todo {
  id: string;
  title: string;
  completed: boolean;
}

const initialState = {
  todos: getLocalTodos() || ([] as todo[]),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: todo }) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: { payload: todo }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      state.todos[index] = { ...state.todos[index], ...action.payload };
    },
    deleteTodo: (state, action: { payload: string }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      const [completedTodo] = state.todos.splice(index, 1);
      completedTodo.completed = true;
      state.todos.push(completedTodo);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, completeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
