import React, { Component } from "react";
import axios from "axios";
import forumJsonAPI from "../apis/forumJsonAPI";
import "./styles/CreatePostForm.css";
import { fetchPosts } from "../actions/forum";
import { connect } from "react-redux";

const deletepost = a => {
  axios
    .post(
      "http://51.255.163.79:8080/https://empiredigital.eu/phptest/delete.php?postid=" +
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
    <i className="trash alternate outline icon"></i>
  </button>
);
