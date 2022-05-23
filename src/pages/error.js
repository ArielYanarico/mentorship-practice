import React from 'react';

const Error = (props) => {
  return(
    <>
      <div className="error-heading">
        <h1>{ `ERROR - ${props.errorCode}` }</h1>
      </div>
      <div className="error-body">
        <p>{ props.errorMsg }</p>
      </div>            
    </>
  );
}

export default Error;
