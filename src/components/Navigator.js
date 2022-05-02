import React from 'react';
import { Link } from 'react-router-dom';


const Navigator = (props) => {
    console.log(props)
    return(
        <nav>
            <ul>
                <li>
                    <Link to={ props.link[0] }>{ props.textLink[0] }</Link>
                </li>
                <li>
                    <Link to={ props.link[1] }>{ props.textLink[1] }</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigator;