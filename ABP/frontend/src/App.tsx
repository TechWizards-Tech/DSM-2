import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Carousel from './Carousel';
import CalorieTracker from './CalorieTracker';
import PerfilUser from './PerfilUser';
import AuthForm from './AuthForm';
import { loadFromLocalStorage } from './utils/localStorage';
import { TokenProps } from './types'; // Importe TokenProps

const App: React.FC = () => {
  const isLoggedIn = () => {
    const userSession = loadFromLocalStorage('userSession');
    console.log("userSession", userSession);
    return userSession !== null && 'token' in userSession; // Verifica se o token está presente
  };

  return (
    <Router>
      <div className="App">
        <div className="background-blur"></div>

        <div className='full-height-container'>
          <Header />
          <div className='main'>
            <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/carousel" element={isLoggedIn() ? <Carousel /> : <Navigate to="/auth" />} />
              <Route path="/calorietracker" element={isLoggedIn() ? <CalorieTracker /> : <Navigate to="/auth" />} />
              <Route path="/userprofile" element={isLoggedIn() ? <PerfilUser /> : <Navigate to="/auth" />} />
              <Route path="/auth" element={<AuthForm />} /> {/* Rota para a autenticação */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
