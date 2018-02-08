import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const links = ['Login', 'Paintings', 'New'].map(l => <li key={l}><a href="">{l}</a></li>)

  const loggedIn = !!props.currentUser

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Art gallery</Link>
        <ul id="nav-mobile" className="right">
          {loggedIn ?
            <li><a onClick={props.logOut}>Logout</a></li>
          :
            <li><Link to="/login">Login</Link></li>
          }
          <li><Link to="/paintings">Paintings</Link></li>
          {loggedIn && 
          <li><Link to="/paintings/new">New</Link></li>
          }
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
