import React, { useState } from 'react';

interface SignupProps {
  onSubmit: (name: string, email: string, password: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Signup;
