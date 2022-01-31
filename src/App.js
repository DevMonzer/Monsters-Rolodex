import React, {Component} from 'react';
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

             <p>{this.state.string}</p>
            <button onClick={() => this.setState({string: 'hello Monzer'})}>Change Text</button>
            <button onClick={() => this.setState({string: ' Monzer'})}>Change Text</button>
         
        </header>
      </div>
    );
  }
}

export default App;
