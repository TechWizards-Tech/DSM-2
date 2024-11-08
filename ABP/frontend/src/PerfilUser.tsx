import React, { useEffect, useState } from 'react';
import './PerfilUser.css';
import user from './assets/user.jpeg';
import perderpeso from './assets/perderpeso.jpg';
import especial from './assets/especial.jpeg';
import { useNavigate } from 'react-router';
import profileService from './services/profile';
import { ErrorProps } from './types';
import { CircleUserRound } from 'lucide-react';

const PerfilUser = () => {
    const [profileData, setProfileData] = useState<{
        alias: string;
        mail: string;
        age: number;
        weight: number;
        height_cm: number;
    } | null>(null);
    
    const [idealWeight, setIdealWeight] = useState<number | null>(null);
    const [dailyTip, setDailyTip] = useState<string>('');  // Adiciona o estado para a dica do dia
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

        const fetchIdealWeight = async () => {
            const result = await profileService.getIdealWeight();
            if ('error' in result) {
                console.error("Erro ao calcular peso ideal:", result.error);
            } else {
                setIdealWeight(result.idealWeight);
            }
        };

        const fetchRandomTip = async () => {
            const result = await profileService.getRandomTip();
            if ('error' in result) {
                console.error("Erro ao carregar dica:", result.error);
            } else {
                setDailyTip(result.tip);  // Define a dica aleatória no estado
            }
        };

        fetchProfileData();
        fetchIdealWeight();
        fetchRandomTip();  // Chama a função para pegar a dica

    }, []);

    const handleClick = () => {
        navigate("/calorietracker");
    };

    const handleObjectiveClick = () => {
        console.log("Objetivo clicado");
        navigate('/objetivo');
    };

    const handleDietClick = () => {
        console.log("Dieta especial clicada");
        navigate('/dietaespecial');
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-info">
                    {/* <img
                        src={user}
                        alt="Foto de perfil"
                        className="profile-image"
                    /> */}
                    
                    <CircleUserRound className='foto svg-stroke-green-700'/>
                    
                    <h2 className="profile-name">{profileData ? profileData.alias : 'Usuário'}</h2>
                    <p className="profile-email">{profileData ? profileData.mail : 'email@exemplo.com'}</p>
                    {profileData ? (
                        <p className="profile-age-weight-height">
                            {profileData.age} anos, {profileData.height_cm} cm.
                        </p>
                    ) : (
                        <p className="profile-age-weight-height">Carregando perfil...</p>
                    )}
                </div>

                <div className="daily-tip">
                    <h2>Dica do dia</h2>
                    <p>{dailyTip || "Carregando dica..."}</p>  {/* Exibe a dica aleatória */}
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
        {profileData ? (
            <p>{profileData.weight} kg</p> // Exibe o peso atual
        ) : (
            <p>Carregando...</p>
        )}
    </div>
                <div className="weight-card">
                    <h3>Peso Ideal</h3>
                    {idealWeight !== null ? (
                        <p>{idealWeight.toFixed(1)} kg</p>
                    ) : (
                        <p>Calculando...</p>
                    )}
                </div>
                <button className="weight-card button-to-calorie-tracker" onClick={handleClick}>
                    <p>Diário de alimentação</p>
                </button>
            </div>
        </div>
    );
};

export default PerfilUser;
