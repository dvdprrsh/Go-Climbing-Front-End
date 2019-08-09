import React from "react";
import Spinner from "../common-components/Spinner";
import "./screens/styles/PostList.css";
import axios from "axios";
import { getWeather } from "../actions/forum";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import "./screens/styles/Weather.css";

class Weather extends React.Component {
  state = { lat: null, long: null, errorMessage: "", test: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
        axios
          .get(
            "http://51.255.163.79:8080/https://weather.cit.api.here.com/weather/1.0/report.json?product=observation&latitude=" +
              this.state.lat +
              "&longitude=" +
              this.state.long +
              "&oneobservation=true&app_id=YMzC0O27tIk0W1Q8NI6T&app_code=pgp95AhYZSRz9PgUFpfxUg"
          )
          .then(result => {
            this.setState({
              test: result.data.observations.location[0].observation[0]
            });
            console.log(result.data.observations.location[0].observation[0]);
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
      return (
        <div className="ui card">
          <div className="ui slide masked reveal image">
            <img src={this.state.test.iconLink}></img>
          </div>
          <div className="content">
            <a className="header">
              {this.state.test.city}, {this.state.test.state}
            </a>
            <br />
            <a className="header">{this.state.test.temperature}°C</a>
            <br />
            <a className="header">{this.state.test.description}</a>
            <div className="meta">
              <span className="date">
                Wind Direction:{this.state.test.windDesc},{" "}
                {this.state.test.windSpeed} Knots
              </span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="clock"></i>Last updated:{" "}
              {this.state.test.ageMinutes}m ago
            </a>
          </div>
        </div>
      );
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return (
      <div id="maincard" className="border red">
        {this.renderContent()}
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
)(Weather);
