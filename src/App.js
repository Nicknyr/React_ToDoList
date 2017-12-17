import React, { Component } from 'react';
import './App.css';
import PumpkinPie from './Pumpkin_pie';
import Spaghetti from './Spaghetti';
import OnionPie from './Onion_pie';
import AddRecipe from './Add_recipe';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    }
  }


  render() {
    return (
      <div className="main">

        <PumpkinPie />
        <Spaghetti />
        <OnionPie />
        <AddRecipe />

      </div>
    );
  }
}
