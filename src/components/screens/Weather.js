import React from "react";
import WeatherOverview from "../DisplayWeatherOverview";
import WeatherForecastWeek from "../DisplayWeatherWeek";

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
