import React from 'react'
import {Link} from "react-router-dom"
import './navbar.css';


const Navbar = () => {
  return (
<div>
  <nav className="navbar_container">
    <ul className="navbar-item">
      <li><Link className="nav-link" to="/home">Home</Link></li>
      <li><Link className="nav-link" to="/student">Student</Link></li>
      <li><Link className="nav-link" to="/contact">Contact</Link></li>   
    </ul>
  </nav>
</div>
  )
}

export default Navbar




       