import { createStore } from 'redux';
import counterReducer from '../features/counter/counterReducer';

let store = createStore(counterReducer);

store.subscribe(() => {
    localStorage.setItem('value', store.getState().value);
});

export default store;