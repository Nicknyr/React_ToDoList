import React, { Component } from 'react';
import './App.css';

export default class PumpkinPie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: ["Pumpkin puree", "Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"],
      show: true,
      editForm: false
    }
  }

  delete() {
    this.setState({
      show: false
    })
  }

  edit() {
    this.setState({
      editForm: true
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
            <button onClick={ () => this.edit()}>Edit</button>

          </div>
          :null
      }

      {
        this.state.editForm ?
          <div className="edit-form">
            <h2>Edit Recipe</h2>

            <label>Recipe</label>
            <input type="text" placeholder="Recipe name"></input>

            <label>Ingredients</label>
            <textarea rows="4" cols="63" placeholder="Enter ingredients"></textarea>

            <hr/>

            <div className="buttons-container">
              <button>Edit Recipe</button>
              <button>Close</button>
            </div>

          </div>
        :null
      }
      </div>
    );
  }
}
