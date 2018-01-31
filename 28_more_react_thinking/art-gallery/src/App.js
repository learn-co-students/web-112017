import React, { Component } from 'react';
import './App.css';

import painting_data from './data/painting_data'
import PaintingsContainer from './paintings/PaintingsContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <p>nothing to see here...</p>
          </div>
        </div>
        <PaintingsContainer paintings={ painting_data } />
      </div>
    );
  }
}

export default App;
