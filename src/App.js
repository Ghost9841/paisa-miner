// App.js

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

import Giveaways from './pages/Giveaways';
import Promocodes from './pages/Promocodes';

import Ghar from './pages/Ghar';
import Signin from './components/Signin';
import Signup from './components/Signup';





function App() {
  return (


   
   
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/ghar" element={<Ghar/>} />
          <Route path="/kamau-ra-ramau" element={<Earn/>} />
          <Route path="/gatana-haru" element={<Events/>} />
          <Route path="/Sṭaka" element={<Rewards />} />
          <Route path="/khel-khud" element={<Game/>} />
          <Route path="/bazar" element={<Market/>} />
          <Route path="/pravardan-code" element={<Promocodes />} />
          <Route path="/upahar" element={<Giveaways />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
       
      </div>
      <Footer/>
    </Router>
    
  );
}

export default App;

