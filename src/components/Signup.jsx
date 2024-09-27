import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <p>
          Already have an account? <Link to="/signin">Sign in here</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
