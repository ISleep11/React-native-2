import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// Создаём slice
const countSlice = createSlice({
  name: "count", // Имя slice
  initialState, // Начальное состояние
  reducers: {
    // Синхронные редюсеры
    increment: (state) => {
      state.value += 1; // Redux Toolkit позволяет мутировать состояние (используя Immer внутри)
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Экспортируем автоматически созданные экшены
export const { increment, decrement } = countSlice.actions;

// Экспортируем редюсер для использования в store
export default countSlice.reducer;
