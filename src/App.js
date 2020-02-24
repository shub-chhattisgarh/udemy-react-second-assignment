import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{
  
  state = {
    input: "",
  }

  inputHandler = event => {
    this.setState({
      input: event.target.value,
    });
  };

  getCharacterArray = text => {
    const charArray = text.split('');
    const charArrayModified = charArray.map((character, index) => (
      <Char character={character} key={index}/>
    ));
    return charArrayModified;
  }

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
        <div>
          {this.getCharacterArray(this.state.input)}
        </div>
      </div>
    );
  }
}

export default App;