import React from "react";
import PropTypes from 'prop-types';
import Post from "../components/Post";
import PostContext from "../contexts/PostContext";

const PostList = ({ posts = [], onClickEdit }) => {
  return (
    <PostContext.Consumer>
      {({ setCurrentPost }) => (
        <div>
          <ul>
            {posts.map((currentPost) => (
              <li key={currentPost._id}>
                <Post post={currentPost} onClickEdit={onClickEdit} setCurrentPost={setCurrentPost}></Post>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PostContext.Consumer>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
  onClickEdit: PropTypes.func
}

export default PostList;
