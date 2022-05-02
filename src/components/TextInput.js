import React from "react";
import '../styles/Button.scss'

class TextInput extends React.Component {

  render() {
    const { label, onChange, value } = this.props;

    return (
      <>
        <label>{label}</label>
        <input className='textInput' type='text' onChange={onChange} value={value} />
      </>
    )
  }
}

export default TextInput;
