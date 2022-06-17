import React from 'react';
import PropTypes from 'prop-types';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from 'react-select';
import '../styles/PostBox.scss';

const PostBox = ({ onClick, onPublishSelect, postText, setPostText }) => {

  const labelOptions = [{ 'value': 1, 'label': 'friends' }, { 'value': 2, 'label': 'public' }]


  return (
    <div className="text-wrapper">
      <TextArea
        className='test-text'
        placeHolder='What is going on?'
        value={postText}
        onChange={setPostText}
      >
      </TextArea>
      <div className="row">
        <Select
          options={labelOptions}
          defaultValue={labelOptions[0]}
          onChange={onPublishSelect}></Select>
        <Button label={'Publish'} onClick={onClick} ></Button>
      </div>

    </div>
  );
}

PostBox.propTypes = {
  onClick: PropTypes.func,
  onPublishSelect: PropTypes.func,
  postText: PropTypes.string,
  setPostText: PropTypes.func,
}

export default PostBox;