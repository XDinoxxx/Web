import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../common/GeneralHeader';

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });


      if (response.ok) {
        const user = await response.json();
        if (user.role_id === 1) {
          navigate('/client');
        } else if (user.role_id === 2) {
          navigate('/petsitter');
        } else {
          navigate('/');
        }
      } else {
        const errorData = await response.json();
        console.error(`Ошибка входа: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Произошла ошибка', error);
    }
  };

  return (
    <div>
      <Header />
      <div className='form'>
        <h2>Вход</h2>
        <label>
          Логин:
          <input type='text' name='login' value={loginData.login} onChange={handleInputChange} />
        </label>
        <label>
          Пароль:
          <input type='password' name='password' value={loginData.password} onChange={handleInputChange} />
        </label>
        <button onClick={handleLogin} className='submitButton'>
          Войти
        </button>
      </div>
    </div>
  );
};

export default Login;
