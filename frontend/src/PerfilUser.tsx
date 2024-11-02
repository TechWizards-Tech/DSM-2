import React from 'react';
import './PerfilUser.css';
import user from './assets/user.jpeg';
import perderpeso from './assets/perderpeso.jpg';
import especial from './assets/especial.jpeg';
import { useNavigate } from 'react-router';

const PerfilUser = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/calorietracker");
      }

    const handleObjectiveClick = () => {
        // Adicione a lógica para o clique no objetivo aqui
        console.log("Objetivo clicado");
    };

    const handleDietClick = () => {
        // Adicione a lógica para o clique na dieta especial aqui
        console.log("Dieta especial clicada");
    };

    const handleIngestaoClick = () => {
        // Adicione a lógica para o clique na dieta especial aqui
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
                    <h2 className="profile-name">Raquel Massae</h2>
                    <p className="profile-email">raquelmassae@gmail.com</p>
                    <p className="profile-age-weight-height">19 anos. 50 kg, 1,51 cm.</p>
                </div>

                <div className="daily-tip">
                    <div><p>Dica do dia</p></div>
                    <div><p>Comer com atenção plena melhora a digestão</p></div>
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
                    <p>Peso Atual</p>

                </div>
                <div className="weight-card">
                    <p>Meta de peso</p>

                </div>
                <button className="weight-card" onClick={handleClick}>
                    <p>Ingestão Diária</p>
                </button>
            </div>
        </div>
    );
};

export default PerfilUser;