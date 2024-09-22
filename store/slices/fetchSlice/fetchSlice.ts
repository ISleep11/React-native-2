import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoState } from "../../../types/types";

const initialState: TodoState = {
  todos: [],
  status: "loading",
  error: undefined,
};

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("could not fetch todos");
    }
    const todos = response.json();
    return todos;
  } catch (error) {
    throw error;
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "success";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message;
      });
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
