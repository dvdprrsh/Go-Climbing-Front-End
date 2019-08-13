import React from "react";

const ShowCoaches = props => {
  return (
    <div className="ui container">
      <div id="thisone" className="ui link cards">
        <div className="card">
          <div className="image">
            <img alt="Coach Profile" src={props.profileimage} />
          </div>
          <div className="content">
            <div className="header">{props.name}</div>
            <div className="meta">
              <h3>£{props.price} per session</h3>
            </div>
            <div className="description">{props.description}</div>
          </div>
          <div className="extra content">
            <span className="right floated">Member Since {props.joined}</span>
            <span>
              <i className="user icon"></i>
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
