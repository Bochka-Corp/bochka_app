import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/Api.js';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const [error, setError] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function switchAdmin(e) {
    setIsAdmin(e.target.checked);
  }

  function handleRejectLogin(err) {
    setError(err);
    setTimeout(() => setError(''), 3000);
  }

  function handleSuccessLogin() {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('isLoggedIn', true);
    if (isAdmin) {
      localStorage.setItem('isAdmin', isAdmin);
    } else {
      localStorage.setItem('isAdmin', '');
    }
    navigate('/');
  }

  function handleLogin(e) {
    e.preventDefault();
    api.login({
      email,
      password,
    })
      .then(() => handleSuccessLogin())
      .catch((err) => handleRejectLogin(err));
  }

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Вход
        </h1>
        <form className="login__form" onSubmit={handleLogin}>
          <span className="login__label">
            Email
          </span>
          <input className="login__input" type="email" placeholder="username@gmail.com" value={email} onChange={handleEmailChange} />
          <span className="login__label">
            Пароль
          </span>
          <input className="login__input" type="password" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
          <p className="login__text login__text_error">
            {error}
          </p>
          <label className="login__text login__text_admin">
            <input className="login__checkbox" type="checkbox" value={isAdmin} onChange={switchAdmin} />
            Войти как админ
          </label>
          <button className="login__submit" type="submit">
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
