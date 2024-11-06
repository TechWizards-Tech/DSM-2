import React, { useEffect, useState } from 'react';
import './PerfilUser.css';
import user from './assets/user.jpeg';
import perderpeso from './assets/perderpeso.jpg';
import especial from './assets/especial.jpeg';
import { useNavigate } from 'react-router';
import profileService from './services/profile';
import { ErrorProps } from './types';

const PerfilUser = () => {
    const [profileData, setProfileData] = useState<{
        alias: string;
        mail: string;
        age: number;
        weight: number;
        height_cm: number;
    } | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            const profile = await profileService.getUserProfile();

            if ('error' in profile) {
                console.error("Erro ao carregar perfil:", profile.error);
            } else {
                setProfileData(profile);
            }
        };

        fetchProfileData();
    }, []);

    const handleClick = () => {
        navigate("/calorietracker");
    };

    const handleObjectiveClick = () => {
        console.log("Objetivo clicado");
    };

    const handleDietClick = () => {
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
                    <h2 className="profile-name">{profileData ? profileData.alias : 'Usuário'}</h2>
                    <p className="profile-email">{profileData ? profileData.mail : 'email@exemplo.com'}</p>
                    {profileData ? (
                        <p className="profile-age-weight-height">
                            {profileData.age} anos, {profileData.weight} kg, {profileData.height_cm} cm.
                        </p>
                    ) : (
                        <p className="profile-age-weight-height">Carregando perfil...</p>
                    )}
                </div>

                <div className="daily-tip">
                    <h2>Dica do dia</h2>
                    <p>"Comer com atenção plena melhora a digestão."</p>
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
