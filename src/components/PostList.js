import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/forum";
import UserHeader from "./UserHeader";

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
              <img src="https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image" />
            </div>
            <div className="content">
              <a className="header">{post.title}</a>
              <div className="meta">
                <a>Date</a>
                <a>Category</a>
              </div>
              <div className="description">{post.body}</div>
              <div className="extra">
                <img
                  src="https://www.proteomics.uni-freiburg.de/images/team/portrait-dummy.png/image"
                  className="ui circular avatar image"
                />
                Username
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return <div className="ui container">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
