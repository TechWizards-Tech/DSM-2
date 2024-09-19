// app.tsx
import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import AuthForm from './AuthForm'; // importando o AuthForm

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ height: '100svh', maxHeight: '100svh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <HeroSection />
        <AuthForm /> {/* Renderiza o AuthForm */}
      </div>
    </div>
  );
};

export default App;
