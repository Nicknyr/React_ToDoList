import React, { Component } from 'react';
import './App.css';

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }

  // Sets the state onChange, passes input (e.target.value) to userInput
  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    // Makes a clone of list[] so we don't effect the original state
    let listArray = this.state.list;

    listArray.push(input);

    // Sets our listArray variable equal to list[], resets userInput each time it's changed
    this.setState ({
      list: listArray,
      userInput: ''
    });
  }

    /* On rendering
        On the click of the button whatever is typed in the input gets passed to addToList function
        Ul maps through each elemet of list[] and passes them as val and creates an li for each one
    */
  render() {
    return (
      <div className="app">
        <input
          // When input text is changed this passes the change to changeUserInput
          onChange={ (e) => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />
        <button onClick={ () => this.addToList(this.state.userInput)}>Add Recipe</button>

        <ul>
          {this.state.list.map( (val) => <li>{val}</li>)}
        </ul>

      </div>
    );
  }
}
