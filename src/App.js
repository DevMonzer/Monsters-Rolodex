import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 constructor() {
   super();

   this.state = {
      string: 'hello monzer'
   };
 }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
        </a>
             <p>{this.state.string}</p>
            <button onClick={() => this.setState({string: 'hello Monzer'})}>Change Text</button>
            <button onClick={() => this.setState({string: ' Monzer'})}>Change Text</button>
         
        </header>
      </div>
    );
  }
}

export default App;
