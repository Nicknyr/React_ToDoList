import React, { Component } from 'react';
import './App.css';

export default class PumpkinPie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: ["Pumpkin puree", "Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"],
      show: true
    }
  }

  delete() {
    this.setState({
      show: false
    })
  }


  render() {
    return (
      <div>
      {
        this.state.show ?
          <div className="Recipe_item">
            <h2>Ingredients</h2>

            <ul>
              {this.state.ingredients.map( (val) => <li>{val}</li>)}
            </ul>

            <button onClick={ () => this.delete()}>Delete</button>
            <button>Edit</button>

          </div>
          :null
      }
      </div>
    );
  }
}
