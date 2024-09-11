import React from 'react';
import './HeroSection.css';
import Button from './Button';
import AuthForm from './AuthForm';
import logo11 from './assets/logo11 1.svg'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-text">
          <h1>Dietas MAGICAMENTE personalizadas!</h1>
          <p>Transformamos suas metas em resultados mágicos!.</p>
        </div>
        <div className="hero-image">
          <img src={logo11} />
        </div>
      </div>

      <div className="hero-right">
        <AuthForm />
      </div>
    </section>
  );
}

export default HeroSection;
