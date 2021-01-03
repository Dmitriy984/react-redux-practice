import { createStore } from "redux";

import counterReducer, {
  windowLocation,
} from "../features/counter/counterReducer";


let store = createStore(counterReducer);

store.subscribe(() => {
  windowLocation.clear();
  windowLocation.add("value", store.getState().value);
  document.cookie = `state=${store.getState().value}`;
});

export default store;
