import React, { useState } from 'react';
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

export default PostContext;
