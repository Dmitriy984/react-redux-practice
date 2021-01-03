import { types } from "./counterReducer";

export const incremented = () => ({ type: types.incremented });
export const decremented = () => ({ type: types.decremented });
export const toZero = () => ({ type: types.toZero });
export const incrementByAmount = (payload) => ({
  type: types.incrementByAmount,
  payload,
});
