import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../styles/Navigator.scss'

const Navigator = ({links}) => {
  return(
    <nav className='navigator'>
      <ul>
        {links.map((currentLink) => {
          return <li key={currentLink.text}><Link to={currentLink.path}>{currentLink.text}</Link></li>
        })}
      </ul>
      
      <Button label='Logout' />
    </nav>
  )
}

export default Navigator;