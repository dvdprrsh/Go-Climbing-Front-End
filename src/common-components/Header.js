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
    icon: "gym icon",
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
    <div id="mobile-tabs">
      <ul className="ui menu tabs-list">
        {headerTabs.map(link => (
          <li id="listItem" className="item">
            <Link key={link.route} to={link.route}>
              <span>
                <i className={link.icon} style={{ color: "black" }} />
              </span>
              <span id="itemText">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
