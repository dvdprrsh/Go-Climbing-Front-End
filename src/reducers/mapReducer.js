import { SET_MAP, GET_MAP } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case SET_MAP:
      return { map: action.payload };

    case GET_MAP:
      return action.payload;

    default:
      return state;
  }
};
