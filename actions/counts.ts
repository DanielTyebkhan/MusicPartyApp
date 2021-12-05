import {COUNTER_CHANGE} from "../constants/ReduxActions";

export const changeCount = (count: number) => {
  return {
    type: COUNTER_CHANGE,
    payload: count
  }
}
