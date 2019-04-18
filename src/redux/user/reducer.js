import { SELECT_USER } from "./constants";

const initialState = {
  id: 0,
  name: ""
};

export const user = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    default:
      return state;
  }
};
