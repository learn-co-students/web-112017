import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  // componentWillMount() {
  //   store.subscribe(() => this.setState({}));
  // }
  render() {
    console.log(this.props);
    return (
      <div className="Counter">
        {/* <h1>{store.getState().counters[this.props.index].count}</h1> */}
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    dogsarecool: state.isBack
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    decrement: () => {
      dispatch({
        type: 'DECREMENT',
        index: this.props.index
      });
    },

    increment: () => {
      dispatch({
        type: 'INCREMENT',
        index: this.props.index
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
