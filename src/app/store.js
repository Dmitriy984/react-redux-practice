import { createStore } from "redux";

import counterReducer from "../features/counter/counterReducer";


let store = createStore(counterReducer);

store.subscribe(() => {
  window.location.hash = store.getState().value;
  document.cookie = `state=${store.getState().value}`;
  localStorage.setItem('value', store.getState().value);
});

export default store;

