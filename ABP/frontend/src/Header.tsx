import React from 'react';
import './Header.css';
import logotextosemfundo from './assets/logotextsemfundo2.svg'
import github from './assets/github.svg'
import { Link } from 'react-router-dom';
import { Github, House, PanelRightOpen, UtensilsCrossed , User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header bg-green-300">
      <div className="logo">
        <div className="underline-center">
          <img src={logotextosemfundo} className='underline-center' />
        </div>
      </div>
      <nav className="nav ">

        
        <Link to="/"><House className='svg-stroke-green-700' />Home</Link>
        <Link to="/carousel"><PanelRightOpen className='svg-stroke-green-700' />Carrosel</Link>
        <Link to="/calorietracker"><UtensilsCrossed className='svg-stroke-green-700' />Calorias</Link>
        <Link to="/userprofile"><User className='svg-stroke-green-700' />Profile</Link>
        <Link to="https://github.com/TechWizards-Tech/DSM-2" target="blank"><Github className='svg-stroke-green-700' target="blank" />Github</Link>

        {/* <a href="https://github.com/TechWizards-Tech/DSM-2" target="blank"> <img src={github}  /> </a> */}
      </nav>
    </header>
  );
}

export default Header;