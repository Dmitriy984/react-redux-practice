import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';

let store = createStore(counterReducer)

store.subscribe(() => {
    localStorage.clear();
    localStorage.setItem('value', store.getState().value);
})

export default store;