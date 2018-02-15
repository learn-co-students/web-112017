import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        {<h1>{this.props.count}</h1>}
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    decrement: () => {
      dispatch({
        type: 'DECREMENT',
        index: ownProps.index
      });
    },

    increment: () => {
      dispatch({
        type: 'INCREMENT',
        index: ownProps.index
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(Counter);
