import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import faker from "faker";
import CreatePostForm from "./CreatePostForm";
import "./screens/styles/PostList.css";
import { DeleteButton } from "./DeleteButton";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => (
      <div className="postListMain">
        <div className="ui relaxed divided items" id={post.id}>
          <div className="item">
            <div className="ui small image">
              <img
                alt="Forum Post"
                src="https://pkf-francisclarkcareers.co.uk/wp-content/uploads/2017/10/placeholder.png"
              />
            </div>
            <div className="content">
              <h2 className="header">{post.title}</h2>
              <div className="meta">
                <span>{post.postDateTime}</span>
                <span>Category</span>
              </div>
              <div className="description">{post.body}</div>
              <div className="extra" id={post.id}>
                <DeleteButton postId={post.id} />
                <img
                  alt="Avatar"
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
