import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState().task));

export default store;
