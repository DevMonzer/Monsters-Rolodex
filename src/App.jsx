import React, { useState } from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import "./App.css";

const App = () => {
  // If we are fetching data from an API we put the code inside the useEffect function
  // useEffect can handle automatic rendering based on specific changes to make code more efficient
  const [monsters, setMonsters] = useState([
    {
      name: "Bob",
      id: 1,
      email: "bob@mail.com",
    },
    {
      name: "Roy",
      id: 2,
      email: "roy@mail.com",
    },
    {
      name: "Zack",
      id: 3,
      email: "zack@mail.com",
    },
    {
      name: "Ziyash",
      id: 4,
      email: "ziyash@mail.com",
    },
    {
      name: "Sam",
      id: 5,
      email: "sam@mail.com",
    },
    {
      name: "Sally",
      id: 6,
      email: "sally@mail.com",
    },
    {
      name: "John",
      id: 7,
      email: "john@mail.com",
    },
    {
      name: "Anderson",
      id: 8,
      email: "andy@mail.com",
    },
  ]);

  const [searchField, setSearchField] = useState("");

  // To improve performance we packed up this code using a handler cuz it's outside the render function so it won't be changed every time the component is rendered
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    setSearchField(searchField);
  };

  // This is to filter out the results based on user's input
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        cssClass="monsters-search-box"
        onChangeJandler={onSearchChange}
        placeholder={"Search monsters"}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// The Same Code Using a Class Component:
/*

import React from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Bob",
          id: 1,
          email: "bob@mail.com",
        },
        {
          name: "Roy",
          id: 2,
          email: "roy@mail.com",
        },
        {
          name: "Zack",
          id: 3,
          email: "zack@mail.com",
        },
        {
          name: "Ziyash",
          id: 4,
          email: "ziyash@mail.com",
        },
        {
          name: "Sam",
          id: 5,
          email: "sam@mail.com",
        },
        {
          name: "Sally",
          id: 6,
          email: "sally@mail.com",
        },
        {
          name: "John",
          id: 7,
          email: "john@mail.com",
        },
        {
          name: "Anderson",
          id: 8,
          email: "andy@mail.com",
        },
      ],
      searchField: "",
    };
  }

  // To improve performance we packed up this code using a handler cuz it's outside the render function so it won't be changed every time the component is rendered
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // This is to filter out the results based on user's input
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          cssClass="monsters-search-box"
          onChangeJandler={this.onSearchChange}
          placeholder={"Search monsters"}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;


*/
