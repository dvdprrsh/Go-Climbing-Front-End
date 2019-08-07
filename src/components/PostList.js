import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import UserHeader from "./UserHeader";
import faker from "faker";
import CreatePostForm from "./CreatePostForm";
import "./styles/PostList.css";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    console.log(this.props.posts);
    return this.props.posts.map(post => (
      <div className="postListMain">
        <div className="ui relaxed divided items" key={post.id}>
          <div className="item">
            <div className="ui small image">
              <img src="https://pkf-francisclarkcareers.co.uk/wp-content/uploads/2017/10/placeholder.png" />
            </div>
            <div className="content">
              <a className="header">{post.title}</a>
              <div className="meta">
                <a>{post.postDateTime}</a>
                <a>Category</a>
              </div>
              <div className="description">{post.body}</div>
              <div className="extra">
                <button id="deletebutton" className="circular ui icon button">
                  <i className="trash alternate outline icon"></i>
                </button>
                <img
                  src={faker.image.avatar()}
                  className="ui circular avatar image"
                />
                {post.username}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui container">
        <CreatePostForm />
        {this.renderList()}
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
)(PostList);
