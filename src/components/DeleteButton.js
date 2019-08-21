import React from "react";
import axios from "axios";
import "./screens/styles/CreatePostForm.css";

const deletepost = async (id, callback) => {
  await axios.delete(
    "https://climbing-cors.herokuapp.com/http://51.255.163.79:3001/posts/" + id
  );
  callback();
};

export const DeleteButton = ({ postId, postDeleted }) => (
  <button
    id="deletebutton"
    onClick={() => deletepost(postId, postDeleted)}
    className="circular ui icon button"
  >
    <i className="trash alternate outline icon" />
  </button>
);
