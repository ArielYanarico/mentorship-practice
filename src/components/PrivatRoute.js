import React from 'react'
import { Navigate } from 'react-router-dom'


class PrivateRoute extends React.Component {
    /*constructor(props){
        super(props);
    }*/
     

    render(){
        const tokenStorage = localStorage.getItem('token')
        console.log(tokenStorage);
        if (tokenStorage) {
            return(
                <>
                    { this.props.children }
                </>
            )
        }
        else {
            return(
                <Navigate to='/login'></Navigate>
            )
        }
        
    }
}

export default PrivateRoute;