import React from 'react';
import Button from './Button.js'
import PropTypes from 'prop-types';

const Post = ({ text, } ) =>{

  return(
    <div className="row">
      <div className="post-box">
        <p className="post-text">{ text }</p>
      </div>
      <Button value={ 'Edit' } ></Button>
      <Button value={ 'Delete' } ></Button>
    </div>
  )    
}

Post.propTypes={
  text: PropTypes.string,
}

export default Post;