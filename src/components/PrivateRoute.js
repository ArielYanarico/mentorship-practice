import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render() {
    const tokenStorage = localStorage.getItem('token')
    if (tokenStorage && tokenStorage !== 'undefined') {
      return (
        <>
          {this.props.children}
        </>
      )
    }
    else {
      return (
        <Navigate to='/login'></Navigate>
      )
    }
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
}

export default PrivateRoute;
