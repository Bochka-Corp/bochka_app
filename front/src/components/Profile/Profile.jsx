import React from 'react';

function Profile() {
  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Профиль
        </h1>
        <div className="profile__container">
          <p className="profile__text">
            <span className="profile__text_highlighted">Имя:</span>
            {' '}
            Богдан
          </p>
          <p className="profile__text">
            <span className="profile__text_highlighted">Email:</span>
            {' '}
            email@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
