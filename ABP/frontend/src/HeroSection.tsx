import React from 'react';
import './HeroSection.css';
import Button from './Button';
import AuthForm from './AuthForm';
import logo11 from './assets/logo11 1.svg'
import logo1111 from './assets/logo1111.png'
import logo2222 from './assets/logo2222.png'


const HeroSection: React.FC = () => {
  return (
    <div className="hero">

      <div className="hero-left">

        <div className='hero-text'>
          <h1>Dietas <span className='text-green-800 underline'>MAGICAMENTE</span> personalizadas!</h1>
          <p>Transformando metas em resultados mágicos</p>
        </div>
        
        <div className="hero-image">
          <img src={logo2222} alt="Logo 2" className="logo2" />
          <img src={logo1111} alt="Logo 1" className="logo1" />
        </div>

      </div>

      <div className="hero-right">
        <AuthForm />
      </div>
    </div>
  );
}

export default HeroSection;
