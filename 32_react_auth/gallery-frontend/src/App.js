import React, { Component } from 'react';
import './App.css';

import painting_data from './data/painting_data'
import PaintingsContainer from './paintings/PaintingsContainer'
import Navbar from './nav/Navbar'
import { Route, Switch, Redirect } from 'react-router-dom'

const Render = (props) => {
  return (<p> Login </p>)
}

const CatchAll = (props) => {
  return (<h1> 404 ALERT </h1>)
}

const HomePage = (props) => {
  return (<h1> WELCOME HOME CURATOR </h1>)
}

class App extends Component {
  render() {
    return (
      <div className="container App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Render} />
          <Route path="/paintings" render={ (routerProps) => {
            return <PaintingsContainer paintings={ painting_data } />
          } } />
          <Route path="/404" component={CatchAll} />
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}

//
// <Route render={(routerProps) => {
//   return <Redirect to="/404" />
// }} />


export default App;
