import { SELECT_USER } from "./constants";

export const selectUser = user => {
  console.log("---------------------");
  console.log("selected : ", user);
  console.log("---------------------");

  return {
    type: SELECT_USER,
    payload: user
  };
};
