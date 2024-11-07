import React, { useState, useEffect } from 'react';
import './CalorieTracker.css';
import MealCard from './MealCard';
import FoodForm from './FoodForm';
import profileService from './services/profile';

const CalorieTracker = () => {
    const [caloriesConsumed] = useState(9999);
    const [caloriesToConsume, setCaloriesToConsume] = useState<number | null>(null);
    const [consumptionRecords, setConsumptionRecords] = useState<
        { food: string; date: string; amount: string; meal: string }[]
    >([]);

    useEffect(() => {
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

    const filterRecordsByMeal = (mealType: string) =>
        consumptionRecords.filter(record => record.meal === mealType);

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
                mealName='Cafe da Manha'
                caloriesConsumed={10}
                totalCalories={110}
                consumptionRecords={filterRecordsByMeal('Cafe da manha')}
            />
            <MealCard
                time='12:00'
                mealName='Almoço'
                caloriesConsumed={10}
                totalCalories={320}
                consumptionRecords={filterRecordsByMeal('Almoço')}
            />
            <MealCard
                time='17:00'
                mealName='Cafe da Tarde'
                caloriesConsumed={10}
                totalCalories={120}
                consumptionRecords={filterRecordsByMeal('Cafe da tarde')}
            />
            <MealCard
                time='20:00'
                mealName='Janta'
                caloriesConsumed={10}
                totalCalories={450}
                consumptionRecords={filterRecordsByMeal('Janta')}
            />
        </div>
    );
};

export default CalorieTracker;
