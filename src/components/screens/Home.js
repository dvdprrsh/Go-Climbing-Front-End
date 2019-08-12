import React from "react";
import { Link } from "react-router-dom";

import coachImage from "../../images/coachImage.jpg";
import cragImage from "../../images/cragImage.jpg";
import forumImage from "../../images/forumImage.jpg";
import gymImage from "../../images/gymImage.jpg";

const linkImages = [
  {
    route: "/coach",
    src: coachImage,
    text: "Find a Coach"
  },
  {
    route: "/forums",
    src: forumImage,
    text: "Forums"
  },
  {
    route: "/find-gym",
    src: gymImage,
    text: "Find a Gym"
  },
  {
    route: "/find-crag",
    src: cragImage,
    text: "Find a Crag"
  }
];

const card = (src, route, text) => (
  <Link key={src} to={route}>
    <img className="ui image card" alt={text} src={src} />
  </Link>
);

export const Home = () => (
  <div
    style={{ display: "flex", flexWrap: "wrap" }}
    className="ui centered grid containers images"
  >
    {linkImages.map(link => card(link.src, link.route, link.text))}
  </div>
);
