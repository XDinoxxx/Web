// Login.jsx

import React, { useState } from 'react';
import Header from '../common/GeneralHeader';

const Login = () => {
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Реализовать логику входа, проверить роль пользователя
    // Перенаправить пользователя на соответствующую страницу после успешного входа
  };

  return (
    <div>
      <Header />
      <div className='form'>
        <h2>Вход</h2>
        <label>
          Логин:
          <input type="text" name="login" value={loginData.login} onChange={handleInputChange} />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        </label>
        <button onClick={handleLogin} className='submitButton'>Войти</button>
      </div>
    </div>
  );
};

export default Login;
