import React from "react";
import WeatherOverview from "../DisplayWeatherOverview";

const weatherdisplay = () => {
  return (
    <div className="ui container">
      <div>
        <WeatherOverview />
      </div>
    </div>
  );
};

export default weatherdisplay;
