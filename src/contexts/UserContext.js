import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const UserContext = React.createContext({ currentUser: {}, setCurrentUser: () => { } })

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>{ children }</UserContext.Provider>
  )  
}

UserProvider.propTypes = {
  children: PropTypes.any
}

export const useCurrentUser= () => {
  const currentUserHook = useContext(UserContext);
  return currentUserHook;
}

export default UserContext;