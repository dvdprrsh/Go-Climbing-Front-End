import { SET_MAP, GET_MAP, SIGN_IN, SIGN_OUT } from "./types";

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

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
