import React, { Component } from 'react';
import './App.css';

import PaintingsContainer from './paintings/PaintingsContainer'
import Navbar from './nav/Navbar'
import Login from './nav/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import api from './api/adapter'
import Rishi from './rishi/Rishi'


const CatchAll = (props) => {
  return (<h1> 404 ALERT </h1>)
}

const HomePage = (props) => {
  return (<h1> WELCOME HOME CURATOR </h1>)
}


class App extends Component {
  state = {
    painting_data: [],
    auth: {
       currentUser: null,
       loggingIn: true
     }
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: {
        currentUser: {
          username: user.username,
          id: user.id
        },
        loggingIn: false
      }
    })
  }

  removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null, loggingIn: false }
    })
    window.history.pushState({}, null, "/login")
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      api.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: {
            currentUser: {
              username: user.username,
              id: user.id
            },
            loggingIn: false
          } })
          console.log(`user: ${user.username}`)
        } else {
          this.setState({ auth: {
            currentUser: null,
            loggingIn: false
          } })
        }
      })
    } else {
      this.setState({
        auth: { loggingIn: false }
      })
      console.log('no token!')
    }
  }

  render() {
    console.log("render app")
    return (
      <div className="container App">
        <Navbar currentUser={this.state.auth.currentUser} logOut={this.removeLoggedInUser} />
        <Switch>
          <Route path="/rishi" render={ (routerProps) => {

            return <Rishi auth={this.state.auth} />
          } } />
          <Route path="/login" render={ (routerProps) => {
            return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          } } />
          <Route path="/paintings" render={ (routerProps) => {
            return <PaintingsContainer auth={this.state.auth} />
          } } />
          <Route path="/404" render={ (routerProps) => {
            return <CatchAll auth={this.state.auth} />
          } } />
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
