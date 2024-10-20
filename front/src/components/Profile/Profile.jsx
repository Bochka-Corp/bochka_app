import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  }

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Профиль
        </h1>
        <div className="profile__container">
          <p className="profile__text">
            <span className="profile__text_highlighted">Email:</span>
            {' '}
            {localStorage.getItem('userEmail')}
          </p>
          <button className="profile__button" onClick={handleLogout} type="button">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
