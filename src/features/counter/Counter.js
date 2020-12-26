import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from '../../app/store'
import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
  selectCount,
} 
from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
          onClick={() => store.dispatch({ type: 'counter/incremented' })}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
          onClick={() => store.dispatch({ type: 'counter/decremented' })}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button> */}
        {/* <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
      </div>
    </div>
  );
}
