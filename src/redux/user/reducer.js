import { SELECT_USER, RESET_USER } from './constants';

const initialState = {
  id: 0,
  name: '',
};

export const user = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};
