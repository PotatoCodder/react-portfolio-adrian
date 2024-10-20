/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';  // Separate CSS file for better styling

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Adiran Escudero</h1>
        <nav className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/languages">Languages</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
