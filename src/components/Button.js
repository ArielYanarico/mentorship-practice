import React from "react";
import '../styles/Button.scss'
import PropTypes from 'prop-types';

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

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.string,
  type: PropTypes.string,
}

export default Button;
