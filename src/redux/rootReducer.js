import { combineReducers } from "redux";
import taskReducer from "./task/taskReducers";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  theme: themeReducer,
});

export default rootReducer;
