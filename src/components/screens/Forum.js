import React from "react";
import PostList from "../PostList";
import "./styles/forumScreen.css";
import GoogleAuth from "../../common-components/GoogleAuth";

const forum = () => {
  return (
    <div id="forumScreen" className="ui container">
      <div>
        <p id="titleText">Go-Climbing Forum</p>
        <p id="subText">You can make a post below and stuff like that.</p>
        <GoogleAuth />
        <PostList />
      </div>
      {renderUsername()}
    </div>
  );
};
const renderUsername = () => {
  console.log(window.gapi.auth2);
};

export default forum;
