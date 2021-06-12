import {
  TASK_SAVE,
  TASK_DELETE,
  TASK_DELETE_ALL,
  TASK_COMPLETE_ALL,
  TASK_COMPLETE,
} from "./taskActionTypes";

const saveTask = (task) => {
  return {
    type: TASK_SAVE,
    payload: task,
  };
};

const deleteTask = (key) => {
  return {
    type: TASK_DELETE,
    key,
  };
};

const deleteAllTasks = () => {
  return {
    type: TASK_DELETE_ALL,
  };
};

const completeTask = (key) => {
  return {
    type: TASK_COMPLETE,
    key,
  };
};

const completeAllTasks = () => {
  return {
    type: TASK_COMPLETE_ALL,
  };
};

export { saveTask, deleteTask, deleteAllTasks, completeAllTasks, completeTask };
