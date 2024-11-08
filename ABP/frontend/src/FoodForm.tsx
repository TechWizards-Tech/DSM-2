import React, { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import './FoodForm.css';
import Button from './Button';
import eatService from './services/Eat'; // Usando EatService para registrar consumo
import foodService from './services/Food'; // Se ainda precisar buscar alimentos com foodService

const FoodForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFoods, setFilteredFoods] = useState<{ id: string; description: string }[]>([]);
    const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null); // Estado para armazenar o id do alimento selecionado
    const [consumptionDate, setConsumptionDate] = useState('');
    const [consumedAmount, setConsumedAmount] = useState('');
    const [mealType, setMealType] = useState<number | null>(null); // Estado para armazenar o tipo de refeição

    // Função para buscar alimentos com base no termo
    const handleSearch = async () => {
        if (searchTerm.trim() !== '') {
            const result = await foodService.search(searchTerm);
            if (!('error' in result)) {
                setFilteredFoods(result.items);
            } else {
                console.error(result.error);
                setFilteredFoods([]);
            }
        } else {
            setFilteredFoods([]);
        }
    };

    // Executa a busca quando a tecla Enter é pressionada
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    // Função para salvar o consumo de alimento
    const handleSave = async () => {
        if (selectedFoodId && consumptionDate && consumedAmount && mealType !== null) {
            const foodId = parseInt(selectedFoodId, 10); // O id do alimento precisa ser um número
            const quantity = parseInt(consumedAmount, 10); // A quantidade também é um número
            
            // Converter para string no formato 'YYYY-MM-DD'
            const date = consumptionDate; // Já está em formato string no formato 'YYYY-MM-DD'
    
            try {
                const response = await eatService.createFood(foodId, date, quantity, mealType); // Usando EatService para registrar o consumo
                if ('error' in response) {
                    console.error(response.error);
                } else {
                    console.log('Consumo registrado com sucesso!', response);
                    // Limpar os campos após o sucesso
                    setSearchTerm('');
                    setSelectedFoodId(null);
                    setConsumptionDate('');
                    setConsumedAmount('');
                    setMealType(null);
                    setFilteredFoods([]);
                }
            } catch (error) {
                console.error('Erro ao registrar o consumo:', error);
            }
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    // Função que lida com a seleção de um alimento
    const handleFoodSelect = (foodId: string, foodDescription: string) => {
        setSelectedFoodId(foodId); // Atualiza o ID do alimento selecionado
        setSearchTerm(foodDescription); // Preenche o campo de busca com a descrição do alimento
        setFilteredFoods([]); // Limpa a lista de alimentos filtrados
    };

    return (
        <div className={isModalOpen ? 'blurred-background' : 'auth-button-meal'} style={{ backgroundColor: 'transparent' }}>
            <CalendarCheck
                className='svg-stroke-green-700 set-style-foodform'
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: 'pointer', transform: 'translateX(-5%)' }}
            />

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>
                            &times;
                        </span>
                        <h3>Registro de Consumo Alimentar</h3>

                        <label>Busca alimento ou produto consumido:</label>
                        <input
                            className='search'
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Digite para buscar"
                        />
                        {filteredFoods.length > 0 && (
                            <ul className="dropdown-search">
                                {filteredFoods.map((food) => (
                                    <li
                                        key={food.id}
                                        onClick={() => handleFoodSelect(food.id, food.description)} // Atualiza o searchTerm com a descrição do alimento
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {food.description}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <label>Data de consumo:</label>
                        <input
                            className='input-custom'
                            type="date"
                            value={consumptionDate}
                            onChange={(e) => setConsumptionDate(e.target.value)}
                        />

                        <label>Quantidade consumida:</label>
                        <input
                            className='input-custom'
                            type="text"
                            value={consumedAmount}
                            onChange={(e) => setConsumedAmount(e.target.value)}
                            placeholder="Ex: 3 colheres"
                        />

                        <label>Periodo:</label>
                        <select
                            className='input-custom'
                            value={mealType ?? ''}
                            onChange={(e) => setMealType(Number(e.target.value))}
                        >
                            <option value="">Selecione</option>
                            <option value="0">Café da manhã</option>
                            <option value="1">Almoço</option>
                            <option value="2">Café da tarde</option>
                            <option value="3">Janta</option>
                        </select>

                        <Button label={'Salvar'} className='auth-button font-style: italic;' onClick={handleSave} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodForm;
