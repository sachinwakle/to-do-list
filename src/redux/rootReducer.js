import { combineReducers } from "redux";
import taskReducer from "./task/taskReducers";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
