import React, { useState, useEffect } from 'react';
import './CalorieTracker.css';
import MealCard from './MealCard';
import FoodForm from './FoodForm';
import profileService from './services/profile';

const CalorieTracker = () => {
    const [caloriesConsumed] = useState(9999);
    const [caloriesToConsume, setCaloriesToConsume] = useState<number | null>(null);
    const [caloriesExercise] = useState(9999);
    const [consumptionRecords, setConsumptionRecords] = useState<
        { food: string; date: string; amount: string; meal: string }[]
    >([]);

    useEffect(() => {
        // Função para obter o valor de caloriesToConsume (BMR)
        const fetchCaloriesToConsume = async () => {
            const response = await profileService.calculateBMR();
            if ("BMR" in response) {
                setCaloriesToConsume(response.BMR);
            } else {
                console.error("Erro ao obter BMR:", response.error);
            }
        };

        fetchCaloriesToConsume();
    }, []);

    const handleAddConsumptionRecord = (newRecord: {
        food: string;
        date: string;
        amount: string;
        meal: string;
    }) => {
        setConsumptionRecords([...consumptionRecords, newRecord]);
    };

    return (
        <div className="calories-container">
            <div className="colum">
                <div className="calories-left">
                    <p className='text-bold'>Consumidas</p>
                    <p className='text-fit'>{caloriesConsumed} kcal</p>
                </div>

                <div className="circle-center">
                    <p className='text-bold'>Consumir</p>
                    <p className='text-fit'>
                        {caloriesToConsume !== null ? `${caloriesToConsume} kcal` : 'Carregando...'}
                    </p>
                </div>

                <div className="calories-right">
                    <FoodForm onAddRecord={handleAddConsumptionRecord} />
                </div>
            </div>

            <MealCard
                time='08:00'
                mealName='Cafe Manha'
                caloriesConsumed={10}
                totalCalories={110}
                consumptionRecords={consumptionRecords}
            />
            <MealCard
                time='12:00'
                mealName='Almoço'
                caloriesConsumed={10}
                totalCalories={320}
                consumptionRecords={consumptionRecords}
            />
            <MealCard
                time='17:00'
                mealName='Cafe Tarde'
                caloriesConsumed={10}
                totalCalories={120}
                consumptionRecords={consumptionRecords}
            />
            <MealCard
                time='20:00'
                mealName='Janta'
                caloriesConsumed={10}
                totalCalories={450}
                consumptionRecords={consumptionRecords}
            />
        </div>
    );
};

export default CalorieTracker;
