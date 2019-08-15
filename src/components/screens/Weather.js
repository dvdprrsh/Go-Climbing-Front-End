import React from "react";
import WeatherOverview from "../DisplayWeatherOverview";
import Weather7Day from "../DisplayWeather7Day";

const weatherdisplay = () => {
  return (
    <div className="ui container">
      <div>
        <WeatherOverview />
        <Weather7Day />
      </div>
    </div>
  );
};

export default weatherdisplay;
