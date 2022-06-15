import React from "react";
import PropTypes from 'prop-types';
import Post from "../components/Post";

const PostList = ({ posts=[], onClickEdit }) => {
  return (
    <div>
      <ul>
        {posts.map((currentPost) => (
          <li key= { currentPost._id }>
            <Post text={ currentPost.text } onClickEdit={onClickEdit}></Post>
          </li>
        ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  onClickEdit: PropTypes.func
}

export default PostList;
