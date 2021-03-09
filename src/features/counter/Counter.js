import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import styles from "./Counter.module.css";


function Counter({
  counter,
  storage,
  disabled,
  incremented,
  decremented,
  toZero,
  incrementByAmount,
  asyncIncremented,
  disableButtons,
  enableButtons
}) {

  const [incrementAmount, setIncrementAmount] = useState("2");

  useEffect(() => {
    if (storage === "Select storage" || storage === null) {
      disableButtons();
    } else {
      enableButtons();
    }
  }, [storage, disableButtons, enableButtons]);

  return (
    <div>
      <div className={styles.row}>
        <button
          disabled={disabled}
          className={styles.button}
          aria-label="Increment value"
          onClick={incremented}
        >
          +
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          disabled={disabled}
          className={styles.button}
          aria-label="Decrement value"
          onClick={decremented}
        >
          -
        </button>
        <button
          disabled={disabled}
          className={styles.button}
          aria-label="Zero value"
          onClick={toZero}
        >
          0
        </button>
      </div>
      <div className={styles.row}>
        <input
          disabled={disabled}
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {
          <button
            disabled={disabled}
            className={styles.button}
            onClick={() => {
              incrementByAmount(Number(incrementAmount) || 0);
            }}
          >
            Add Amount
          </button>
        }
        <button
          disabled={disabled}
          className={styles.asyncButton}
          onClick={() => {
            asyncIncremented(Number(incrementAmount) || 0);
          }}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.value,
    storage: state.storage,
    disabled: state.disabled
  };
};

export default connect(mapStateToProps, actions)(Counter);
