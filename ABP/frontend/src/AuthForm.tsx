import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';
import user from './services/user';
import { saveToLocalStorage } from './utils/localStorage'; // Função para salvar dados no localStorage

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    alias: '',
    mail: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = isLogin
        ? await user.login(formData.mail, formData.password)
        : await user.create(formData.alias, formData.mail, formData.password);

      if ('error' in response) {
        setError(response.error);
      } else {
        setSuccess(isLogin ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso!');

        // Se for cadastro, realiza login imediato
        if (!isLogin) {
          const loginResponse = await user.login(formData.mail, formData.password);

          if ('error' in loginResponse) {
            setError('Erro ao efetuar login após o cadastro');
          } else {
            saveToLocalStorage('userSession', loginResponse); // Salva a sessão
            navigate('/carousel'); // Redireciona para o carrossel
          }
        } else {
          saveToLocalStorage('userSession', response); // Salva a sessão após login
          navigate('/perfiluser'); // Redireciona para página de perfil do usuário
        }
      }
    } catch (err: any) {
      console.error('Erro completo:', err);
      setError('Erro ao processar a solicitação');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : 'underline'}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : 'underline'}>Cadastro</button>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        {!isLogin && (
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="alias"
              value={formData.alias}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="auth-button">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
