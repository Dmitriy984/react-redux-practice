import { types } from "./counterReducer";

export const incremented = () => ({ type: "counter/incremented" });
export const decremented = () => ({ type: "counter/decremented" });
export const toZero = () => ({ type: types.toZero });
export const incrementByAmount = (payload) => ({
  type: "counter/incrementByAmount",
  payload,
});
