//import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import counterReducer from '../features/counter/counterSlice';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

let store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

export default store;