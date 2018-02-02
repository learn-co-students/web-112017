import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockContainer from './stocks/StockContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockContainer style={{ "display": "grid", "grid-template-columns": 3 }} />
      </div>
    );
  }
}

export default App;
