// Create the redux store
import { createStore } from "redux";
import TaskReducer from "./TaskReducer";

const store = createStore(
  // 1st arg: Reducer(s) function
  TaskReducer,
  // 2nd arg: Enhancers/Middleware
  {}
);

export default store;