import React, { useState } from 'react'

import "../../../styles/Navigation/navbar.css";
import Navlogo from "../../../Assets/nav-logo.svg";

import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';

export default function Navbar() {

  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setdrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setdrawerIsOpen(false);
  }

  return (
    <React.Fragment>

      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <ul className="nav-links-drawer">
          <li><a href="i">Home</a></li>
          <li><a href="i">About</a></li>
          <li><a href="i">Affailate</a></li>
          <li><a href="i">Services</a></li>
          <li><a href="i">Pricing</a></li>
          <li><a href="i">Services</a></li>
          <button className='btn-nav'>Login</button>
        </ul>
      </SideDrawer>

      <div className="main-div-navbar">
        <img className='nav-logo' src={Navlogo} alt="Logo-img" />
        <nav className='nav-left'>
          <button className='nav-min' onClick={openDrawerHandler}>
            <span />
            <span />
            <span />
          </button>
          <ul className="nav-links">
            <li><a href="i">Home</a></li>
            <li><a href="i">About</a></li>
            <li><a href="i">Affailate</a></li>
            <li><a href="i">Services</a></li>
            <li><a href="i">Pricing</a></li>
            <li><a href="i">Services</a></li>
          </ul>
          <button className='btn-nav nav-lg'>Login</button>
        </nav>
      </div>
    </React.Fragment>
  )
}
