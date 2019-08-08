import React from "react";
import Spinner from "../common-components/Spinner";
import "./styles/PostList.css";
import axios from "axios";
import { getWeather } from "../actions/forum";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";

class Weather extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

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
          .then(result => {});
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
        <div>
          Latitude: {this.state.lat}
          <br />
          Longitude: {this.state.long}
        </div>
      );
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Weather);
