import React from "react";
import '../styles/Button.scss'

class Button extends React.Component {

  render() {
    const {label, onClick} = this.props;
    return (
      <div className='button' onClick={onClick}>{label}</div>
    )
  }
}

export default Button;
