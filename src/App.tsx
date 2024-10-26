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

const App: React.FC = () => {
  return (
    <Router>

      <div className="App">
        <div style={{ height: '100svh', maxHeight: '100svh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Header />
          <div className='main'>

            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/calorietracker" element={<CalorieTracker />} />
            </Routes>

          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
