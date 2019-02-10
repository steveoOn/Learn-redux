import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "./reducers/actions/postActions";

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItem = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItem}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);