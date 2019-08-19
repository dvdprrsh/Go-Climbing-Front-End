import React from "react";
import ShowCoaches from "../ShowCoaches";
import faker from "faker";
import "./styles/FindCoach.css";

const coaches = [
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  },
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  },
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  },
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  },
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  },
  {
    profileimage: faker.image.avatar(),
    name: faker.name.firstName(),
    price: faker.finance.amount(),
    description: faker.name.jobTitle(),
    sessions: faker.random.number(),
    joined: faker.date.month()
  }
];

const FindCoach = () => {
  return (
    <div id="title" className="row">
      <p id="titleText">Find a Coach</p>
      <p id="subText">
        Choose below from our hand picked climbing coaches. Tap on their profile
        to learn more about them or to book a lesson.
      </p>
      <div id="container">
        {coaches.map(coach => (
          <ShowCoaches {...coach} />
        ))}
      </div>
    </div>
  );
};

export default FindCoach;
