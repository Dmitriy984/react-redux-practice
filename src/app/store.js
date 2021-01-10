import { applyMiddleware, createStore } from "redux";
import counterReducer from "../features/counter/counterReducer";
import thunk from "redux-thunk";

let store = createStore(
  counterReducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  window.location.hash = store.getState().value;
  document.cookie = `state=${store.getState().value}`;
  localStorage.setItem("value", store.getState().value);
});

export default store;
