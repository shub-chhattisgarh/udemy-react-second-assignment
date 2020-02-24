import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component{
  
  state = {
    input: "",
  }

  inputHandler = event => {
    this.setState({
      input: event.target.value,
    });
  };

  render(){
    const style = {
      padding: '10px',
      margin: '16px',
      width: '400px',
      fontSize: '1.2rem'
    }
    return (
      <div className='App'>
        <input type='text' value={this.state.input} onChange={this.inputHandler} placeholder='type your text here' style={style}/><br/>
        <p>The length of the Input is {this.state.input.length}</p>
        <Validation text={this.state.input}/>
      </div>
    );
  }
}

export default App;