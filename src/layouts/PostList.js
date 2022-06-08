import React from "react";
import PropTypes from 'prop-types';
import Post from "../components/Post";

const PostList = ({ posts=[] }) => {
  return (
    <div>
      <ul>
        {posts.map((currentPost) => (
          <li key= { currentPost._id }>
            <Post text={ currentPost.text }></Post>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
}

export default PostList;
