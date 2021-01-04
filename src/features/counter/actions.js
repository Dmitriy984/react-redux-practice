export const incremented = () => ({ type: "counter/incremented" });
export const decremented = () => ({ type: "counter/decremented" });
export const toZero = () => ({ type: "counter/toZero" });
export const incrementByAmount = (payload) => ({
  type: "counter/incrementByAmount",
  payload,
});
