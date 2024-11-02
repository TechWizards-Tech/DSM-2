import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ height: '100svh', maxHeight: '100svh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
