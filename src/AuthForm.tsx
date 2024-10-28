import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button onClick={() => setIsLogin(true)} className={ isLogin ? 'active' : 'underline' }>Login</button>
        <button onClick={() => setIsLogin(false)} className={ !isLogin ? 'active' : 'underline' }>Cadastro</button>
      </div>

      {isLogin ? (
        <form className="auth-form">
          <h2>Login</h2>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required className='input-custom'/>
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" required className='input-custom'/>
          </div>
          <button type="submit" className="auth-button">Entrar</button>
        </form>
      ) : (
        <form className="auth-form">
          <h2>Cadastro</h2>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" required />
          </div>
          <button type="submit" className="auth-button ">Cadastrar</button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
