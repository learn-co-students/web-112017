import React from 'react'

const Navbar = (props) => {

  const links = ['Login', 'Paintings', 'New'].map(l => <li><a href="">{l}</a></li>)

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="brand-logo left">Art Gallery</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          { links }
        </ul>
      </div>
    </nav>)
}


export default Navbar
