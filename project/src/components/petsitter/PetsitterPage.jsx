import React from 'react';
import { useLocation } from 'react-router';

const PetsitterPage = () => {
  const location = useLocation();
  const userId = location.pathname.split('/').pop();

  // Логика отзывов для петситтера
  return (
    <div>
      <div className="content">
        <h2>Страница петситтера {userId}</h2>
        Тут что-то должно было быть...
      </div>
    </div>
  );
};

export default PetsitterPage;
