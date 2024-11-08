import React, { useState } from 'react';
import './FoodForm.css';
import { CalendarCheck , Ham } from 'lucide-react';
import Button from './Button';


const FoodForm: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={isModalOpen ? 'blurred-background' : 'auth-button-meal'} style={{ backgroundColor: 'transparent' }}>
            <Ham
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
                            className='input-custom'
                            type="text"      
                            placeholder="Digite para buscar"
                        />
                       
                            <ul className="dropdown">
                                    <li></li>
                            </ul>
                    

                        <label>Data de consumo:</label>
                        <input
                            className='input-custom'
                            type="date"
                        />

                        <label>Quantidade consumida:</label>
                        <input
                            className='input-custom'
                            type="text"
                            placeholder="Ex: 3 colheres"
                        />

                        <label>Periodo:</label>
                        <select className='input-custom'>
                        
                            <option value="">Selecione</option>
                            <option value="Cafe da manha">Café da manhã</option>
                            <option value="Almoço">Almoço</option>
                            <option value="Cafe da tarde">Café da tarde</option>
                            <option value="Janta">Janta</option>
                        </select>

                        <Button label={'Salvar'} className='auth-buttonfont-style: italic;'/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodForm;
