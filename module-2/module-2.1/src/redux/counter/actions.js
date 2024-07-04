import {
    DECREMENT,
    INCREMENT,
} from "../../../../module-2-react/src/redux/counter/actionsTypes";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
