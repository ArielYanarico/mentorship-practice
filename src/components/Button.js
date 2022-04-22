import React from "react";
import '../styles/Button.scss'

class Button extends React.Component {

  render() {
    const { label, onClick, buttonType } = this.props;

    return (
      <div className={`button ${buttonType}`} onClick={ onClick }>{ label }</div>
    )
  }
}

export default Button;
