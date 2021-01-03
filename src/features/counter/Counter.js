import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";
import store from "../../app/store";
import * as actions from "./actions";
import { selectCount } from "./counterReducer";
import styles from "./Counter.module.css";

const { dispatch } = store;
const {
  incremented,
  decremented,
  toZero,
  incrementByAmount,
} = bindActionCreators(actions, dispatch);

export function Counter() {
  const count = useSelector(selectCount);
  
  const [incrementAmount, setIncrementAmount] = useState(
    localStorage.getItem("incrementAmount") || "2"
  );
  localStorage.setItem("incrementAmount", incrementAmount);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={incremented}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decremented}
        >
          -
        </button>
        <button
          className={styles.button}
          aria-label="Zero value"
          onClick={toZero}
        >
          0
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {
          <button
            className={styles.button}
            onClick={() => {
              incrementByAmount(Number(incrementAmount) || 0);
            }}
          >
            Add Amount
          </button>
        }
        <button
          className={styles.asyncButton}
          onClick={() => {
            setTimeout(() => {
              incrementByAmount(Number(incrementAmount) || 0);
            }, 1000);
          }}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
