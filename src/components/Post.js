import React from 'react';
import Button from './Button.js'
import PropTypes from 'prop-types';
import '../styles/Post.scss';

const Post = ({ post, onClickEdit, setCurrentPost }) => {

  const handleClickEdit = () => {
    setCurrentPost(post)
    onClickEdit()
  }

  return (
    <div className='row'>
      <div className="post-text">
        <p>{post && post.text}</p>
      </div>
      <div className='post-buttons'>
        <Button label={'Edit'} onClick={handleClickEdit} ></Button>
        <Button label={'Delete'} ></Button>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
  onClickEdit: PropTypes.func,
  setCurrentPost: PropTypes.func,
}

export default Post;