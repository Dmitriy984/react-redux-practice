import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import store from '../../app/store';
import {
    incremented,
    decremented,
    toZero,
    incrementByAmount
} from './actions';
import { selectCount } from './counterReducer';
import styles from './Counter.module.css';

const {dispatch} = store;
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

const {incDispatch, decDispatch, toZeroDispatch, incByAmountDispatch} = bindActionCreators(
{
    incDispatch: incremented,
    decDispatch: decremented,
    toZeroDispatch: toZero,
    incByAmountDispatch: incrementByAmount,
}
, dispatch);

export function Counter() {
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => incDispatch()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decDispatch()}
        >
          -
        </button>
        <button
          className={styles.button}
          aria-label="Zero value"
          onClick={() => toZeroDispatch()}
        >
          0
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
          onClick={() => incByAmountDispatch((Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>}
        <button
          className={styles.asyncButton}
          onClick={() => {
            setTimeout(() => {
              incByAmountDispatch((Number(incrementAmount) || 0));
            }, 1000);
            }
          }
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
