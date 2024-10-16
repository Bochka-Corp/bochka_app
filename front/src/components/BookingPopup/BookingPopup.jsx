import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../assets/images/check.svg';

function BookingPopup({
  hotel, name, surname, email, isOpen, closePopup,
}) {
  return (
    <div className={isOpen ? 'booking-popup booking-popup_active' : 'booking-popup'}>
      <div className="booking-popup__container">
        <img src={check} alt="галочка" className="booking-popup__img" />
        <h2 className="booking-popup__title">
          Ваш заказ успешно оформлен
        </h2>
        <div className="booking-popup__text">
          <p className="booking-popup__text-item">
            Отель:
            {' '}
            {`"${hotel.name}"`}
          </p>
          <p className="booking-popup__text-item">
            {`${surname} ${name} - ${sessionStorage.getItem('guests')} гостя (-ей)`}
          </p>
          <p className="booking-popup__text-item">
            {sessionStorage.getItem('enter')}
            .10.2024 -
            {sessionStorage.getItem('exit')}
            .10.2024
          </p>
          <div className="booking-popup__text-email">
            <p className="booking-popup__text-item">
              Также заказ отправлен на почту:
            </p>
            <p className="booking-popup__text-item">
              {email}
            </p>
          </div>
        </div>
        <Link to="/" onClick={closePopup} className="booking-popup__button">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default BookingPopup;
