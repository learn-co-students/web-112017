import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import './App.css';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

const initialState = {
  isBack: true,
  counters: [
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 }
  ]
};

const reducer = function(state = initialState, action) {
  let count, arr;

  switch (action.type) {
    case 'INCREMENT':
      // get the updated count
      count = state.counters[action.index].count + 1;

      // make a copy of the counters array
      arr = [...state.counters];
      arr[action.index] = { count };

      // set that copy to the key of counters in the state
      return { ...state, counters: arr };
    case 'DECREMENT':
      // get the updated count
      count = state.counters[action.index].count - 1;

      // make a copy of the counters array
      arr = [...state.counters];
      arr[action.index] = { count };

      // set that copy to the key of counters in the state
      return { ...state, counters: arr };
  }
  return state;
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
