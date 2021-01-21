import { applyMiddleware, createStore } from "redux";
import counterReducer from "../features/counter/counterReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  window.location.hash = store.getState().value;
  document.cookie = `state=${store.getState().value}`;
  localStorage.setItem("value", store.getState().value);
});

export default store;
