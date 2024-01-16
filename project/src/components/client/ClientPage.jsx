import React, { useEffect, useState } from 'react';
import ClientHeader from '../common/ClientHeader';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AnimalsList from './AnimalsList';

const ClientPage = () => {
  const location = useLocation();
  const userId = location.pathname.split('/').pop();

  return (
    <div>
      <ClientHeader />
      <div className="content">
        <h2>Страница клиента {userId}</h2>
        <div className="form">
          <AnimalsList  />
          <Link to={`/client/${userId}/animalform`}>
            <button>Добавить животное</button>
          </Link>
          <Link to={`/client/${userId}/requestform`}>
            <button>Добавить заявку</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
