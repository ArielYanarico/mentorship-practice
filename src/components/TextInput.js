import React from "react";
import '../styles/TextInput.scss'
import PropTypes from 'prop-types';

class TextInput extends React.Component {

  render() {
    const { label, onChange, value } = this.props;

    return (
      <div className='textInput'>
        <label>{label}</label>
        <input type='text' onChange={onChange} value={value} />
      </div>
    )
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default TextInput;
