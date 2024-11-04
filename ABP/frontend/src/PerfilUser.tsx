import React, { useEffect, useState } from 'react';
import './PerfilUser.css';
import user from './assets/user.jpeg';
import perderpeso from './assets/perderpeso.jpg';
import especial from './assets/especial.jpeg';
import { useNavigate } from 'react-router';

const PerfilUser = () => {
    const navigate = useNavigate();
    const [alias, setAlias] = useState('');
    const [mail, setMail] = useState('');

    useEffect(() => {
        const userSession = localStorage.getItem('userSession');
        if (userSession) {
            const parsedSession = JSON.parse(userSession);
            setAlias(parsedSession.alias);
            setMail(parsedSession.mail);
        }
    }, []);

    function handleClick() {
        navigate("/calorietracker");
    }

    const handleObjectiveClick = () => {
        console.log("Objetivo clicado");
    };

    const handleDietClick = () => {
        console.log("Dieta especial clicada");
    };

    const handleIngestaoClick = () => {
        console.log("Dieta especial clicada");
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    <img
                        src={user}
                        alt="Foto de perfil"
                        className="profile-image"
                    />
                    <h2 className="profile-name">{alias}</h2>
                    <p className="profile-email">{mail}</p>
                    <p className="profile-age-weight-height">19 anos. 50 kg, 1,51 cm.</p>
                </div>
                <div className="daily-tip">
                    <div><h2>Dica do dia</h2></div>
                    <div><p>"Comer com atenção plena melhora a digestão."</p></div>
                </div>
            </div>
            <div className="diets-section">
                <div className="diet-objectives">
                    <button className="diet-card" onClick={handleObjectiveClick}>
                        <p>Meu objetivo</p>
                        <img src={perderpeso} alt="Objetivo" />
                    </button>
                    <button className="diet-card" onClick={handleDietClick}>
                        <p>Minha dieta especial</p>
                        <img src={especial} alt="Especial" />
                    </button>
                </div>
            </div>
            <div className="weight-section">
                <div className="weight-card">
                    <h3>Peso Atual</h3>
                </div>
                <div className="weight-card">
                    <h3>Meta de peso</h3>
                </div>
                <button className="weight-card button-to-calorie-tracker" onClick={handleClick}>
                    <p>Ver sua ingestão diária ou adicionar um alimento</p>
                </button>
            </div>
        </div>
    );
};

export default PerfilUser;
