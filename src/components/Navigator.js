import React from 'react';
import { Link } from 'react-router-dom';


const Navigator = ({links}) => {
  return(
    <nav>
      <ul>
        {links.map((currentLink) => {
          return <li key={currentLink.text}><Link to={currentLink.path}>{currentLink.text}</Link></li>
        })}
      </ul>
    </nav>
  )
}

export default Navigator;