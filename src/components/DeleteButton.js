import React from "react";
import axios from "axios";
import "./screens/styles/CreatePostForm.css";

const deletepost = a => {
  axios
    .post(
      "https://climbing-cors.herokuapp.com/https://empiredigital.eu/goclimbing/delete.php?postid=" +
        a
    )
    .then(result => {
      window.location.reload(true);
    });
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
