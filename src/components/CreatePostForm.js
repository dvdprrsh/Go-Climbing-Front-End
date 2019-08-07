import React, { Component } from "react";
import axios from "axios";
import forumJsonAPI from "../apis/forumJsonAPI";

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
    // get our form data out of state
    const { userId } = this.state.userId;
    const { postId } = this.state.postId;
    const { title } = this.state.title;
    const { body } = this.state.body;
    const { username } = this.state.username;
    console.log(this.state);

    axios
      .post(
        "http://51.255.163.79:8080/https://empiredigital.eu/phptest/?uid=" +
          this.state.userId +
          "&postid=" +
          this.state.postId +
          "&posttitle=" +
          this.state.title +
          "&postbody=" +
          this.state.body +
          "&username=" +
          this.state.username
      )
      .then(result => {
        window.location.reload();
      });
  };

  render() {
    const { userId, postId, title, body, username } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        userid
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={this.onChange}
        />
        postid
        <input
          type="text"
          name="postId"
          value={postId}
          onChange={this.onChange}
        />
        title
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
        />
        body
        <input type="text" name="body" value={body} onChange={this.onChange} />
        username
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CreatePostForm;
