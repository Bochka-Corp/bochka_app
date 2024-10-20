import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/Api.js';

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRejectRegister(err) {
    setError(err);
    setTimeout(() => setError(''), 3000);
  }

  function handleSuccessRegister() {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    localStorage.setItem('isLoggedIn', true);
    navigate('/');
  }

  function handleRegister(e) {
    e.preventDefault();
    api.register({
      name,
      email,
      password,
    })
      .then(() => handleSuccessRegister())
      .catch((err) => handleRejectRegister(err));
  }

  return (
    <section className="login">
      <div className="login__container">
        <h1 className="login__title">
          Регистрация
        </h1>
        <form className="login__form" onSubmit={handleRegister}>
          <span className="login__label">
            Ваше имя
          </span>
          <input className="login__input" type="text" placeholder="Богдан" value={name} onChange={handleNameChange} />
          <span className="login__label">
            Email
          </span>
          <input className="login__input" type="email" placeholder="username@gmail.com" value={email} onChange={handleEmailChange} />
          <span className="login__label">
            Пароль
          </span>
          <input className="login__input" type="password" placeholder="********" value={password} onChange={handlePasswordChange} />
          <p className="login__text login__text_error">
            {error}
          </p>
          <button className="login__submit" type="submit">
            Регистрация
          </button>
          <p className="login__text">
            Есть аккаунт?
            {' '}
            <Link to="/login" className="login__link">Войти</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
