import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import SideMenu from './SideMenu';
import Carousel from './Carousel';
import Button from './Button';
import CalorieTracker from './CalorieTracker';
import MealCard from './MealCard';
import FoodForm from './FoodForm';
import Teste from './Teste';
import PerfilUser from './PerfilUser';

const App: React.FC = () => {
  return (
    <Router>

      <div className="App">

      <div className="background-blur"></div>

        <div className='full-height-container'>
          <Header />
          <div className='main'>

            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/calorietracker" element={<CalorieTracker />} />
              <Route path="/userprofile" element={<PerfilUser />} />
            </Routes>

          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
