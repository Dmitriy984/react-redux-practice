import { applyMiddleware, createStore } from "redux";
import counterReducer from "../features/counter/counterReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {

  const { value, storage } = store.getState();

  if (storage === 'localStorage') {
    localStorage.setItem("count", value);
  }

  if (storage === 'windowLocation') {
    window.location.hash = value;
  }

  if (storage === 'cookies') {
    document.cookie = `count=${value}`;
  }

});

export default store;
