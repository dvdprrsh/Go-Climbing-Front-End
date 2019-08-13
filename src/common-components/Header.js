import React from "react";
import "./common-styles/Header.css";

import { Link } from "react-router-dom";

const headerTabs = [
  {
    route: "/",
    icon: "home icon",
    text: "Home"
  },
  {
    route: "/forums",
    icon: "comments icon",
    text: "Forums"
  },
  {
    route: "/find-gym",
    icon: "search icon",
    text: "Find a Gym"
  },
  {
    route: "/find-crag",
    icon: "map icon",
    text: "Find a Crag"
  },
  {
    route: "/weather",
    icon: "cloud icon",
    text: "Weather"
  },
  {
    route: "/find-coach",
    icon: "blind icon",
    text: "Find a Coach"
  }
];

export const Header = () => {
  return (
    <div className="ui attached stackable menu">
      {headerTabs.map(link => (
        <Link key={link.route} to={link.route} className="item">
          <i className={link.icon} />
          {link.text}
        </Link>
      ))}
      <div className="right item">
        <div className="ui icon input">
          <input type="text" placeholder="Search...." />
          <i className="search link icon" />
        </div>
      </div>
    </div>
  );
};
