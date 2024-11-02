import React from 'react';
import './Header.css';
import logotextosemfundo from './assets/logotextsemfundo2.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logotextosemfundo} />
      </div>
      <nav className="nav">
        <a href="#about">Sobre nós</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
