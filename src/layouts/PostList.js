import React from 'react';
//import PropTypes from 'prop-types';
import Post from '../components/Post';


const PostList = () => {
  return(
    <div>
      <ul>
        <li><Post text={ 'testing' }></Post></li>
        <li><Post text={ 'testing 2' }></Post></li>
      </ul>
    </div>
  )
}

export default PostList;