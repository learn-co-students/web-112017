import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import painting_data from './data/painting_data'
import PaintingsContainer from './paintings/PaintingsContainer'
import Navbar from './nav/Navbar'

class App extends Component {
  render() {
    return (
      <div className="container App">
        <Navbar />
        <PaintingsContainer paintings={ painting_data } />
      </div>
    );
  }
}


export default App;
