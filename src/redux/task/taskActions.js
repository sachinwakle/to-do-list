import { TASK_SAVE } from "./taskActionTypes";

const saveTask = (task) => {
  return {
    type: TASK_SAVE,
    payload: task,
  };
};

export { saveTask };
