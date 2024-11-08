import React, { useState, useEffect } from 'react';
import './CalorieTracker.css';
import MealCard from './MealCard';
import FoodForm from './FoodForm';
import profileService from './services/profile';
import eatService from './services/Eat';
import { CalendarCheck } from 'lucide-react';

const CalorieTracker = () => {
    const [caloriesConsumed, setCaloriesConsumed] = useState<number | null>(null);
    const [caloriesToConsume, setCaloriesToConsume] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        const fetchCaloriesToConsume = async () => {
            const response = await profileService.calculateBMR();
            if ("BMR" in response) {
                setCaloriesToConsume(response.BMR);
            } else {
                console.error("Erro ao obter BMR:", response.error);
            }
        };

        const fetchDailyCalories = async () => {
            const response = await eatService.getDailyCalories(selectedDate);
            if (typeof response === "number") {
                setCaloriesConsumed(response);
            } else {
                console.error("Erro ao obter calorias diárias:", response.error);
            }
        };

        fetchCaloriesToConsume();
        fetchDailyCalories();
    }, [selectedDate]);

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className="calories-container">
            <div className="colum">
                <div className="calories-left">
                    <p className='text-bold'>Consumidas</p>
                    <p className='text-fit'>
                        {caloriesConsumed !== null ? `${caloriesConsumed} kcal` : 'Carregando...'}
                    </p>
                </div>

                <div className="circle-center">
                    <p className='text-bold'>Consumir</p>
                    <p className='text-fit'>
                        {caloriesToConsume !== null ? `${caloriesToConsume} kcal` : 'Carregando...'}
                    </p>
                </div>

                <div className="calories-right">
                    <FoodForm />
                </div>

                <div className="date">
                    <CalendarCheck
                        className='svg-stroke-green-700 set-style-foodform hover-bg'
                        style={{ cursor: 'pointer', borderRadius: '0% 25% 25% 0%' }}
                    />
                    <input className="input-custom" type="date" value={selectedDate} onChange={handleDateChange} />
                </div>
            </div>

            <MealCard time="08:00" mealName="Café da Manhã" caloriesConsumed={10} period={0} />
            <MealCard time="12:00" mealName="Almoço" caloriesConsumed={10} period={1} />
            <MealCard time="17:00" mealName="Café da Tarde" caloriesConsumed={10} period={2} />
            <MealCard time="20:00" mealName="Jantar" caloriesConsumed={10} period={3} />
        </div>
    );
};

export default CalorieTracker;
