import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <header className="navbar">
    <div>
        {/* <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" /> */}
    </div>
    <nav>
        <ul className="list">
            <li className="list-item">
                <NavLink exact to="/" >Home</NavLink>
                <NavLink to="/favs" >Favorites</NavLink>
            </li>
        </ul>
    </nav>
</header>
  )
}

export default NavBar
