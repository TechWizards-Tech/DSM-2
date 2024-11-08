import React, { useState } from 'react';
import './MealCard.css';
import { Clock, CirclePlus } from 'lucide-react';

interface MealCardProps {
    time: string;
    mealName: string;
    caloriesConsumed: number;
    period: number;
}

const MealCard: React.FC <MealCardProps> = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div className="meal-card bg-green-100">
            <div className="meal-info">
                <p className="meal-time">08:00</p>
                <p className="meal-name">cafe</p>
                <p className="meal-calories">10kcal</p>
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar"></div>
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
                                <li> </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealCard;
