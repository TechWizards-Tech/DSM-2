import React, { useState } from 'react';
import './MealCard.css'; // Estilos CSS
import { CirclePlus } from 'lucide-react';
import FoodForm from './FoodForm'; // Importe seu componente FoodForm

interface MealCardProps {
  time: string;
  mealName: string;
  caloriesConsumed: number;
  totalCalories: number;
}

const MealCard: React.FC<MealCardProps> = ({ time, mealName, caloriesConsumed, totalCalories }) => {
  // Calcula a porcentagem de calorias consumidas
  const progress = (caloriesConsumed / totalCalories) * 100;

  // Estado para controlar a visibilidade do FoodForm
  const [isFoodFormOpen, setIsFoodFormOpen] = useState<boolean>(false);

  // Função para abrir/fechar o FoodForm
  const handleFoodFormToggle = () => {
    setIsFoodFormOpen(!isFoodFormOpen);
  };

  return (
    <div className="meal-card bg-green-100">
      <div className="meal-info">
        <p className="meal-time">{time}</p>
        <p className="meal-name">{mealName}</p>
        <p className="meal-calories">
          {caloriesConsumed}/{totalCalories} kcal
        </p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Ícone CirclePlus para abrir o FoodForm */}
      <div className="add-button-container auth-button-meal">
        <CirclePlus
          className="timer-svg svg-stroke-green-700"
          onClick={handleFoodFormToggle} // Chama a função para abrir/fechar o FoodForm
        />
      </div>

      {/* Renderiza o FoodForm se isFoodFormOpen for true */}
      {isFoodFormOpen && <FoodForm closeForm={handleFoodFormToggle} />}
    </div>
  );
};

export default MealCard;
