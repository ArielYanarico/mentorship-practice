import React, { useEffect, useRef } from 'react';

const FocusableDiv = ({ focus, onFocus, onClick }) => {
  const focusDiv = useRef()

  useEffect(() => {
    if (focus) {
      focusDiv.current.focus();
    }
  })

  return (
    <div ref={focusDiv} onFocus={onFocus} onClick={onClick} tabIndex={0}>
      I'm a focus div
    </div>
  )

}

export default FocusableDiv
