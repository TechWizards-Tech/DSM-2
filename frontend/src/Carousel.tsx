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
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);

  const totalSlides = 6;

  const perfil = [selectedObjective, selectedOption, selectedGender, weight, height, selectedDiet];

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

  // Funções de seleção para cada slide
  const handleObjectiveSelection = (objective: string) => {
    setSelectedObjective(objective);
    nextSlide();
  };

  const handleOptionSelection = (option: string) => {
    setSelectedOption(option);
    nextSlide();
  };

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
    nextSlide();
  };

  const handleDietSelection = (diet: string) => {
    setSelectedDiet(diet);
    nextSlide();
  };

  // Conteúdo dos slides
  const slides = [
    { title: 'Qual é o seu objetivo?' },
    { title: 'Qual é o seu nível de atividade física diária?' },
    { title: 'Qual é o seu gênero?' },
    { title: 'Dieta especiais?' },
    { title: 'Qual é o seu peso?' },
    { title: 'Qual é a sua altura?' }
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

        <div className="button-wrapper">
          {/* Exibe os botões de objetivos no primeiro slide */}
          {currentIndex === 0 && (
            <div className="objective-buttons">
              <Button label="Perder peso" onClick={() => handleObjectiveSelection('Perder peso')} className='auth-button'/>
              <Button label="Ganhar peso" onClick={() => handleObjectiveSelection('Ganhar peso')} className='auth-button'/>
              <Button label="Manter peso" onClick={() => handleObjectiveSelection('Manter peso')} className='auth-button'/>
            </div>
          )}

          {/* Exibe os botões de seleção no segundo slide */}
          {currentIndex === 1 && (
            <div className="category-buttons">
              <Button label="Leve" onClick={() => handleOptionSelection('Leve')} className='auth-button' />
              <Button label="Moderado" onClick={() => handleOptionSelection('Moderado')} className='auth-button' />
              <Button label="Intenso" onClick={() => handleOptionSelection('Intenso')} className='auth-button' />
            </div>
          )}

          {/* Exibe os inputs no terceiro slide */}
          {currentIndex === 2 && (
            <div className="gender-selection">
              <Button label="Masculino" onClick={() => handleGenderSelection('Masculino')} className='auth-button' />
              <Button label="Feminino" onClick={() => handleGenderSelection('Feminino')} className='auth-button' />
              <Button label="Outro" onClick={() => handleGenderSelection('Outro')} className='auth-button' />
            </div>
          )}

          {/* Exibe as opções de dieta especial no sexto slide */}
          {currentIndex === 3 && (
            <div className="diet-buttons">
              <Button label="Dieta1" onClick={() => handleDietSelection('Dieta1')} className='auth-button' />
              <Button label="Dieta2" onClick={() => handleDietSelection('Dieta2')} className='auth-button' />
              <Button label="Dieta3" onClick={() => handleDietSelection('Dieta3')} className='auth-button' />
            </div>
          )}
        </div>

          {/* Exibe o input de peso no quarto slide */}
          {currentIndex === 4 && (
            <div className="input-field">
              <input
                className="input-custom"
                type="number"
                value={weight || ''}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ex: 70"
              />
            </div>
          )}

          {/* Exibe o input de altura no quinto slide */}
          {currentIndex === 5 && (
            <div className="input-field">
              <input
                className="input-custom"
                type="number"
                value={height || ''}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Ex: 170"
              />
            </div>
          )}

          
      </div>

      {/* Botões de navegação */}
      <div className='objective-buttons ' >
        <Button label="Anterior" onClick={prevSlide} className="carousel-button prev-button " />
        <Button
          label="Próximo"
          onClick={nextSlide}
          className="carousel-button next-button"
          disabled={
            (currentIndex === 0 && !selectedObjective) ||
            (currentIndex === 1 && !selectedOption) ||
            (currentIndex === 2 && !selectedGender) ||
            (currentIndex === 3 && !selectedDiet) ||
            (currentIndex === 4 && !weight) ||
            (currentIndex === 5 && !height)
          }
        />
      </div>

      {/* <p>{perfil}</p> */}
    </div>
  );
};

export default Carousel;
