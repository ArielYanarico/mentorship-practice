import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from 'react-select';
import '../styles/PostArea.scss';




const PostArea = () => {

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
        <Button label={ 'Publish' }></Button>
      </div>


    </div>
  );
}

export default PostArea;