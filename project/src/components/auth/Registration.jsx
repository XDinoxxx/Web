import React, { useState } from 'react';
import Header from '../common/GeneralHeader';

const Registration = () => {
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

  const handleRegistration = () => {
    // Реализовать логику регистрации, отправить данные на сервер
    // Перенаправить пользователя на соответствующую страницу после успешной регистрации
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
          Роль:
          <select name="role_id" value={userData.role_id} onChange={handleInputChange}>
            <option value={1}>Клиент</option>
            <option value={2}>Петситтер</option>
          </select>
        </label>
        <button onClick={handleRegistration} className='submitButton'>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Registration;
