import React from "react";
import ShowCoaches from "../ShowCoaches";
import faker from "faker";
import "./styles/FindCoach.css";

const FindCoach = () => {
  return (
    <div className="row">
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
