import React from "react";

const ShowCoaches = props => {
  return (
    <div className="ui container">
      <div id="thisone" class="ui link cards">
        <div class="card">
          <div class="image">
            <img src={props.profileimage} />
          </div>
          <div class="content">
            <div class="header">{props.name}</div>
            <div class="meta">
              <a>£{props.price} per session</a>
            </div>
            <div class="description">{props.description}</div>
          </div>
          <div class="extra content">
            <span class="right floated">Member Since {props.joined}</span>
            <span>
              <i class="user icon"></i>
              {props.sessions} Customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ShowCoaches.defaultProps = {
  name: "Loading....",
  description: "Loading....",
  sessions: "Loading...."
};

export default ShowCoaches;
