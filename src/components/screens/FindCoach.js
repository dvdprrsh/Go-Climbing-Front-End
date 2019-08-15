import React from "react";
import ShowCoaches from "../ShowCoaches";
import faker from "faker";
import "./styles/FindCoach.css";

const FindCoach = () => {
  return (
    <div id="title" className="row">
      <p id="titleText">Find a Coach</p>
      <p id="subText">
        Choose below from our hand picked climbing coaches. Tap on their profile
        to learn more about them or to book a lesson.
      </p>
      <div id="card" className="ui container">
        <div>
          <ShowCoaches
            profileimage={faker.image.avatar()}
            name={faker.name.firstName()}
            price={faker.finance.amount()}
            description={faker.name.jobTitle()}
            sessions={faker.random.number()}
            joined={faker.date.month()}
          />
          <ShowCoaches
            profileimage={faker.image.avatar()}
            name={faker.name.firstName()}
            price={faker.finance.amount()}
            description={faker.name.jobTitle()}
            sessions={faker.random.number()}
            joined={faker.date.month()}
          />
          <ShowCoaches
            profileimage={faker.image.avatar()}
            name={faker.name.firstName()}
            price={faker.finance.amount()}
            description={faker.name.jobTitle()}
            sessions={faker.random.number()}
            joined={faker.date.month()}
          />
          <ShowCoaches
            profileimage={faker.image.avatar()}
            name={faker.name.firstName()}
            price={faker.finance.amount()}
            description={faker.name.jobTitle()}
            sessions={faker.random.number()}
            joined={faker.date.month()}
          />
        </div>
      </div>
    </div>
  );
};

export default FindCoach;
