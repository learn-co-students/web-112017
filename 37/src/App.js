import React, { Component } from 'react';
import Header from './Header';
import Counter from './Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* store.getState().counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              index={index}
              increment={this.increment}
              decrement={this.decrement}
            />
          );
        }) */}
        <Counter />
      </div>
    );
  }
}
export default App;
