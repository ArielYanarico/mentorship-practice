import React from 'react';
import Button from './Button.js'
import PropTypes from 'prop-types';
import '../styles/Post.scss';

const Post = ({ text, } ) =>{

  return(
    <div className="row">
      <div className="post-box">
        <p className="post-text">{ text }</p>
      </div>
      <Button label={ 'Edit' } ></Button>
      <Button label={ 'Delete' } ></Button>
    </div>
  )    
}

Post.propTypes={
  text: PropTypes.string,
}

export default Post;