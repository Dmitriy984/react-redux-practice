import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../features/counter/rootReducer";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const {
    counter: { value },
    storage: { storage },
  } = store.getState();

  if (storage === "localStorage") {
    localStorage.setItem("count", value);
  }

  if (storage === "windowLocation") {
    window.location.hash = value;
  }

  if (storage === "cookies") {
    document.cookie = `count=${value}`;
  }
});

export default store;
