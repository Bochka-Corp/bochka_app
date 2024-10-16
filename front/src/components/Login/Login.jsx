import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/');
    sessionStorage.setItem('isLoggedIn', true);
  }

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Вход
        </h1>
        <form className="login__form">
          <span className="login__label">
            Email
          </span>
          <input className="login__input" type="email" placeholder="username@gmail.com" />
          <span className="login__label">
            Пароль
          </span>
          <input className="login__input" type="password" placeholder="Пароль" />
          <button className="login__submit" onClick={handleLogin} type="submit">
            Вход
          </button>
          <p className="login__text">
            или продолжите с помощью
          </p>
          <button type="button" className="login__button" />
          <p className="login__text">
            Нет аккаунта?
            {' '}
            <Link to="/register" className="login__link">Зарегистрироваться</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
