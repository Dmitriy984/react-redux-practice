import { combineReducers } from "redux";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    case "counter/toZero":
      return { value: (state.value = 0) };
    case "counter/incrementByAmount":
      return { value: (state.value += action.payload) };
    default:
      return state;
  }
}

function storageReducer(state = { storage: null, disabled: true }, action) {
  switch (action.type) {
    case "storage/saveCount":
      return { storage: action.payload, disabled: false };
    case "storage/disableButtons":
      return { ...state, disabled: true };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  storage: storageReducer,
});
