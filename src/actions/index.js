import { SET_MAP, GET_MAP } from "./types";

export const setMap = map => dispatch => {
  dispatch({
    type: SET_MAP,
    payload: map
  });
};

export const getMap = () => getState => {
  return {
    type: GET_MAP,
    payload: getState().getMap
  };
};
