import React, { useState } from 'react';
import './MealCard.css';
import { Clock, CirclePlus } from 'lucide-react';

interface MealCardProps {
    time: string;
    mealName: string;
    caloriesConsumed: number;
    period: number;
}

const MealCard: React.FC<MealCardProps> = ({ time, mealName, caloriesConsumed, period }) => {



    const foodConsumptionData = [
        {
            alimento: "Arroz, tipo 2, cozido",
            consumo: "22 g",
            calorias: "28,60",
            proteina: "0,57",
            carboidratos: "6,20",
            fibraAlimentar: "0,24",
            calcio: "0,66",
            sodio: "0,44",
        },
        // Adicione mais itens aqui, se necessário
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <div className="meal-card bg-green-100">
        <div className="meal-info">
            <p className="meal-time">{time}</p>  {/* Use time prop here */}
            <p className="meal-name">{mealName}</p>  {/* Use mealName prop here */}
            <p className="meal-calories">{caloriesConsumed} kcal</p>  {/* Use caloriesConsumed prop here */}
        </div>

            <div className="progress-bar-container">
                <div className="progress-bar"></div>
            </div>

            <div className="add-period-container" style={{ backgroundColor: 'transparent' }}>
                <Clock
                    className="timer-svg svg-stroke-green-700 hover-bg"
                    onClick={toggleModal}
                    style={{ cursor: 'pointer' }}
                />
                {isModalOpen && (
                    <div className="modal-overlay" onClick={toggleModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                            <h3>Registro de Consumo</h3>
                            <table className="modal-table">
                            <thead>
                                <tr>
                                    <th>Alimento</th>
                                    <th>Consumo</th>
                                    <th>Calorias</th>
                                    <th>Proteína</th>
                                    <th>Carboidratos</th>
                                    <th>Fibra alimentar</th>
                                    <th>Cálcio</th>
                                    <th>Sódio</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodConsumptionData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.alimento}</td>
                                        <td>{item.consumo}</td>
                                        <td>{item.calorias}</td>
                                        <td>{item.proteina}</td>
                                        <td>{item.carboidratos}</td>
                                        <td>{item.fibraAlimentar}</td>
                                        <td>{item.calcio}</td>
                                        <td>{item.sodio}</td>
                                        <td>
                                            <button 
                                                onClick={() => {
                                                    // Função de exclusão, se necessário
                                                    console.log("Excluir item:", item.alimento);
                                                }}
                                                style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealCard;
