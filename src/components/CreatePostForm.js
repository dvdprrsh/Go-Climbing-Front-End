import React, { Component } from "react";
import axios from "axios";
import "./styles/CreatePostForm.css";

class CreatePostForm extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      postId: "",
      title: "",
      body: "",
      username: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { userId } = this.state.userId;
    const { postId } = this.state.postId;
    const { title } = this.state.title;
    const { body } = this.state.body;
    const { username } = this.state.username;
    console.log(this.state);

    axios
      .post(
        "http://51.255.163.79:8080/https://empiredigital.eu/goclimbing/create.php?postid=" +
          "&posttitle=" +
          this.state.title +
          "&postbody=" +
          this.state.body +
          "&username=" +
          this.state.username
      )
      .then(result => {
        console.log("posted, refreshng");
        window.location.reload(true);
      });
  };

  render() {
    const { userId, postId, title, body, username } = this.state;
    return (
      <div id="testing" className="ui form">
        <form onSubmit={this.onSubmit}>
          <div id="inputs" className="ui input">
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div id="inputs" className="ui input">
            <input
              type="text"
              name="body"
              placeholder="Body Text"
              value={body}
              onChange={this.onChange}
            />
          </div>
          <div id="inputs" className="ui input">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.onChange}
            />
          </div>
          <button id="submitbtn" className="fluid ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
