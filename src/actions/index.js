import { SET_MAP, GET_MAP } from "./types";

export const setMap = map => {
  return {
    type: SET_MAP,
    payload: map
  };
};

export const alsoChange = () => {
  return {
    type: GET_MAP
  };
};
