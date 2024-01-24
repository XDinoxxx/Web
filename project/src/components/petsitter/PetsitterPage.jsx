import React from 'react';
import PetsitterHeader from '../common/PetsitterHeader';
import { useLocation } from 'react-router';

const PetsitterPage = () => {
  const location = useLocation();
  const userId = location.pathname.split('/').pop();

  // Логика отзывов для петситтера
  return (
    <div>
      <PetsitterHeader />
      <div className="content">
        <h2>Страница петситтера {userId}</h2>
        {/* Отображение отзывов */}
        Тут что-то должно было быть...
      </div>
    </div>
  );
};

export default PetsitterPage;
