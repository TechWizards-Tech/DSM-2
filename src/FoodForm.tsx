import React, { useState } from 'react';

const FoodForm = () => {
    // Lista de alimentos (simulação de uma tabela de alimentos)
    const foodList = [
        'Arroz carreteiro',
        'Arroz, integral, cozido',
        'Arroz, integral, cru',
        'Arroz, tipo 1, cozido',
        'Arroz, tipo 1, cru',
        'Arroz, tipo 2, cozido',
        'Arroz, tipo 2, cru',
        'Baião de dois, arroz e feijão-de-corda',
        'Bolinho de arroz',
        'Creme de arroz, pó',
        'Farinha, de arroz, enriquecida'
    ];

    // Estados para armazenar valores
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFoods, setFilteredFoods] = useState<string[]>([]);
    const [selectedFood, setSelectedFood] = useState<string | null>(null);
    const [consumptionDate, setConsumptionDate] = useState('');
    const [consumedAmount, setConsumedAmount] = useState('');
    const [consumptionRecords, setConsumptionRecords] = useState<
        { food: string; date: string; amount: string }[]
    >([]);

    // Função para filtrar alimentos com base no termo de busca
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearchTerm(search);
        if (search) {
            const filtered = foodList.filter((food) =>
                food.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredFoods(filtered);
        } else {
            setFilteredFoods([]);
        }
    };

    // Função para selecionar o alimento do dropdown
    const handleSelectFood = (food: string) => {
        setSelectedFood(food);
        setSearchTerm(food); // Preenche o input com o alimento selecionado
        setFilteredFoods([]); // Fecha o dropdown
    };

    // Função para salvar as informações
    const handleSave = () => {
        if (selectedFood && consumptionDate && consumedAmount) {
            const newRecord = {
                food: selectedFood,
                date: consumptionDate,
                amount: consumedAmount,
            };
            setConsumptionRecords([...consumptionRecords, newRecord]);
            // Limpa os campos
            setSearchTerm('');
            setSelectedFood(null);
            setConsumptionDate('');
            setConsumedAmount('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div>
            <h3>Registro de Consumo Alimentar</h3>
            <label>Busca alimento ou produto consumido:</label>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Digite para buscar"
            />
            {/* Dropdown para alimentos filtrados */}
            {filteredFoods.length > 0 && (
                <ul className="dropdown">
                    {filteredFoods.map((food, index) => (
                        <li  className='dropli' key={index} onClick={() => handleSelectFood(food)}>
                            {food}
                        </li>
                    ))}
                </ul>
            )}

            <br />

            <label>Data de consumo:</label>
            <input
                type="date"
                value={consumptionDate}
                onChange={(e) => setConsumptionDate(e.target.value)}
            />

            <br />

            <label>Quantidade consumida:</label>
            <input
                type="text"
                value={consumedAmount}
                onChange={(e) => setConsumedAmount(e.target.value)}
                placeholder="Ex: 3 colheres"
            />

            <br />

            <button onClick={handleSave}>Salvar</button>

            {/* Lista de registros salvos */}
            {consumptionRecords.length > 0 && (
                <div>
                    <h4>Registros de Consumo</h4>
                    <ul>
                        {consumptionRecords.map((record, index) => (
                            <li key={index}>
                                {record.food} - {record.amount} - {record.date}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FoodForm;
