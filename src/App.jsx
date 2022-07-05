import React, { useState } from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import "./App.css";

const App = () => {
  // If we are fetching data from an API we put the code inside the useEffect function
  // useEffect can handle automatic rendering based on specific changes to make code more efficient
  const [monsters, setMonsters] = useState([
    {
      name: "Bethany",
      id: "62c44ae27def85df3605defa",
      email: "bethanycarlson@providco.com",
    },
    {
      name: "Davidson",
      id: "62c44ae20f6c4f190eea1668",
      email: "davidsoncarlson@providco.com",
    },
    {
      name: "Wiley",
      id: "62c44ae22dd4cb6d03e64aff",
      email: "wileycarlson@providco.com",
    },
    {
      name: "Hansen",
      id: "62c44ae2c3e1db64733100a6",
      email: "hansencarlson@providco.com",
    },
    {
      name: "Terry",
      id: "62c44ae298a4d8128c3b80f6",
      email: "terrycarlson@providco.com",
    },
    {
      name: "Zimmerman",
      id: "62c44ae2413c60182105feab",
      email: "zimmermancarlson@providco.com",
    },
    {
      name: "Mari",
      id: "62c44ae2ddf4986b8abb373a",
      email: "maricarlson@providco.com",
    },
    {
      name: "Ashlee",
      id: "62c44ae228fec20724751320",
      email: "ashleecarlson@providco.com",
    },
    {
      name: "Jeri",
      id: "62c44ae2ee0a2fcf11d4ba5b",
      email: "jericarlson@providco.com",
    },
    {
      name: "Beck",
      id: "62c44ae2ad46a2d394b999f8",
      email: "beckcarlson@providco.com",
    },
    {
      name: "Eunice",
      id: "62c44ae238c140f8d6030ddd",
      email: "eunicecarlson@providco.com",
    },
    {
      name: "Martinez",
      id: "62c44ae27601c22b8e1d27f6",
      email: "martinezcarlson@providco.com",
    },
    {
      name: "Robert",
      id: "62c44ae23a6e818548da9e4c",
      email: "robertcarlson@providco.com",
    },
    {
      name: "Cynthia",
      id: "62c44ae22cbee7f9b0eca26f",
      email: "cynthiacarlson@providco.com",
    },
    {
      name: "Ball",
      id: "62c44ae2a6888007ce2fbe25",
      email: "ballcarlson@providco.com",
    },
    {
      name: "Evangelina",
      id: "62c44ae2dbc6d4ca6af227df",
      email: "evangelinacarlson@providco.com",
    },
    {
      name: "Alta",
      id: "62c44ae2757b98082b5bdb00",
      email: "altacarlson@providco.com",
    },
    {
      name: "Judith",
      id: "62c44ae2bd3851dee2f49ceb",
      email: "judithcarlson@providco.com",
    },
    {
      name: "Guzman",
      id: "62c44ae2af6b438d83d1307e",
      email: "guzmancarlson@providco.com",
    },
    {
      name: "Nita",
      id: "62c44ae2e2f5aa5c15787a07",
      email: "nitacarlson@providco.com",
    },
    {
      name: "Manning",
      id: "62c44ae2b60b8cc96f63b22f",
      email: "manningcarlson@providco.com",
    },
    {
      name: "Boyd",
      id: "62c44ae2ac89379d283b2dc6",
      email: "boydcarlson@providco.com",
    },
    {
      name: "Sandra",
      id: "62c44ae26238f90081d6428f",
      email: "sandracarlson@providco.com",
    },
    {
      name: "Gordon",
      id: "62c44ae2da18b3c0d17feb69",
      email: "gordoncarlson@providco.com",
    },
    {
      name: "Melba",
      id: "62c44ae293241e7e2fcf6d4f",
      email: "melbacarlson@providco.com",
    },
    {
      name: "Rutledge",
      id: "62c44ae2baf6e63a27856441",
      email: "rutledgecarlson@providco.com",
    },
    {
      name: "Leola",
      id: "62c44ae2286795474f99afe9",
      email: "leolacarlson@providco.com",
    },
    {
      name: "Cain",
      id: "62c44ae25eea8dac45e5c8aa",
      email: "caincarlson@providco.com",
    },
    {
      name: "Francesca",
      id: "62c44ae2ffec0edcba3e02f9",
      email: "francescacarlson@providco.com",
    },
    {
      name: "Ashley",
      id: "62c44ae2636a044fc3516be0",
      email: "ashleycarlson@providco.com",
    },
    {
      name: "Lara",
      id: "62c44ae2a2ed6a0de573fbee",
      email: "laracarlson@providco.com",
    },
    {
      name: "Moore",
      id: "62c44ae29e1f0260a8945ff0",
      email: "moorecarlson@providco.com",
    },
    {
      name: "Janette",
      id: "62c44ae29b0e6f8a1473f841",
      email: "janettecarlson@providco.com",
    },
    {
      name: "Charlene",
      id: "62c44ae27451b44eb17a3589",
      email: "charlenecarlson@providco.com",
    },
    {
      name: "Parks",
      id: "62c44ae27330261c1a6f0fb0",
      email: "parkscarlson@providco.com",
    },
    {
      name: "Barrera",
      id: "62c44ae2b23ab7fa3dde7762",
      email: "barreracarlson@providco.com",
    },
    {
      name: "Dora",
      id: "62c44ae2e8f75b004a5c0d78",
      email: "doracarlson@providco.com",
    },
    {
      name: "Latoya",
      id: "62c44ae22b19400a37eeec66",
      email: "latoyacarlson@providco.com",
    },
    {
      name: "Reilly",
      id: "62c44ae2a893729b5e69b5ae",
      email: "reillycarlson@providco.com",
    },
    {
      name: "Genevieve",
      id: "62c44ae20892d3d0609880c3",
      email: "genevievecarlson@providco.com",
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
