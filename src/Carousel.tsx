import React, { useState } from 'react';
import './Carousel.css';
import Button from './Button';

const Carousel = () => {
  // Estado para controlar a posição do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Número total de slides
  const totalSlides = 6;

  // Função para mudar para o próximo slide, sem permitir loop
  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Função para mudar para o slide anterior
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Conteúdo dos slides
  const slides = [
    { title: 'Bem-vindo ao nosso site', description: 'Descubra mais sobre nós e o que fazemos.' },
    { title: 'Sobre Nós', description: 'Nossa história começou há mais de 10 anos, com a missão de...' },
    { title: 'Nossos Serviços', description: 'Oferecemos uma variedade de serviços, desde...' },
    { title: 'Contato', description: 'Entre em contato conosco pelo telefone ou email...' },
    { title: 'Novidades', description: 'Fique por dentro das últimas atualizações e novidades da empresa.' },
    { title: 'Testemunhos', description: 'Veja o que nossos clientes dizem sobre nós.' },
  ];

  return (
    <div className="carousel-container">
      {/* Exibe o slide atual com base no índice */}
      <div className="carousel-slide">
        <h3>{slides[currentIndex].title}</h3>
        <p>{slides[currentIndex].description}</p>
      </div>

      {/* Barra de Progresso */}
      <div className="progress-bar">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`progress-segment ${index <= currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <Button label='Anterior' onClick={prevSlide} className="carousel-button prev-button" />
      <Button label='Próximo' onClick={nextSlide} className="carousel-button next-button" disabled={currentIndex === totalSlides - 1} />
    </div>
  );
};

export default Carousel;
