import React, {Component} from 'react';
import './Validation.css';

class Validation extends Component{

    minimumLength = 5;
    maxLength = 15;

    checkLength = text => {
        if(text.length < this.minimumLength){
            return (<p className='error'>Too Short</p>);
        } else if(text.length > 15){
            return (<p className='error'>Too Long</p>);
        } else{
            return "";
        }
    }

    render(){
        return (
            <div>
                {this.checkLength(this.props.text)}
            </div>
        );
    }
}

export default Validation;