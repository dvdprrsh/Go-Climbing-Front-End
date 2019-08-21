import React from "react";
import axios from "axios";
import "./screens/styles/CreatePostForm.css";

const deletepost = async id => {
  console.log("deleting");

  await axios.delete(
    "https://climbing-cors.herokuapp.com/http://51.255.163.79:3001/posts/" + id
  );
  console.log("got here");
  window.location.reload(true);
};

export const DeleteButton = ({ postId }) => (
  <button
    id="deletebutton"
    onClick={() => deletepost(postId)}
    className="circular ui icon button"
  >
    <i className="trash alternate outline icon" />
  </button>
);
