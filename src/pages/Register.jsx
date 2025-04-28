import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de registro (pode usar Firebase, ou outra solução de backend)
    console.log('Registro:', email, password);
  };

  return (
    <div className="register-container">
      <h2>Criar Conta</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Criar Conta</button>
      </form>
    </div>
  );
};

export default Register;
