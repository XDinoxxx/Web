import React, { useState } from 'react';
import Header from '../common/GeneralHeader';
import { useNavigate } from 'react-router';

const Registration = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    login: '',
    password: '',
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    role_id: 1, // по умолчанию клиент
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:3000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Пользователь успешно зарегистрирован:', result);
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Ошибка регистрации:', errorData.message);
        document.querySelector(".error-message").innerText = errorData.error;
      }
    } catch (error) {
      console.log('Ошибка на стороне клиента:', error.message);
    }
  };


  return (
    <div>
      <Header />
      <div className='form'>
        <h2>Регистрация</h2>
        <label>
          Логин:
          <input type="text" name="login" value={userData.login} onChange={handleInputChange} />
        </label>
        <label>
          Пароль:
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
        </label>
        <label>
          Имя:
          <input type="text" name="first_name" value={userData.first_name} onChange={handleInputChange} />
        </label>
        <label>
          Фамилия:
          <input type="text" name="last_name" value={userData.last_name} onChange={handleInputChange} />
        </label>
        <label>
          Адрес:
          <input type="text" name="address" value={userData.address} onChange={handleInputChange} />
        </label>
        <label>
          Номер телефона:
          <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
        </label>
        <label>
          Роль: <br></br>
          <select name="role_id" value={userData.role_id} onChange={handleInputChange}>
            <option value={1}>Клиент</option>
            <option value={2}>Петситтер</option>
          </select>
        </label>
        <span className="error-message"></span>
        <button onClick={handleRegistration} className='submitButton'>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;