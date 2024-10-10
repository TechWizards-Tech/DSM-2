import React, { useState } from 'react';
import './Carousel.css';
import Button from './Button';

const Carousel = () => {
  // Estado para controlar a posição do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para armazenar o objetivo selecionado no primeiro slide
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);

  // Estado para armazenar a escolha feita no segundo slide
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

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

  // Função para selecionar o objetivo no primeiro slide
  const handleObjectiveSelection = (objective: string) => {
    setSelectedObjective(objective);
    nextSlide(); // Avança para o próximo slide após a escolha
  };

  // Função para selecionar a opção no segundo slide
  const handleOptionSelection = (option: string) => {
    setSelectedOption(option);
    nextSlide(); // Avança para o próximo slide após a escolha
  };

  // Conteúdo dos slides
  const slides = [
    { title: 'Qual Objetivo?', description: 'Escolha seu objetivo abaixo:' },
    { title: 'Qual é o nível de atividade física diária?', description: 'Escolha uma categoria que melhor descreva você:' },
    { title: 'Qual é o seu gênero?', description: 'Oferecemos uma variedade de serviços, desde...' },
    { title: 'Qual o seu peso?', description: 'Entre em contato conosco pelo telefone ou email...' },
    { title: 'Qual a sua altura?', description: 'Fique por dentro das últimas atualizações e novidades da empresa.' },
  ];

  return (
    <div className="carousel-container">
      {/* Exibe o slide atual com base no índice */}
      <div className="carousel-slide">
        <h3>{slides[currentIndex].title}</h3>
        {/* <p>{slides[currentIndex].description}</p> */}

        {/* Exibe os botões de objetivos no primeiro slide */}
        {currentIndex === 0 && (
          <div className="objective-buttons">
            <Button label="Perder peso" onClick={() => handleObjectiveSelection('Perder peso de forma saudável')} />
            <Button label="Ganhar peso" onClick={() => handleObjectiveSelection('Ganhar peso, aumentar massa muscular')} />
            <Button label="Manter peso" onClick={() => handleObjectiveSelection('Manter peso')} />
            <Button label="Dieta Especial" onClick={() => handleObjectiveSelection('Dieta Especial')} />
          </div>
        )}

        {/* Exibe os botões de seleção no segundo slide */}
        {currentIndex === 1 && (
          <div className="category-buttons">
            <Button label="Leve" onClick={() => handleOptionSelection('Atleta')} />
            <Button label="Moderado" onClick={() => handleOptionSelection('Estudante')} />
            <Button label="Profissional" onClick={() => handleOptionSelection('Profissional')} />
          </div>
        )}

        {/* Exibe o objetivo selecionado (se houver) nos demais slides */}
        {currentIndex > 1 && selectedObjective && (
          <p className="selected-objective">Seu objetivo: {selectedObjective}</p>
        )}

        {/* Exibe a categoria selecionada (se houver) a partir do terceiro slide */}
        {currentIndex > 1 && selectedOption && (
          <p className="selected-option">Sua categoria: {selectedOption}</p>
        )}
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
      <Button label='Próximo' onClick={nextSlide} className="carousel-button next-button" 
        disabled={(currentIndex === 0 && !selectedObjective) || (currentIndex === 1 && !selectedOption)} />
    </div>
  );
};

export default Carousel;
