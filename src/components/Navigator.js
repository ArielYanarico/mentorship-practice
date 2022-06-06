import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/Navigator.scss'
import withHistory from '../hocs/withHistory';
import PropTypes from 'prop-types'

const Navigator = ({links, navigate}) => {
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return(
    <nav className='navigator'>
      <ul>
        {links.map((currentLink) => {
          return <li key={currentLink.text}><Link to={currentLink.path}>{currentLink.text}</Link></li>
        })}
      </ul>
      
      <Button label='Logout' onClick={ handleLogout }/>
    </nav>
  )
}

Navigator.propTypes = {
  links: PropTypes.array,
  navigate: PropTypes.func,
}

export default withHistory(Navigator);