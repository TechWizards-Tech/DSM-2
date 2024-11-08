import React, { useState, useEffect } from 'react';
import './MealCard.css';
import { Clock } from 'lucide-react';
import eatService from './services/Eat'; // Certifique-se de importar o serviço correto

interface MealCardProps {
    time: string;
    mealName: string;
    caloriesConsumed: number;
    period: number;
    date: string; // A data também será passada como prop
}

const MealCard: React.FC<MealCardProps> = ({ time, mealName, caloriesConsumed, period, date }) => {
    const [foodConsumptionData, setFoodConsumptionData] = useState<any[]>([]); // Alimentos consumidos para o período
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Função para buscar os alimentos consumidos
    const fetchFoodConsumption = async () => {
        const response = await eatService.listFoodsByPeriod(date, period); // Usando a função listFoodsByPeriod passando date e period
        if (Array.isArray(response)) {
            setFoodConsumptionData(response);
        } else {
            console.error("Erro ao buscar alimentos consumidos:", response.error);
        }
    };

    useEffect(() => {
        fetchFoodConsumption(); // Chama a função para buscar alimentos assim que o componente é montado
    }, [date, period]); // Recarrega sempre que a data ou o período mudam

    // Função para excluir um alimento
    const handleDeleteFood = async (id: string) => {
        const response = await eatService.deleteFood(id); // Chama a função de exclusão do serviço

            // Atualize a lista de alimentos consumidos após a exclusão
            fetchFoodConsumption(); // Essa função deve atualizar a lista de alimentos consumidos
        
    };

    return (
        <div className="meal-card bg-green-100">
            <div className="meal-info">
                <p className="meal-time">{time}</p>
                <p className="meal-name">{mealName}</p>
                <p className="meal-calories">{caloriesConsumed} kcal</p>
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
                                        <th>Consumo (g)</th>
                                        <th>Calorias</th>
                                        <th>Proteína (g)</th>
                                        <th>Carboidratos (g)</th>
                                        <th>Fibra alimentar (g)</th>
                                        <th>Cálcio (mg)</th>
                                        <th>Sódio (mg)</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foodConsumptionData.length > 0 ? (
                                        foodConsumptionData.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.description}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.energy} kcal</td>
                                                <td>{item.protein} g</td>
                                                <td>{item.carbohydrate} g</td>
                                                <td>{item.dietary_fiber} g</td>
                                                <td>{item.calcium} mg</td>
                                                <td>{item.sodium} mg</td>
                                                <td>
                                                    <button 
                                                        onClick={() => handleDeleteFood(item.id)}  // Chama a função para excluir
                                                        style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                                                    >
                                                        Excluir
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={9}>Nenhum alimento registrado para este período.</td>
                                        </tr>
                                    )}
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
