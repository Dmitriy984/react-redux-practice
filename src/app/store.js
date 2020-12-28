import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';
// import { Hash } from '../features/counter/counterSlice';

let store = createStore(counterReducer)

store.subscribe(() => {
    // Hash.clear();
    // Hash.add('value', store.getState().value);
    document.cookie = `state=${store.getState().value}`;
})

export default store;