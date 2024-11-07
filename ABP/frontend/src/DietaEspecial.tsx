import React, { useState } from 'react';
import './DietaEspecial.css';
import Button from './Button';

const DietaEspecial = () => {
  const [selectedDietType, setSelectedDietType] = useState<string | null>(null);

  const dietPlans: { [key: string]: { content: JSX.Element, calories: string } } = {
    'diabetico': {
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Ovos mexidos com abacate e tomate.</li>
            <li>Iogurte natural sem açúcar com morangos e chia.</li>
            <li>Pão integral com pasta de amendoim e fatias de pepino.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Frango grelhado com legumes e quinoa.</li>
            <li>Filé de peixe grelhado com arroz integral e salada.</li>
            <li>Carne magra com espinafre e batata-doce assada.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Iogurte natural com chia e frutas vermelhas.</li>
            <li>Castanhas com maçã.</li>
            <li>Queijo branco com cenoura em palitos.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Salada de folhas com frango e abacate.</li>
            <li>Sopa de legumes com quinoa.</li>
            <li>Omelete de espinafre com cogumelos e queijo branco.</li>
          </ul>
        </>
      ),
      calories: '1500-1600 kcal/dia',
    },
    'hipertenso': {
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Aveia com frutas vermelhas e sementes de chia.</li>
            <li>Smoothie de abacate com espinafre e água de coco.</li>
            <li>Pão integral com queijo branco e pepino.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Peito de frango grelhado com arroz integral e legumes.</li>
            <li>Quinoa com abobrinha e salmão.</li>
            <li>Salada de grão-de-bico com espinafre, tomate e azeite.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Castanhas e frutas vermelhas.</li>
            <li>Torrada integral com abacate.</li>
            <li>Iogurte natural com chia e morangos.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Sopa de legumes sem sal adicionado.</li>
            <li>Omelete de espinafre com cebola e cogumelos.</li>
            <li>Salada com folhas verdes, cenoura ralada e peito de peru.</li>
          </ul>
        </>
      ),
      calories: '1800-2000 kcal/dia',
    },
    'celiaco': {
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Tapioca com queijo branco e tomate.</li>
            <li>Iogurte natural com frutas e chia.</li>
            <li>Smoothie de banana com leite vegetal e cacau.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Peito de frango com legumes e quinoa.</li>
            <li>Salada de folhas verdes com atum e batata-doce.</li>
            <li>Filé de peixe grelhado com purê de batata-doce e cenoura.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Castanhas com iogurte natural.</li>
            <li>Tapioca com pasta de amendoim.</li>
            <li>Frutas vermelhas com iogurte sem glúten.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Omelete com espinafre e queijo branco.</li>
            <li>Salada de grão-de-bico com legumes e azeite.</li>
            <li>Sopa de legumes com frango desfiado.</li>
          </ul>
        </>
      ),
      calories: '1600-1800 kcal/dia',
    },
  };

  return (
    <div className="dietas-container">
      {!selectedDietType ? (
        <>
          <h2 className="diet-title">Escolha o Tipo de Dieta</h2>
          <div className="objective-buttons">
            <Button label="Diabético" onClick={() => setSelectedDietType('diabetico')} className='auth-button' />
            <Button label="Hipertenso" onClick={() => setSelectedDietType('hipertenso')} className='auth-button' />
            <Button label="Celíaco" onClick={() => setSelectedDietType('celiaco')} className='auth-button' />
          </div>
        </>
      ) : (
        <div className="diet-plan-content">
          <h2>{`Dieta para ${selectedDietType.charAt(0).toUpperCase() + selectedDietType.slice(1)}`}</h2>
          <p className="calories-info"><strong>Calorias aproximadas:</strong> {dietPlans[selectedDietType].calories}</p>
          {dietPlans[selectedDietType].content}
          <Button label="Voltar" onClick={() => setSelectedDietType(null)} className="carousel-button prev-button" />
        </div>
      )}
    </div>
  );
};

export default DietaEspecial;
