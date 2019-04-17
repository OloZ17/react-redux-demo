import { USER_SELECTED } from "../actions/index";

export default (state = null, action) => {
  console.log(state);
  switch (action.type) {
    case USER_SELECTED:
      return action.payload;
    default:
      return state;
  }
};

// export default function(state,action) {
//   switch(action.type) {
//     case USER_SELECTED:
//       return action.payload;
//   }

//   return state

// }
