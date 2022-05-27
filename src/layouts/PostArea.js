import React, { useState } from 'react';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Select from 'react-select';
import '../styles/PostArea.scss';




const PostArea = () =>{

    const [postText, setPostText] = useState('');


    return(
        <div className="text-wrapper">
            <TextArea 
                className='test-text' 
                placeHolder='What is going on?' 
                value={ postText } 
                onChange={setPostText}>
            </TextArea>
            <div className="row">
                <Select></Select>             
                <Button></Button>
            </div>
            

        </div>
    );
}

export default PostArea;