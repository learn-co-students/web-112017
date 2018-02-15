import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

const initialState = { isBack: 'true', counter: 0 };
const reducer = function(state = initialState, action) {
  if (action.type === 'IS_NOT_BACK') {
    return { ...state, isBack: action.isBack };
  } else if (action.type === 'INCREMENT') {
    return { ...state, counter: state.counter + 1 };
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  state = { count: 0 };

  renderDescription = () => {
    const remainder = this.state.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.state.count + upToNext}`;
  };

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} message={this.renderDescription()} />
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          message={this.renderDescription()}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.message}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
        <h3>{this.props.message}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
