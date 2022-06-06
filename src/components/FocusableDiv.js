import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FocusableDiv = ({ focus, onFocus, onClick }) => {
  const focusDiv = useRef()

  useEffect(() => {
    if (focus) {
      focusDiv.current.focus();
    }
  })

  return (
    <div ref={focusDiv} onFocus={onFocus} onClick={onClick} tabIndex={0}>
      Im a focus div
    </div>
  )

}

FocusableDiv.propTypes = {
  focus: PropTypes.bool,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
}

export default FocusableDiv
