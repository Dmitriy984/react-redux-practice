import { createStore } from "redux";
import counterReducer from "../features/counter/counterReducer";

let store = createStore(counterReducer);

store.subscribe(() => {
  document.cookie = `state=${store.getState().value}`;
});

export default store;
