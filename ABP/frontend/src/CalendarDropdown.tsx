import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarCheck } from 'lucide-react';
import './CalendarDropdown.css';

const CalendarDropdown: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const calendarRef = useRef<HTMLDivElement | null>(null); // Referência para o calendário

    // Função para salvar a data no backend
    const saveDateToBackend = async (date: Date) => {
        try {
            const response = await fetch('https://seu-backend.com/api/save-date', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date: date.toISOString() }), // Convertendo para o formato ISO
            });

            if (response.ok) {
                console.log('Data salva com sucesso!');
            } else {
                console.error('Erro ao salvar a data.');
            }
        } catch (error) {
            console.error('Erro ao salvar a data:', error);
        }
    };

    // Função que lida com a seleção de uma data
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date); // Atualiza o estado com a nova data
            saveDateToBackend(date); // Envia a data para o backend
            setIsModalOpen(false); // Fecha o dropdown
        }
    };

    // Função para fechar o calendário se o clique for fora do dropdown
    const handleClickOutside = (event: MouseEvent) => {
        if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
            setIsModalOpen(false); // Fecha o calendário se o clique for fora do calendário
        }
    };

    // Adiciona o ouvinte de evento para cliques fora do calendário
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside); // Remove o ouvinte quando o componente for desmontado
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <CalendarCheck
                aria-label="Abrir calendário"
                className='svg-stroke-green-700 set-style-foodform'
                onClick={() => setIsModalOpen(!isModalOpen)}
                size={50}
                style={{ cursor: 'pointer', transform: 'translateX(-5%)' }}
            />

            {isModalOpen && (
                <div
                    ref={calendarRef} // Atribuindo a referência ao calendário
                    style={{
                        position: 'absolute',
                        top: '40px',
                        zIndex: 1000,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: 'white'
                    }}
                >
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange} // Passa a função para lidar com a data
                        inline
                        calendarClassName="custom-calendar"
                        locale="pt"
                    />
                </div>
            )}
        </div>
    );
};

export default CalendarDropdown;
