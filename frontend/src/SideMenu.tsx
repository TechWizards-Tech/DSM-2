import React, { useState } from 'react';
import './SideMenu.css'; // Suponha que você tenha um CSS básico para estilizar o menu

const SideMenu = () => {
  // Estado para controlar a seção atual do menu
  const [currentSection, setCurrentSection] = useState('home');

  // Função para renderizar conteúdo com base na seção selecionada
  const renderSectionContent = () => {
    switch (currentSection) {
      case 'home':
        return <p>Bem-vindo à página inicial!</p>;
      case 'about':
        return <p>Sobre nós: Aqui está um pouco sobre nossa história.</p>;
      case 'services':
        return <p>Serviços: Confira os serviços que oferecemos.</p>;
      case 'contact':
        return <p>Contato: Fale conosco para mais informações.</p>;
      default:
        return <p>Selecione uma seção do menu para ver o conteúdo.</p>;
    }
  };

  return (
    <div className="menu-container">
      {/* Menu lateral */}
      <div className="side-menu">
        <button onClick={() => setCurrentSection('home')}>Início</button>
        <button onClick={() => setCurrentSection('about')}>Sobre</button>
        <button onClick={() => setCurrentSection('services')}>Serviços</button>
        <button onClick={() => setCurrentSection('contact')}>Contato</button>
      </div>
      
      {/* Conteúdo principal */}
      <div className="main-content">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default SideMenu;
