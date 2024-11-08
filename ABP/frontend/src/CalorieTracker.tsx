import React, { useState, useEffect } from 'react';
import './CalorieTracker.css';
import MealCard from './MealCard';
import FoodForm from './FoodForm';
import profileService from './services/profile';
import { CalendarCheck } from 'lucide-react';

const CalorieTracker = () => {

        const [caloriesConsumed] = useState(9999);
        const [caloriesToConsume, setCaloriesToConsume] = useState<number | null>(null);

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
                        <FoodForm />
                    </div>

                    <div className="date">
                        
                        <CalendarCheck
                            className='svg-stroke-green-700 set-style-foodform hover-bg'
                            style={{ cursor: 'pointer', borderRadius: '0% 25% 25% 0%' }}
                            
                        />
                        <input className="input-custom" type="date"></input>
                    </div>

                </div>

                <MealCard
                    time="08:00"
                    mealName="Cafe da Manha"
                    caloriesConsumed={10}
                    period={0}
                />
                <MealCard
                    time='12:00'
                    mealName='Almoço'
                    caloriesConsumed={10}
                    period={1}
                />
                <MealCard
                    time='17:00'
                    mealName='Cafe da Tarde'
                    caloriesConsumed={10}
                    period={2}
                />
                <MealCard
                    time='20:00'
                    mealName='Janta'
                    caloriesConsumed={10}
                    period={3}
                />
            </div>
        );
    };


export default CalorieTracker;
