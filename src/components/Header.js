import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="main">
      {/* TODO:Think of a better name for this div :)*/}
      <div className="ui secondary menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends?</a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
