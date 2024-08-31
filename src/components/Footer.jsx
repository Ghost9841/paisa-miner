import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section footer-logo">
        <Link to="/"><img src={assets.logo} alt="logo" /></Link>
        <Link  style={{textDecoration : "none"}} to = "/"><h1>Paisa Miner</h1></Link>
      </div>
      <div className="footer-section footer-links">
        <h2>Quick Links</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/earn">Earn</Link></li>
          <li><Link to="/inv">Inventory</Link></li>
          <li><Link to="/market">Market</Link></li>
        </ul>
      </div>
      <div className="footer-section footer-social">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
        </ul>
      </div>
      <div className="footer-section footer-contact">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@paisaminer.com">support@paisaminer.com</a></p>
        <p>Phone: +977-123456789</p>
      </div>
      <div className="footer-description">
        <p>Earn rewards, Nepali currency, and game top-ups by participating in fun activities and competitions</p>
      </div>
    </footer>
  );
}

export default Footer;
