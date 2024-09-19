import React, { useState } from 'react';
import Login from './Login';
import Signup from './Cadastro';
import './AuthForm.css';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message); // Mensagem de sucesso
      } else {
        console.error(data.message); // Mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log(data.message); // Mensagem de sucesso
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Cadastro</button>
      </div>

      {isLogin ? (
        <Login onSubmit={handleLogin} />
      ) : (
        <Signup onSubmit={handleSignup} />
      )}
    </div>
  );
};

export default AuthForm;
