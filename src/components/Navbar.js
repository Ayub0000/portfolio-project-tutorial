import React from 'react';
import logo from "../Untitled-1.png";

const Navbar = () => {
  return ( 
<nav className="navbar navbar-expand-lg bg-dark">
<div className='container'>
<div className="container-fluid">

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
  <a className="navbar-brand mr-auto" href="#"><img className='logo' src={logo}></img></a>
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
    </ul>
  </div>
</div>
</div>
</nav>

  )
}

export default Navbar
