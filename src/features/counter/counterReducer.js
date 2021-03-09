// const windowLocationState = +window.location.hash.substr(1);

// const cookiesState = +document.cookie.replace(
//   /(?:(?:^|.*;\s*)state\s*\[=]\s*([^;]*).*$)|^.*$/,
//   "$1"
// );

// const localStorageState = +localStorage.getItem("value");

// const initialState =
//   windowLocationState || cookiesState || localStorageState || 0;

function counterReducer(state = { value: 0, storage: null }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1,
        storage: state.storage };
    case "counter/decremented":
      return { value: state.value - 1,
        storage: state.storage };
    case "counter/toZero":
      return { value: (state.value = 0),
        storage: state.storage };
    case "counter/incrementByAmount":
      return { value: (state.value += action.payload),
        storage: state.storage };
    case "storage/saveCount":
      return { value: state.value,
        storage: action.payload };
    case "storage/enableButtons":
      return {...state, disabled: false};
    case "storage/disableButtons":
      return {...state, disabled: true};
    default:
      return state;
  }
}

export default counterReducer;
