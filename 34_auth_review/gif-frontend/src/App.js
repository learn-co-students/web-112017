import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './service/api'
import GifShower from './components/GifShower'
import AuthAction from './components/AuthAction'

class App extends Component {
  state = {
    auth: {
      loggedIn: false
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setState({
        auth: {
          loggedIn: true,
          token: token
        }
      })
    }
  }

  login = (username, password) => {
    api.login(username, password).then(j => {
      if(j.error) {
        alert(j.error)
      } else {
        localStorage.setItem('token', j.token)
        this.setState({
          auth: {
            loggedIn: true,
            token: j.token
          }
        })
      }
    })
  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: {
        loggedIn: false,
        token: undefined
      }
    })
  }


  render() {
    return (
      <div className="App">
        <AuthAction loginFn={this.login} logoutFn={this.logout} auth={this.state.auth} />
        <GifShower />
      </div>
    );
  }
}

export default App;
