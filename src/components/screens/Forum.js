import React from "react";
import PostList from "../PostList";
import "./styles/forumScreen.css";

const forum = () => {
  return (
    <div id="forumScreen" className="ui container">
      <div>
        <p id="titleText">Go-Climbing Forum</p>
        <p id="subText">You can make a post below and stuff like that.</p>
        <PostList />
      </div>
    </div>
  );
};

export default forum;
