import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Paisa Miner</h1>
        <p>Earn rewards effortlessly through various exciting ways. Start mining today and redeem your points for amazing prizes!</p>
        <Link to="/signup" className="cta-button">Sign Up Now</Link>
      </section>

      <section className="paisaminer">
        <div className="content-wrapper">
          <div className="image-container">
            <img src={assets.logo} alt="Mining Animation" />
          </div>
          <div className="text-container">
            <h1>What is Paisa Miner?</h1>
            <p>
              Paisa Miner is a free-to-play earning platform designed specifically for Nepali users. 
              Engage in exciting activities, complete tasks, and strategically earn high-value rewards. 
              Build your virtual mining empire by participating in fun competitions, completing quests,
              and unlocking special bonuses. Compete with others to earn real Nepali currency and game top-ups.
              The ultimate reward awaits the most dedicated players. Join Paisa Miner today, where your efforts turn into real rewards!
            </p>
          </div>
        </div>
      </section>

      <section className="mining-intro">
        <div className="middle">
          <div className="text-side">
            <h1>Want to start Paisa Miner earning for free?</h1>
            <p>Here is how you can join the platform trusted by countless players across Nepal. Build the best virtual mining empire and get rewards by strategically participating in various activities. Unlock special bonuses, compete in quests, and get rewarded with Nepali currency and game top-ups. Your journey to rewards starts here!</p>
            <Link to="/signup" className="cta-button">Start Now</Link>
          </div>
          <div className="image-side">
            <img src={assets.logo} alt="Mining GIF" />
          </div>
        </div>
      </section>

      <section className="mining-action">
        <div className="bottom">
          <div className="image-side">
            <img src={assets.logo} alt="Paisa Miner Action" />
          </div>
          <div className="text-side">
            <h2>Dive into Mining Action NOW! 🚀</h2>
            <p>Jump into Paisa Miner, where you can mine and turn your efforts into big rewards. The ultimate reward pool awaits, and it’s time to make your mark!</p>
            <p><strong>Next Block Reward:</strong> 22000 NPR Points</p>
            <Link to="/play" className="cta-button">Play Now!</Link>
          </div>
        </div>
      </section>

      <section className="user-list">
        <h1>Registered Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
