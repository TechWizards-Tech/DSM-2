import React, { useState } from 'react';
import './MealCard.css';
import { Clock, CirclePlus } from 'lucide-react';

interface MealCardProps {
    time: string;
    mealName: string;
    caloriesConsumed: number;
    totalCalories: number;
    consumptionRecords: { food: string; date: string; amount: string; meal: string }[];
}

const MealCard: React.FC<MealCardProps> = ({ time, mealName, caloriesConsumed, totalCalories, consumptionRecords }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const progress = (caloriesConsumed / totalCalories) * 100;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
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

            <div className="add-period-container" style={{ backgroundColor: 'transparent' }}>
            <Clock
                className="timer-svg svg-stroke-green-700"
                onClick={toggleModal}
                style={{ cursor: 'pointer' }}
            />
                {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={toggleModal}>&times;</span>
                        <h3>Registro de Consumo</h3>
                        <ul className="modal-list">
                            {consumptionRecords.map((record, index) => (
                                <li key={index}>
                                    {record.food} - {record.amount} - {record.date} - {record.meal}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            </div>

            {/* <div className="add-button-container auth-button-meal">
                <CirclePlus className='timer-svg svg-stroke-green-700' />
            </div> */}
        </div>
    );
};

export default MealCard;
