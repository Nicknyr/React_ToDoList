import React, { Component } from 'react';
import './App.css';

export default class Spaghetti extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: ["Noodles", "Tomato sauce", "(optional) Meatballs"]
    }
  }


  render() {
    return (
      <div className="Recipe_item">
        <h2>Ingredients</h2>

        <ul>
          {this.state.ingredients.map( (val) => <li>{val}</li>)}
        </ul>

        <button>Delete</button>
        <button>Edit</button>

      </div>
    );
  }
}
