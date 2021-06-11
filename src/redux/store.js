import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";

const store = createStore(rootReducer, loadState());

store.subscribe(
  throttle(() => {
    saveState({ theme: store.getState().theme, task: store.getState().task });
  }, 500)
);

export default store;
