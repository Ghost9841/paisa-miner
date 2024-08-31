import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../assets/assets';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={assets.logo} alt="logo.jpg" /></Link>
        <Link style={{ textDecoration: 'none' }} to="/"><h1>Paisa Miner</h1></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/game">Home</Link></li>
        <li><Link to="/earn">Earn</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/inv">Inventory</Link></li>
        <li className="dropdown">
          <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Market
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/market">Market</Link></li>
            <li><Link className="dropdown-item" to="/promocode">Promocodes</Link></li>
            <li><Link className="dropdown-item" to="/giveaway">Giveaways</Link></li>
          </ul>
        </li>
        <div className="auth-buttons">
        <Link to="/signin" className="auth-button sign-in">Sign In</Link>
        <Link to="/signup" className="auth-button sign-up">Sign Up</Link>
      </div>
      </ul>
    </nav>
  );
}

export default Navbar;
