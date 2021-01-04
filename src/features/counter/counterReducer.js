const windowLocationState = +window.location.hash.substr(1);

const cookiesState = +document.cookie.replace(
  /(?:(?:^|.*;\s*)state\s*\[=]\s*([^;]*).*$)|^.*$/,
  "$1"
);

const localStorageState = +localStorage.getItem("value");

const initialState =
  windowLocationState || cookiesState || localStorageState || 0;

function counterReducer(state = { value: initialState }, action) {
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

export const selectCount = (state) => state.value;

export default counterReducer;
