import React from 'react';
import './Char.css';

function Char(props){
    return (
        <div className='Char'>
            {props.character === ' '?<span>&#9141;</span>: props.character}
        </div>
    );
}

export default Char;