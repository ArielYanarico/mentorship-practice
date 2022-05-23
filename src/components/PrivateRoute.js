import React from 'react'
import { Navigate } from 'react-router-dom'

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

export default PrivateRoute;
