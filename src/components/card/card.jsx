import React, { Component } from "react";
import "./card.css";

const card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt="monster"
        key={id}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default card;

// This is how the code is written using a class component

/*

import React from "react";
import img from "../../hunter.jpg";
import "./card.css";

export default class card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img src={img} alt={`${name}`} style={{ width: "100%" }} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

*/
