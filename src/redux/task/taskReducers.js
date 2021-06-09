import { TASK_SAVE } from "./taskActionTypes";

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
    default:
      return state;
  }
};

export default taskReducer;
