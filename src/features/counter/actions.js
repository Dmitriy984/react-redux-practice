export const incremented = () => ({ type: "counter/incremented" });
export const decremented = () => ({ type: "counter/decremented" });
export const toZero = () => ({ type: "counter/toZero" });

export const incrementByAmount = (payload) => ({
  type: "counter/incrementByAmount",
  payload,
});

export const asyncIncremented = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export function disableButtons() {
  return {
    type: "storage/disableButtons",
  };
}

export function selectStorage(storage) {
  return {
    type: "storage/saveCount",
    payload: storage,
  };
}
