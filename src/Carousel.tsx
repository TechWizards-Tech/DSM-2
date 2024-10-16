import React, { useState } from 'react';
import './Carousel.css';
import Button from './Button';

const Carousel = () => {
  // Estado para controlar a posição do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);


  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);

  const totalSlides = 5;

  const perfil = [selectedObjective, selectedOption, selectedGender, weight, height];

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

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
    nextSlide(); // Avança para o próximo slide após a escolha
  };

  // Conteúdo dos slides
  const slides = [
    { title: 'Qual é o seu objetivo?' },
    { title: 'Qual é o seu nível de atividade física diária?' },
    { title: 'Qual é o seu gênero?' },
    { title: 'Qual é o seu peso?' },
    { title: 'Qual é a sua altura?' },
  ];

  return (

    <div className="carousel-container">

      {/* Barra de Progresso */}
      <div className="progress-bar">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`progress-segment ${index <= currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* Exibe o slide atual com base no índice */}
      <div className="carousel-slide">
        <h2>{slides[currentIndex].title}</h2>

        {/* Exibe os botões de objetivos no primeiro slide */}
        {currentIndex === 0 && (
          <div className="objective-buttons">
            <Button label="Perder peso" onClick={() => handleObjectiveSelection('Perder peso')} />
            <Button label="Ganhar peso" onClick={() => handleObjectiveSelection('Ganhar peso')} />
            <Button label="Manter peso" onClick={() => handleObjectiveSelection('Manter peso')} />
            <Button label="Dieta Especial" onClick={() => handleObjectiveSelection('Dieta Especial')} />
          </div>
        )}

        {/* Exibe os botões de seleção no segundo slide */}
        {currentIndex === 1 && (
          <div className="category-buttons">
            <Button label="Leve" onClick={() => handleOptionSelection('Leve')} />
            <Button label="Moderado" onClick={() => handleOptionSelection('Moderado')} />
            <Button label="Intenso" onClick={() => handleOptionSelection('Intenso')} />
          </div>
        )}

        {/* Exibe os inputs no terceiro slide */}
        {currentIndex === 2 && (
          <div className="gender-selection">
            <Button label="Masculino" onClick={() => handleGenderSelection('Masculino')} />
            <Button label="Feminino" onClick={() => handleGenderSelection('Feminino')} />
            <Button label="Outro" onClick={() => handleGenderSelection('Outro')} />
          </div>
        )}

        {/* Exibe o input de peso no quarto slide */}
        {currentIndex === 3 && (
          <div className="input-field">

            <input
              className='input-custom'
              type="number"
              value={weight || ''}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 70"
            />
          </div>
        )}

        {/* Exibe o input de altura no quinto slide */}
        {currentIndex === 4 && (
          <div className="input-field">

            <input
              className='input-custom'
              type="number"
              value={height || ''}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 170"
            />
          </div>
        )}

      </div>

      {/* Botões de navegação */}
      <div>
        <Button label='Anterior' onClick={prevSlide} className="carousel-button prev-button" />
        <Button label='Próximo' onClick={nextSlide} className="carousel-button next-button"
          disabled={
            (currentIndex === 0 && !selectedObjective) ||
            (currentIndex === 1 && !selectedOption) ||
            (currentIndex === 1 && !selectedGender) ||
            (currentIndex === 3 && !weight) ||
            (currentIndex === 4 && !height)
          }
        />
      </div>

      <p>{perfil}</p>
    </div>
  );

};

export default Carousel;