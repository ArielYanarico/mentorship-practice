import React from 'react';
import loading from '../assets/loading.gif';

const Spinner = () =>{
    return(
        <div>
            <img src={ loading } alt={ 'loading...' }></img>
        </div>
    );
}

export default Spinner;