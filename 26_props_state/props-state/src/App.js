import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css'

import { Navbar } from './Navbar'
import PaintingList from './PaintingList'
import painting_data from './painting_data'

console.log(painting_data)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Painting List" profSlogan="Painting Gallery" unprofSlogan="YO PAINTINGS HERE" />
        <PaintingList paintings={painting_data} />
      </div>
    );
  }
}

export default App;
