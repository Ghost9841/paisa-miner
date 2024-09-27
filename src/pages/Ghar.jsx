import React from 'react';
import './Ghar.css';
import { assets } from '../assets/assets';

const Ghar = () => {
  return (
    <div className="ghar-ui">
      <div className="carousel">
        <img src={assets.logo} alt="" />
        <img src={assets.logo} alt="" />
        <img src={assets.logo} alt="" />
        <img src={assets.logo} alt="" />
      </div>
      <div className="ghar-des">
        <h1>Ghar</h1>
        <img src={assets.info} alt="" />
        <h1>Edit</h1>
      </div>
      <div className="main-lobby"></div>
    </div>
  );
 }

export default Ghar;
