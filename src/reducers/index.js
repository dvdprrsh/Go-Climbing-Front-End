import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import { reducer as formReducer } from "redux-form";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
  map: mapReducer
});
