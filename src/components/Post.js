import React from 'react';
import Button from './Button.js'
import PropTypes from 'prop-types';
import '../styles/Post.scss';

const Post = ({ text, } ) =>{
  console.log(text);
  return(
    <div className='row'>
      <div className="post-text">
        <p>{ text }</p>
      </div>
      <div className='post-buttons'>
        <Button label={ 'Edit' } ></Button>
        <Button label={ 'Delete' } ></Button>
      </div>
    </div>
  )    
}

Post.propTypes={
  text: PropTypes.string,
}

export default Post;