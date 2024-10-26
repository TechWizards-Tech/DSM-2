import React from 'react';
import './Header.css';
import logotextosemfundo from './assets/logotextsemfundo2.svg'
import github from './assets/github.svg'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header bg-green-300">
      <div className="logo">
        <img src={logotextosemfundo} />
      </div>
      <nav className="nav ">

        <Link to="/">HeroSection</Link>
        <Link to="/carousel">Carousel</Link>
        <Link to="/calorietracker">CalorieTracker</Link>

        <a href="https://github.com/TechWizards-Tech/DSM-2" target="blank"> <img src={github} /> </a>
      </nav>
    </header>
  );
}

export default Header;