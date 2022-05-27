import React from 'react';
import PropTypes from 'prop-types'; 
import '../styles/TextArea.scss';



const TextArea = ({ className='text', placeHolder, onChange, value }) =>{
    return (
        <textarea className={ className } 
        placeholder={ placeHolder } 
        onChange={ onChange } value={value}
        ></textarea> 
    )
}

TextArea.propTypes ={
    className: PropTypes.string,
    placeHolder: PropTypes.string,
}

export default TextArea;