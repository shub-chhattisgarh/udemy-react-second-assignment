import React from 'react';
import './Char.css';

function Char(props){
    return (
        <div className='Char' data-index={props.index} onClick={props.click}>
            {props.character === ' '?<span>&#9141;</span>: props.character}
        </div>
    );
}

export default Char;