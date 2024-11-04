import React, { useState } from 'react';
import './Carousel.css';
import Button from './Button';
import profileService from './services/profile'; // Importa o serviço de perfil
import { Gender } from './types'; // Importa o enum Gender

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedObjective, setSelectedObjective] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [height, setHeight] = useState<string | null>(null);
  const [selectedDiet, setSelectedDiet] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const totalSlides = 7;

  const loadFromLocalStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const handleCreateProfile = async () => {
    const userId = loadFromLocalStorage('userSession')?.id; // Carrega o userId do localStorage
    if (!userId) {
      alert("Erro: ID do usuário não encontrado.");
      return;
    }

    try {
      const profileData = {
        userId, // Inclui o userId
        objective: parseInt(selectedObjective || '0', 10),
        activity_level: parseInt(selectedOption || '0', 10),
        gender: selectedGender || Gender.Male,
        weight: parseFloat(weight || '0'),
        height_cm: parseFloat(height || '0'),
        diet_type: parseInt(selectedDiet || '0', 10),
        age: age !== null ? age : 0,
      };

      const response = await profileService.create(profileData);
      console.log("Perfil criado com sucesso:", response);
      alert("Perfil criado com sucesso!");
      // Redirecionar ou redefinir o estado aqui, se desejado
    } catch (error) {
      console.error("Erro ao criar perfil:", error);
      alert("Erro ao criar perfil. Tente novamente.");
    }
  };

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleObjectiveSelection = (objective: string) => {
    setSelectedObjective(objective);
    nextSlide();
  };

  const handleOptionSelection = (option: string) => {
    setSelectedOption(option);
    nextSlide();
  };

  const handleGenderSelection = (gender: Gender) => {
    setSelectedGender(gender);
    nextSlide();
  };

  const handleDietSelection = (diet: string) => {
    setSelectedDiet(diet);
    nextSlide();
  };

  const slides = [
    { title: 'Qual é o seu objetivo?' },
    { title: 'Qual é o seu nível de atividade física diária?' },
    { title: 'Qual é o seu gênero?' },
    { title: 'Dieta especial?' },
    { title: 'Qual é o seu peso?' },
    { title: 'Qual é a sua altura?' },
    { title: 'Qual é a sua idade?' }
  ];

  return (
    <div className="carousel-container">
      <div className="progress-bar">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`progress-segment ${index <= currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="carousel-slide">
        <h2>{slides[currentIndex].title}</h2>
        <div className="button-wrapper">
          {currentIndex === 0 && (
            <div className="objective-buttons">
              <Button label="Perder peso" onClick={() => handleObjectiveSelection('0')} className='auth-button' />
              <Button label="Ganhar peso" onClick={() => handleObjectiveSelection('1')} className='auth-button' />
              <Button label="Manter peso" onClick={() => handleObjectiveSelection('2')} className='auth-button' />
            </div>
          )}

          {currentIndex === 1 && (
            <div className="category-buttons">
              <Button label="Leve" onClick={() => handleOptionSelection('0')} className='auth-button' />
              <Button label="Moderado" onClick={() => handleOptionSelection('1')} className='auth-button' />
              <Button label="Intenso" onClick={() => handleOptionSelection('2')} className='auth-button' />
            </div>
          )}

          {currentIndex === 2 && (
            <div className="gender-selection">
              <Button label="Masculino" onClick={() => handleGenderSelection(Gender.Male)} className='auth-button' />
              <Button label="Feminino" onClick={() => handleGenderSelection(Gender.Female)} className='auth-button' />
            </div>
          )}

          {currentIndex === 3 && (
            <div className="diet-buttons">
              <Button label="Dieta1" onClick={() => handleDietSelection('0')} className='auth-button' />
              <Button label="Dieta2" onClick={() => handleDietSelection('1')} className='auth-button' />
              <Button label="Dieta3" onClick={() => handleDietSelection('2')} className='auth-button' />
            </div>
          )}

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

          {currentIndex === 6 && (
            <div className="input-field">
              <input
                className="input-custom"
                type="number"
                value={age || ''}
                onChange={(e) => setAge(parseInt(e.target.value, 10) || null)}
                placeholder="Ex: 25"
              />
            </div>
          )}
        </div>
      </div>

      <div className='selection-buttons'>
        <Button label="Anterior" onClick={prevSlide} className="carousel-button prev-button" />
        {currentIndex < totalSlides - 1 ? (
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
              (currentIndex === 5 && !height) ||
              (currentIndex === 6 && age === null)
            }
          />
        ) : (
          <Button label="Finalizar" onClick={handleCreateProfile} className="carousel-button finish-button" />
        )}
      </div>
    </div>
  );
};

export default Carousel;
