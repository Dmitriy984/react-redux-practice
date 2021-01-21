import React, { useState } from "react";
// import { bindActionCreators } from "redux";
//import { useSelector } from "react-redux";
// import store from "../../app/store";
import * as actions from "./actions";
//import { selectCount } from "./counterReducer";
import styles from "./Counter.module.css";
import { connect } from 'react-redux';

// const { dispatch } = store;
// const {
//   incremented,
//   decremented,
//   toZero,
//   incrementByAmount,
//   asyncIncremented
// } = bindActionCreators(actions, dispatch);

function Counter({counter, incremented, decremented, toZero, incrementByAmount, asyncIncremented}) {
  // const count = useSelector(selectCount);

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
        <span className={styles.value}>{counter}</span>
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
    counter: state.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   const {
//     incremented,
//     decremented,
//     toZero,
//     incrementByAmount,
//     asyncIncremented
//   } = bindActionCreators(actions, dispatch);
//   return {
//     incremented,
//     decremented,
//     toZero,
//     incrementByAmount,
//     asyncIncremented
//   }
// }

export default connect(mapStateToProps, actions)(Counter);