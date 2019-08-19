import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import mapReducer from "./mapReducer";
import cragsReducer from "./cragsReducer";
import gymsReducer from "./gymsReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  map: mapReducer,
  crags: cragsReducer,
  gyms: gymsReducer
});
