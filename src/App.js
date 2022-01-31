import React from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list-component';

class App extends React.Component {

 constructor() {
   super();

   this.state = {
      monsters: []
   };
 }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))
 }
  render(){
    return (
      <div className="App">
        <CardList/>
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
