import { INCREASE, DECREASE } from './../constants';

const initialState = {
  currentNumber: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, currentNumber: state.currentNumber + 1 };

    case DECREASE:
      return { ...state, currentNumber: state.currentNumber - 1 };

    default:
      return state;
  }
};
