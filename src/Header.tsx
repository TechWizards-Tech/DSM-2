import React from 'react';
import './Header.css';
import logotextosemfundo from './assets/logotextsemfundo2.svg'
import github from './assets/github.svg'

const Header: React.FC = () => {
  return (
    <header className="header bg-green-400">
      <div className="logo">
        <img src={logotextosemfundo} />
      </div>
      <nav className="nav ">
        <a href="about">Sobre nós</a>
        <a href="https://github.com/TechWizards-Tech/DSM-2" target="blank">Contato</a>
        <a href="https://github.com/TechWizards-Tech/DSM-2" target="blank"> <img src={ github } /> </a>
      </nav>
    </header>
  );
}

export default Header;