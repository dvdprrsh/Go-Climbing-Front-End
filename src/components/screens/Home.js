import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

import coachImage from "../../images/coachImage.jpg";
import cragImage from "../../images/cragImage.jpg";
import forumImage from "../../images/forumImage.jpg";
import gymImage from "../../images/gymImage.jpg";

const linkImages = [
  {
    route: "/coach",
    src: coachImage,
    text: "FIND A COACH"
  },
  {
    route: "/forums",
    src: forumImage,
    text: "READ THE FORUM"
  },
  {
    route: "/find-gym",
    src: gymImage,
    text: "FIND A GYM"
  },
  {
    route: "/find-crag",
    src: cragImage,
    text: "FIND A CRAG"
  }
];

const card = (src, route, text) => (
  <div key={route} className="image">
    <Link to={route}>
      <img className="ui image card" alt={text} src={src} />
      <h1 id="centered">{text}</h1>
    </Link>
  </div>
);

export const Home = () => (
  <div id="card-layout" className="ui centered grid container images">
    {linkImages.map(link => card(link.src, link.route, link.text))}
  </div>
);
