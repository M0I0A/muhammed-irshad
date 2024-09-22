import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Wefo</div>
      <div class="menu-container">
        <div class="menu-item active">Menu item</div>
        <div class="menu-item">Menu item</div>
        <div class="menu-item">Menu item</div>
        <div class="menu-item">Menu item</div>
      </div>
      <button className="cta-button">Start a project</button>
    </nav>
  );
};

export default Navbar;
