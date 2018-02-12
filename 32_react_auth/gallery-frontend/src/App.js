import React, { Component } from 'react';
import './App.css';

import PaintingsContainer from './paintings/PaintingsContainer'
import Navbar from './nav/Navbar'
import Login from './nav/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import api from './api/adapter'


const CatchAll = (props) => {
  return (<h1> 404 ALERT </h1>)
}

const HomePage = (props) => {
  return (<h1> WELCOME HOME CURATOR </h1>)
}


class App extends Component {
  state = {
    painting_data: [],
    auth: { currentUser: null }
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: { currentUser: {
        username: user.username,
        id: user.id
      } }
    })
  }

  removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null }
    })
    window.history.pushState({}, null, "/login")
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user} })
          console.log(`user: ${user.username}`)
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('no token!')
    }
  }

  render() {
    return (
      <div className="container App">
        <Navbar currentUser={this.state.auth.currentUser} logOut={this.removeLoggedInUser} />
        <Switch>
          <Route path="/login" render={ (routerProps) => {
            return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          } } />
          <Route path="/paintings" render={ (routerProps) => {
            return <PaintingsContainer authInfo={this.state.auth} />
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
