import React from "react";
import '../styles/TextInput.scss'

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

export default TextInput;
