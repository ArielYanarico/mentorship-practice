import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from 'react-select';
import '../styles/PostBox.scss';




const PostBox = ({ onClick }) => {

  const [postText, setPostText] = useState('');
  const labelOptions = [{'value': 1, 'label': 'friends'}, {'value': 2, 'label': 'public'}]

  return (
    <div className="text-wrapper">
      <TextArea 
        className='test-text' 
        placeHolder='What is going on?' 
        value={ postText } 
        onChange={setPostText}
      >
      </TextArea>
      <div className="row">
        <Select 
          options={ labelOptions }
          defaultValue={ labelOptions[0]}></Select>             
        <Button label={ 'Publish' } onClick={ onClick }></Button>
      </div>


    </div>
  );
}

PostBox.propTypes = {
  onClick: PropTypes.func,
}

export default PostBox;