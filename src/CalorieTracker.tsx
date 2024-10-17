import React from 'react';
import './CalorieTracker.css'; // Importa os estilos
import MealCard from './MealCard';

const CalorieTracker = () => {
    const caloriesConsumed = 9999; // valor inicial
    const caloriesToConsume = 2802; // valor de exemplo
    const caloriesExercise = 9999; // valor inicial

    return (
        <div className="calories-container">

            <div className="colum">

                <div className="calories-left">
                    <p className='text-bold'>Consumidas</p>
                    <p className='text-fit'>{caloriesConsumed} kcal</p>
                </div>


                <div className="circle-center">
                    <p className='text-bold'>Consumir</p>
                    <p className='text-fit'>{caloriesToConsume} kcal</p>
                </div>


                <div className="calories-right">
                    <p className='text-bold'>Exercícios</p>
                    <p className='text-fit'>{caloriesExercise} kcal</p>
                </div>
            </div>

            <MealCard time='08:00' mealName='Cafe Manha' caloriesConsumed={10} totalCalories={120}/>
            <MealCard time='08:00' mealName='Almoço' caloriesConsumed={50} totalCalories={420}/>
            <MealCard time='08:00' mealName='Cafe Tarde' caloriesConsumed={10} totalCalories={110}/>
            <MealCard time='08:00' mealName='Janta' caloriesConsumed={80} totalCalories={510}/>


        </div>
    );
};

export default CalorieTracker;