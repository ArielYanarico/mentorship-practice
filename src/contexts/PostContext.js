import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const PostContext = React.createContext({ currentPost: {}, setCurrentPost: () => { } })

export const PostProvider = ({ children }) => {

  const [currentPost, setCurrentPost] = useState({});

  return (
    <PostContext.Provider value={{ currentPost, setCurrentPost }}>
      {children}
    </PostContext.Provider>
  );
}

PostProvider.propTypes = {
  children: PropTypes.any
}

export const useCurrentPost = () => {
  const currentPostHook = useContext(PostContext);
  return currentPostHook;
}

export default PostContext;
