import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/Navigator.scss'
import withHistory from '../hocs/withHistory';

const Navigator = ({links, navigate}) => {
  
  const handleLogout = () => {
    console.log('pressed');
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

export default withHistory(Navigator);