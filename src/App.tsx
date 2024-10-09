import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ProgressBar from './ProgressBar';
import SideMenu from './SideMenu';
import Carousel from './Carousel';
import Button from './Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ height: '100svh', maxHeight: '100svh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        <Header />
          <div className='main'>

            {/* <HeroSection /> */}
            {/* <ProgressBar />  */}
            {/* <Header /> */}
            
          <Carousel/>
        </div>
  
      </div>
    </div>
  );
}

export default App;