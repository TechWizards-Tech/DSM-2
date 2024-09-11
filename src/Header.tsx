import React from 'react';
import './Header.css';
import logotextosemfundo from './assets/logotextsemfundo1.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logotextosemfundo} />
      </div>
      <nav className="nav">
        <a href="#about">About me</a>
        <a href="#offer">My offer</a>
        <a href="#transformations">Transformations</a>
        <a href="#pricing">Pricing</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a href="#en">EN</a>
      </nav>
    </header>
  );
}

export default Header;
