import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../app/store';
import { 
    incremented,
    decremented,
    incrementByAmount,
    selectCount 
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => store.dispatch(incremented())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => store.dispatch(decremented())}
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
        {<button
          className={styles.button}
          onClick={() => {
              return store.dispatch(incrementByAmount((Number(incrementAmount) || 0)));
            }
          }
        >
          Add Amount
        </button>}
        <button
          className={styles.asyncButton}
          onClick={() => {
            setTimeout(() => {
              store.dispatch(incrementByAmount((Number(incrementAmount) || 0)));
            }, 1000);}
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
