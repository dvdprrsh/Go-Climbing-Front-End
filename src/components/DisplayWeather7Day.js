import React from "react";
import Spinner from "../common-components/Spinner";
import "./screens/styles/PostList.css";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import "./screens/styles/Weather.css";

class Weather7Day extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
    forecastArray: []
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
        axios
          .get(
            "https://climbing-cors.herokuapp.com/https://weather.cit.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=" +
              this.state.lat +
              "&longitude=" +
              this.state.long +
              "&app_id=YMzC0O27tIk0W1Q8NI6T&app_code=pgp95AhYZSRz9PgUFpfxUg"
          )
          .then(result => {
            this.setState({
              forecastArray: result.data
            });
          });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.forecastArray.dailyForecasts !== undefined) {
      //var mphwind = Math.round(this.state.forecastArray.windSpeed * 1.15078);
      //var roundTempHigh = Math.round(m.highTemperature);
      //  var roundTempLow = Math.round(m.LowTemperature);
      return this.state.forecastArray.dailyForecasts.forecastLocation.forecast.map(
        m => (
          <div id="cardo" className="ui card">
            <div className="ui slide masked reveal image">
              <img alt="Weather" src={m.iconLink}></img>
            </div>
            <div className="content">
              {m.weekday}
              <h2 className="header">
                {this.state.forecastArray.dailyForecasts.forecastLocation.city},{" "}
                {this.state.forecastArray.dailyForecasts.forecastLocation.state}
              </h2>
              <br />
              <h2 className="header">
                {Math.round(m.highTemperature)}-{Math.round(m.lowTemperature)}°C
              </h2>
              <br />
              <h2 className="header">{m.description}</h2>
              <div className="meta">
                <span className="date">
                  Wind Direction: {m.windDesc}{" "}
                  {Math.round(m.windSpeed * 1.15078)}
                  MPH
                </span>
              </div>
            </div>
          </div>
        )
      );
    }
    return (
      <Spinner message="Loading user location... You may need to accept the location request." />
    );
  }

  render() {
    return (
      <div>
        <h4>7 Day Forecast</h4>
        <div id="maincard7Day">{this.renderContent()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Weather7Day);
