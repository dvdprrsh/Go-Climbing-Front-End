import jsonPlaceholder from "../../apis/forumJsonAPI";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
