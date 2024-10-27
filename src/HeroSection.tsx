import React from 'react';
import './HeroSection.css';
import Button from './Button';
import AuthForm from './AuthForm';
import logo11 from './assets/logo11 1.svg'

const HeroSection: React.FC = () => {
  return (
    <div className="hero">

      <div className="hero-left">

        <div className='hero-text'>
          <h1>Dietas <span className='text-green-800 underline'>MAGICAMENTE</span> personalizadas!</h1>
          <p>Transformamos suas metas em resultados mágicos!</p>
        </div>

        {/* <p>Transformamos suas metas em resultados mágicos!</p> */}

        {/* <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Introducing 
        <span className="text-green-600">LearningStudioAI</span>
        , the next-gen online course creation tool</h1> */}

        <div className="hero-image">
          <img src={logo11} />
        </div>

      </div>

      <div className="hero-right">
        <AuthForm />
      </div>
    </div>
  );
}

export default HeroSection;
