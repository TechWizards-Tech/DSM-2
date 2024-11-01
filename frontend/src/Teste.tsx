
// UserPage.tsx
import React from 'react';
import './Teste.css';

const Teste: React.FC = () => {
  const handleLogout = () => {
    // Aqui você pode implementar a lógica de logout
    console.log('Logout realizado com sucesso!');
  };

  return (
    <div className="user-page">
      <div className="user-page-content">
        <h1>Bem-vindo(a) à sua página, usuário!</h1>
        <p>Aqui você pode acessar seus dados e configurações.</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Teste;
=======
    return (
     
            <p>TESTE USER PAGE!</p>
    
    )
}


export default Teste;
>>>>>>> ad7bdf2d7cf6c2256ea1a73013617532c5d72e82
