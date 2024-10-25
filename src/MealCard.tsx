import React from 'react';
import './MealCard.css'; // Estilos CSS

interface MealCardProps {
  time: string;
  mealName: string;
  caloriesConsumed: number;
  totalCalories: number;
}

const MealCard: React.FC<MealCardProps> = ({ time, mealName, caloriesConsumed, totalCalories }) => {
  // Calcula a porcentagem de calorias consumidas
  const progress = (caloriesConsumed / totalCalories) * 100;

  return (
    <div className="meal-card bg-green-100">
      <div className="meal-info ">
        <p className="meal-time">{time}</p>
        <p className="meal-name">{mealName}</p>
        <p className="meal-calories">
          {caloriesConsumed}/{totalCalories} kcal
        </p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="add-button-container">
        <button className="add-button">+</button>
      </div>
    </div>
  );
};

export default MealCard;