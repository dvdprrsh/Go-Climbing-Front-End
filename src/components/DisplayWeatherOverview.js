import React from "react";
import Spinner from "../common-components/Spinner";
import "./screens/styles/PostList.css";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import "./screens/styles/Weather.css";

class WeatherOverview extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
    test: "",
    mphwind: "",
    windround: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
        axios
          .get(
            "https://climbing-cors.herokuapp.com/https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=" +
              this.state.lat +
              "&longitude=" +
              this.state.long +
              "&oneobservation=true&app_id=YMzC0O27tIk0W1Q8NI6T&app_code=pgp95AhYZSRz9PgUFpfxUg"
          )
          .then(result => {
            this.setState({
              test: result.data.observations.location[0].observation[0]
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

    if (!this.state.errorMessage && this.state.lat) {
      var mphwind = Math.round(this.state.test.windSpeed * 1.15078);
      return (
        <div className="ui card">
          <div className="ui slide masked reveal image">
            <img alt="Weather" src={this.state.test.iconLink}></img>
          </div>
          <div className="content">
            <h2 className="header">
              {this.state.test.city}, {this.state.test.state}
            </h2>
            <br />
            <h2 className="header">{this.state.test.temperature}°C</h2>
            <br />
            <h2 className="header">{this.state.test.description}</h2>
            <div className="meta">
              <span className="date">
                Wind Direction:{this.state.test.windDesc}, {mphwind} MPH
              </span>
            </div>
          </div>
          <div className="extra content">
            <h4>
              <i className="clock"></i>Last updated:{" "}
              {this.state.test.ageMinutes}m ago
            </h4>
          </div>
        </div>
      );
    }
    return (
      <Spinner message="Loading user location... You may need to accept the location request." />
    );
  }

  render() {
    return <div id="maincard">{this.renderContent()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(WeatherOverview);
