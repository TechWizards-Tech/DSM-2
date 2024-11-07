import React from 'react';
import './Carousel.css';

const Objetivo = () => {
  // Blocos HTML com informações nutricionais para cada objetivo
  const slides = [
    {
      title: 'Perder Peso',
      calories: '1500-1600 kcal/dia',
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Omelete com espinafre e tomate + 1 fatia de pão integral.</li>
            <li>Iogurte natural com chia e morangos.</li>
            <li>Smoothie de couve, gengibre e abacaxi + 1 colher de farelo de aveia.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Salmão grelhado com quinoa e legumes cozidos.</li>
            <li>Frango grelhado com abobrinha e batata-doce.</li>
            <li>Salada de folhas verdes com atum, grão-de-bico e azeite.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Castanhas + 1 maçã.</li>
            <li>Pão integral com ricota e pepino.</li>
            <li>Smoothie de abacate com leite vegetal e chia.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Sopa de legumes com frango desfiado.</li>
            <li>Salada de folhas com ovo cozido e sementes de girassol.</li>
            <li>Omelete de claras com cogumelos.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Manter Peso',
      calories: '2000-2200 kcal/dia',
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Ovos mexidos com abacate + pão integral.</li>
            <li>Iogurte natural com frutas e granola.</li>
            <li>Vitamina de banana com aveia e mel.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Peito de frango grelhado com arroz integral e brócolis.</li>
            <li>Quibe de quinoa com salada de rúcula e tomate.</li>
            <li>Tilápia grelhada com purê de batata-doce e cenoura.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Torrada integral com pasta de amendoim + 1 banana.</li>
            <li>Iogurte natural com mel e sementes.</li>
            <li>Frutas vermelhas com castanhas.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Wrap de alface com atum e legumes.</li>
            <li>Sopa de lentilha com espinafre e cenoura.</li>
            <li>Omelete de espinafre com ricota.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Ganhar Peso',
      calories: '2500-2700 kcal/dia',
      content: (
        <>
          <h3>Café da Manhã</h3>
          <ul>
            <li>Mingau de aveia com banana, mel e pasta de amendoim.</li>
            <li>Ovos mexidos com abacate + torradas integrais.</li>
            <li>Shake de proteína com frutas vermelhas e leite.</li>
          </ul>
          <h3>Almoço</h3>
          <ul>
            <li>Filé de frango grelhado com batata-doce e brócolis.</li>
            <li>Massa integral com frango desfiado e molho de tomate.</li>
            <li>Arroz integral com carne moída, feijão e abóbora assada.</li>
          </ul>
          <h3>Café da Tarde</h3>
          <ul>
            <li>Torrada integral com pasta de amendoim + banana.</li>
            <li>Iogurte grego com castanhas e mel.</li>
            <li>Vitamina de abacate com leite integral e cacau.</li>
          </ul>
          <h3>Jantar</h3>
          <ul>
            <li>Omelete com queijo e presunto magro.</li>
            <li>Wrap de frango com vegetais e guacamole.</li>
            <li>Salada com ovos cozidos, frango e abacate.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="dietas-container">
      {slides.map((slide, index) => (
        <div key={index} className="diet-plan">
          <h2>{slide.title}</h2>
          <p><strong>Calorias aproximadas:</strong> {slide.calories}</p>
          <div className="diet-content">{slide.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Objetivo;
