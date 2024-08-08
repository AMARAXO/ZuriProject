"use client"

import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src='/images/starlogo.jpg' alt='logo' height={'50px'} width={'50px'} ></img>
          <a href="/">BarbStarShow</a>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/auth/signin">Sign In</a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    );
  };
  
export default Navbar;
