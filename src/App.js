import React from 'react';
import './App.css';

class App extends React.Component {

 constructor() {
   super();

   this.state = {
      monsters: []
   };
 }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then()
 }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.monsters.map(monster => 
              <h1 key={monster.id}>{monster.name}</h1>
            )}
        </header>
      </div>
    );
  }
}

export default App;
