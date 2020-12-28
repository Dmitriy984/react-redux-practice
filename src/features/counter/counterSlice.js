const localStorageState = localStorage.getItem('value') || 0;

function counterReducer(state = { value: localStorageState }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
      case 'counter/incrementByAmount':
        return { value: state.value += action.payload }
    default:
      return state
  }
}

const incremented = () => ({type: 'counter/incremented'});
const decremented = () => ({type: 'counter/decremented'});
const incrementByAmount = (payload) => ({type: 'counter/incrementByAmount', payload});
const selectCount = state => state.value;

export {incremented, decremented, incrementByAmount, selectCount};

export default counterReducer;
