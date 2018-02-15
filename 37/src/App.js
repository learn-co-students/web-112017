import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
import { connect } from 'react-redux';

// GET THE COUNTER COMPONENTS BACK ON THE PAGE

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.counters.map((counter, index) => {
          return <Counter key={index} index={index} count={counter.count} />;
        })}
        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counters: state.counters
  };
}

export default connect(mapStateToProps, () => ({}))(App);
