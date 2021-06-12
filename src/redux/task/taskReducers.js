import {
  TASK_SAVE,
  TASK_DELETE,
  TASK_DELETE_ALL,
  TASK_COMPLETE_ALL,
  TASK_COMPLETE,
} from "./taskActionTypes";

const initialState = {
  data: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_SAVE:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case TASK_DELETE:
      let remainingTasks = state.data.filter((task) => task.id !== action.key);
      return {
        ...state,
        data: [...remainingTasks],
      };

    case TASK_DELETE_ALL:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};

export default taskReducer;
