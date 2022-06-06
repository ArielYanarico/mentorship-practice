import React from 'react';
import { useLocation } from 'react-router-dom';

const Error = () => {
    
  const { state } = useLocation();
  console.log("state: ", state);
  return(
    <>
      <div className="error-heading">
        <h1>{ `ERROR - ${state.errorCode}` }</h1>
      </div>
      <div className="error-body">
        <p>{ state.errorMsg }</p>
      </div>            
    </>
  );
}

export default Error;
