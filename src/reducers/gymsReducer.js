import { GET_GYMS } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case GET_GYMS:
      return action.payload;
    default:
      return state;
  }
};
