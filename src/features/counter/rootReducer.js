import { combineReducers } from "redux";
import readCookie from '../../utils/readCookie';


const windowLocationState = +window.location.hash.substr(1);
export const cookieState = +readCookie("count");
const localStorageState = +localStorage.getItem("count");

const initialCounterState =
  windowLocationState || cookieState || localStorageState || 0;

function counterReducer(state = {value: initialCounterState}, action) {
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

const initialStorageState = {
  storage: localStorage.getItem("storageState"),
  disabled: false
};

function storageReducer(state = initialStorageState, action) {
  switch (action.type) {
    case "storage/selectStorage":
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
