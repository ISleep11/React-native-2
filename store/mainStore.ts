import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countReducer from "./slices/countSlice/countSlice";
import fetchReducer from "./slices/fetchSlice/fetchSlice";

const rootReducer = combineReducers({
  count: countReducer,
  fetch: fetchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
