import React from "react";
import '../styles/Button.scss'

class Button extends React.Component {

  render() {
    const { label, onClick, buttonType, type ='button' } = this.props;

    return (
      <input 
        className={`button ${buttonType}`} 
        onClick={ onClick } 
        type={ type } 
        value={ label } 
      />
    )
  }
}

export default Button;
