// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import './App.css';
import Earn from './pages/Earn';
import Events from './pages/Events';
import Footer from './components/Footer';
import Game from './pages/Game';
import Market from './pages/Market';
import Signin from './pages/Signin';
import Giveaways from './pages/Giveaways';
import Promocodes from './pages/Promocodes';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earn" element={<Earn/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/games" element={<Game/>} />
          <Route path="/market" element={<Market/>} />
          <Route path="/promocodes" element={<Promocodes />} />
          <Route path="/giveaways" element={<Giveaways />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
