import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import BookingPopup from '../BookingPopup/BookingPopup.jsx';
import api from '../../utils/Api.js';
import Loader from '../Loader/Loader.jsx';

function Booking() {
  const { hotelId, roomId } = useParams();

  const [hotel, setHotel] = useState({ photos: [] });
  const [room, setRoom] = useState({ photos: [{ url: '' }] });

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleSurnameInput(e) {
    setSurname(e.target.value);
  }

  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePhoneInput(e) {
    setPhone(e.target.value);
  }

  function handleSubmit() {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('surname', surname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
    api.createBooking({
      hotel,
      room,
      startDate: `2024-10-${sessionStorage.getItem('enter')}`,
      finishDate: `2024-10-${sessionStorage.getItem('exit')}`,
    })
      .then(setIsPopupOpen(true));
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    api.getHotel(hotelId)
      .then((res) => setHotel(res));
    api.getRoom(roomId)
      .then((res) => setRoom(res))
      .finally(setIsLoad(true));
  }, [hotelId, roomId]);

  return (
    (
      isLoad ? (
        <section className="booking">
          <Header />
          <div className="booking__container">
            <div className="booking__sections">
              <div className="booking__info">
                <div className="booking__about">
                  <div className="booking__header">
                    <h1 className="booking__title">
                      {hotel.name}
                      {' '}
                      {hotel.stars}
                      {' '}
                      <svg
                        version="1.1"
                        viewBox="0 0 34 34"
                        width="30"
                        height="30"
                        fill="#3CB371"
                        stroke="#3CB371"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z"
                          id="XMLID_328_"
                        />
                      </svg>
                    </h1>
                    <div className="booking__title-info">
                      <span className="booking__review">
                        5
                      </span>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.3764 17.9909C10.9642 17.4405 12.2819 16.0347 15 12.5013C19.1669 7.08464 14.5597 1.66797 9.9573 1.66797C5.35493 1.66797 0.833408 7.08464 5 12.5013C7.50159 15.7534 8.93661 17.3166 9.56784 17.9578C9.79969 18.1933 10.1352 18.2168 10.3764 17.9909ZM10 11.668C11.8409 11.668 13.3333 10.1756 13.3333 8.33464C13.3333 6.49369 11.8409 5.0013 10 5.0013C8.15905 5.0013 6.66667 6.49369 6.66667 8.33464C6.66667 10.1756 8.15905 11.668 10 11.668Z"
                          fill="#3CB371"
                          stroke="#3CB371"
                          strokeWidth="1.25"
                        />
                      </svg>
                      {hotel.address}
                    </div>
                  </div>

                  <div className="booking__dates-info">
                    <div className="booking__dates">
                      <div className="booking__date">
                        <span className="booking__day">
                          {sessionStorage.getItem('enter')}
                          {' '}
                          октября
                        </span>
                        <span className="booking__time">
                          c
                          {' '}
                          {room.checkInHours}
                          :00
                        </span>
                      </div>
                      <div className="booking__date booking__date_dash" />
                      <div className="booking__date">
                        <span className="booking__day">
                          {sessionStorage.getItem('exit')}
                          {' '}
                          октября
                        </span>
                        <span className="booking__time">
                          до
                          {' '}
                          {room.checkOutHours}
                          :00
                        </span>
                      </div>
                    </div>
                    <p className="booking__adults">
                      {sessionStorage.getItem('guests')}
                      {' '}
                      взрослых
                    </p>
                  </div>

                  <div className="booking__room-info">
                    <h2 className="booking__room-name">
                      {room.name}
                    </h2>
                    <p className="booking__room-beds">
                      Места в номере
                    </p>
                    <p className="booking__beds">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.66054 5.57111C8.22361 5.89512 6.65989 6.06417 5.08209 6.06417C3.50428 6.06417 1.92647 5.89512 0.503628 5.57111C0.278227 5.52885 0.0669146 5.66972 0.0105639 5.89512C-0.00352287 5.95147 -0.00352287 6.00782 0.0105639 6.06417C0.123264 6.68403 0.235965 7.33206 0.32049 8.02235C0.405016 8.69855 0.447279 9.40293 0.447279 10.1355C0.447279 10.8539 0.405016 11.5583 0.32049 12.2345C0.235965 12.9389 0.123264 13.5869 0.0105639 14.2068C-0.0316982 14.4322 0.109177 14.6435 0.334578 14.6858C0.390928 14.6998 0.447278 14.6998 0.503628 14.6858C1.92647 14.3617 3.50428 14.1927 5.08209 14.1927C6.65989 14.1927 8.22361 14.3617 9.66054 14.6858C9.88595 14.728 10.0973 14.5871 10.1536 14.3758C10.1677 14.3054 10.1677 14.249 10.1536 14.1927C10.0409 13.5728 9.92821 12.9248 9.84368 12.2345C9.75916 11.5583 9.7169 10.8539 9.7169 10.1355C9.7169 9.40293 9.75916 8.69855 9.84368 8.02235C9.92821 7.33206 10.0409 6.66994 10.1536 6.05009C10.1959 5.82469 10.055 5.61337 9.8296 5.57111C9.77325 5.55702 9.7169 5.55702 9.66054 5.57111ZM15.5632 2.28871C14.0981 2.35915 12.5203 2.24645 10.9707 1.97878C9.42106 1.69703 7.8996 1.2744 6.54719 0.696814C6.33588 0.612288 6.09639 0.710901 6.01187 0.922215C5.98369 0.978565 5.9696 1.03492 5.98369 1.09127C5.98369 1.72521 5.98369 2.38732 5.94143 3.07761C5.89917 3.75381 5.84282 4.45819 5.71603 5.17666L5.70194 5.21892C6.96982 5.19075 8.25179 5.04987 9.47741 4.76812C9.63237 4.72586 9.81551 4.72586 9.97047 4.75403C10.6467 4.88082 11.0975 5.52885 10.9707 6.20505C10.858 6.83899 10.7453 7.47293 10.6748 8.12096C10.5903 8.78307 10.534 9.45928 10.534 10.1355V10.1777C11.7455 10.4454 12.9148 10.8117 13.9854 11.2625C14.1967 11.347 14.4362 11.2484 14.5208 11.0371C14.5489 10.9807 14.563 10.9244 14.563 10.868C14.5489 10.2341 14.563 9.57198 14.5912 8.88169C14.6335 8.20548 14.7039 7.50111 14.8307 6.78264C14.9575 6.06417 15.1265 5.38797 15.3237 4.72586C15.5351 4.06374 15.7605 3.44389 15.9718 2.85221C16.0563 2.62681 15.9436 2.40141 15.7323 2.31688C15.6759 2.3028 15.6196 2.28871 15.5632 2.28871Z"
                          fill="currentColor"
                        />
                      </svg>
                      {room.maxGuestsCount}
                      {' '}
                      спальных места
                    </p>
                  </div>
                </div>
                <div className="booking__gallery">
                  <img src={room.photos[0].url} alt="фото номера" className="booking__image" />
                </div>
              </div>

              <div className="booking__guest">
                <h2 className="booking__guest-title">
                  Данные гостей
                </h2>
                <p className="booking__guest-booking">
                  Гость на которого оформляется бронь
                </p>
                <div className="booking__inputs">
                  <label className="booking__label" htmlFor="booking__input-1">
                    Фамилия
                    <input
                      type="text"
                      className="booking__input"
                      id="booking__input-1"
                      value={name}
                      onChange={handleNameInput}
                    />
                  </label>
                  <label className="booking__label" htmlFor="booking__input-2">
                    Имя
                    <input
                      type="text"
                      className="booking__input"
                      id="booking__input-2"
                      value={surname}
                      onChange={handleSurnameInput}
                    />
                  </label>
                </div>
              </div>

              <div className="booking__guest">
                <h2 className="booking__guest-title">
                  Контактная информация
                </h2>
                <p className="booking__guest-booking">
                  Куда отправить информацию о бронировании
                </p>
                <div className="booking__inputs">
                  <label className="booking__label" htmlFor="booking__input-3">
                    Электронная почта
                    <input
                      type="email"
                      className="booking__input"
                      id="booking__input-3"
                      value={email}
                      onChange={handleEmailInput}
                    />
                  </label>
                  <label className="booking__label" htmlFor="booking__input-4">
                    Телефон
                    <input type="tel" className="booking__input" id="booking__input-4" value={phone} onChange={handlePhoneInput} />
                  </label>
                </div>
              </div>
            </div>

            <div className="booking__payment">
              <div className="booking__pricing">
                <h2 className="booking__pricing-title">
                  Стоимость бронирования
                </h2>
                <div className="booking__pricing-container">
                  <span className="booking__pricing-item">
                    {sessionStorage.getItem('days')}
                    {' '}
                    ночи (-ей)
                  </span>
                  <span className="booking__pricing-item">
                    {room.price * sessionStorage.getItem('days')}
                    ₽
                  </span>
                </div>
              </div>
              <div className="booking__total">
                <span className="booking__price">
                  Итого:
                </span>
                <span className="booking__price">
                  {room.price * sessionStorage.getItem('days')}
                  ₽
                </span>
              </div>
              <button type="button" onClick={handleSubmit} className="booking__btn">
                Оплатить
              </button>
            </div>
          </div>
          <BookingPopup
            hotel={hotel}
            surname={surname}
            name={name}
            email={email}
            isOpen={isPopupOpen}
            closePopup={handleClosePopup}
          />
        </section>
      ) : (<Loader />)
    )
  );
}

export default Booking;
