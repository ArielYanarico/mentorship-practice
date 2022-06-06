import React from 'react';
import '../styles/Spinner.scss'
import PropTypes from 'prop-types'

const Spinner = ({hidden = false}) =>{
  return(
    <svg className={`spinner ${hidden ? 'hidden' : ''}`} viewBox='0 0 50 50'>
      <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </svg>
  );
}

Spinner.propTypes = {
  hidden: PropTypes.any,
}

export default Spinner;
