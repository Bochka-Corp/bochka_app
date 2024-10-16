import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__container">
        404
        <div className="not-found__text">
          Страница по вашему запросу не найдена
          <button type="button" className="not-found__button" onClick={() => navigate(-1)}>
            Вернуться назад
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
