import React from 'react';
import ClientHeader from '../common/ClientHeader';
import { Link } from 'react-router-dom';

const ClientPage = () => {
  // Логика добавления питомца и создания заявки
  return (
    <div>
      <ClientHeader />
      <div className="content">
        <h2>Страница клиента</h2>
        <div className="form">
          {/* Список питомцев */}
          <Link to='/client/animalform'>
            <button>Добавить животное</button>
          </Link>

          {/* Форма для создания заявки на выгул */}
          <Link to='/client/requestform'>
            <button>Добавить заявку</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;