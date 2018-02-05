import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import painting_data from './data/painting_data'
import PaintingsContainer from './paintings/PaintingsContainer'

class App extends Component {
  render() {
    return (
      <div className="container App">
        <h1>Art Gallery</h1>
        <PaintingsContainer paintings={ painting_data } />
      </div>
    );
  }
}

export default App;
