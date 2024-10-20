import React, { useState } from 'react';
import api from '../../utils/Api.js';

function AdminRoomPopup({
  isOpen, setIsOpen, hotel, setHotel,
}) {
  const [name, setName] = useState('');
  const [maxGuestsCount, setMaxGuestsCount] = useState('');
  const [square, setSquare] = useState('');
  const [price, setPrice] = useState('');
  const [checkInHours, setCheckInHours] = useState('');
  const [checkOutHours, setCheckOutHours] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [isConditioner, setIsConditioner] = useState(false);
  const [isWiFi, setIsWiFi] = useState(false);
  const [isShower, setIsShower] = useState(false);
  const [isTV, setIsTV] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleMaxGuestsCountInput(e) {
    setMaxGuestsCount(e.target.value);
  }

  function handleSquareInput(e) {
    setSquare(e.target.value);
  }

  function handlePriceInput(e) {
    setPrice(e.target.value);
  }

  function handleCheckInHoursInput(e) {
    setCheckInHours(e.target.value);
  }

  function handleCheckOutHoursInput(e) {
    setCheckOutHours(e.target.value);
  }

  function handlePhotoUrlInput(e) {
    setPhotoUrl(e.target.value);
  }

  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  function handleIsConditionerInput(e) {
    setIsConditioner(e.target.checked);
  }

  function handleIsWiFiInput(e) {
    setIsWiFi(e.target.checked);
  }

  function handleIsShowerInput(e) {
    setIsShower(e.target.checked);
  }

  function handleIsTVInput(e) {
    setIsTV(e.target.checked);
  }

  function handleClosePopup() {
    setIsOpen(false);
    setHotel('');
    setName('');
    setMaxGuestsCount('');
    setSquare('');
    setPrice('');
    setCheckInHours('');
    setCheckOutHours('');
    setPhotoUrl('');
    setDescription('');
    setIsConditioner(false);
    setIsWiFi(false);
    setIsShower(false);
    setIsTV(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    api.createRoom({
      name,
      maxGuestsCount: Number(maxGuestsCount),
      hotel: {
        id: hotel,
      },
      square: Number(square),
      price: Number(price),
      checkInHours: Number(checkInHours),
      checkOutHours: Number(checkOutHours),
      photoUrl,
      description,
      isConditioner,
      isWiFi,
      isShower,
      isTV,
    })
      .then(() => handleClosePopup());
  }

  return (
    <div className={`${isOpen ? 'admin-popup admin-popup_active' : 'admin-popup'}`}>
      <div className="admin-popup__container">
        <h2 className="admin-popup__title">
          Введите данные о номере
        </h2>
        <form className="admin-popup__form" onSubmit={handleSubmit}>
          <h3 className="admin-popup__subtitle">
            Общая информация
          </h3>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_1">
              Название:
              <input className="admin-popup__input" type="text" id="admin-popup__input_1" value={name} onChange={handleNameInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_2">
              Кол-во спальных мест:
              <input className="admin-popup__input" type="number" id="admin-popup__input_2" value={maxGuestsCount} onChange={handleMaxGuestsCountInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_3">
              Площадь:
              <input className="admin-popup__input" type="number" id="admin-popup__input_3" value={square} onChange={handleSquareInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_4">
              Цена за сутки:
              <input className="admin-popup__input" type="number" id="admin-popup__input_4" value={price} onChange={handlePriceInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_5">
              Время заезда:
              <input className="admin-popup__input" type="number" id="admin-popup__input_5" value={checkInHours} onChange={handleCheckInHoursInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_6">
              Время выезда:
              <input className="admin-popup__input" type="number" id="admin-popup__input_6" value={checkOutHours} onChange={handleCheckOutHoursInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_7">
              Ссылки на фотографии (через пробел)
              <input className="admin-popup__input" type="text" id="admin-popup__input_7" value={photoUrl} onChange={handlePhotoUrlInput} />
            </label>
          </div>
          <label className="admin-popup__label" htmlFor="admin-popup__input_5">
            Описание:
            <textarea className="admin-popup__input admin-popup__input_textarea" id="admin-popup__input_5" value={description} onChange={handleDescriptionInput} />
          </label>
          <h3 className="admin-popup__subtitle">
            Удобства и услуги
          </h3>
          <div className="admin-popup__facilities">
            <div className="admin-popup__facility">
              <input
                className="admin-popup__checkbox"
                type="checkbox"
                id="admin-popup__checkbox_2"
                checked={isConditioner}
                onChange={handleIsConditionerInput}
              />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_2">
                Кондиционер в номере
              </label>
            </div>
            <div className="admin-popup__facility">
              <input
                className="admin-popup__checkbox"
                type="checkbox"
                id="admin-popup__checkbox_3"
                checked={isWiFi}
                onChange={handleIsWiFiInput}
              />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_3">
                WiFi в номере
              </label>
            </div>
            <div className="admin-popup__facility">
              <input
                className="admin-popup__checkbox"
                type="checkbox"
                id="admin-popup__checkbox_4"
                checked={isShower}
                onChange={handleIsShowerInput}
              />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_4">
                Душ в номере
              </label>
            </div>
            <div className="admin-popup__facility">
              <input
                className="admin-popup__checkbox"
                type="checkbox"
                id="admin-popup__checkbox_5"
                checked={isTV}
                onChange={handleIsTVInput}
              />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_5">
                Телевизор в номере
              </label>
            </div>
          </div>
          {/* <div className="admin-popup__room"> */}
          {/*  <h3 className="admin-popup__subtitle"> */}
          {/*    Информация о номере */}
          {/*  </h3> */}
          {/*  <div className="admin-popup__row"> */}
          {/*    <label className="admin-popup__label" htmlFor="admin-popup__input_6"> */}
          {/*      Название: */}
          {/*      <input className="admin-popup__input" type="text" id="admin-popup__input_6" /> */}
          {/*    </label> */}
          {/*    <label className="admin-popup__label" htmlFor="admin-popup__input_7"> */}
          {/*      Площадь: */}
          {/*      <input className="admin-popup__input" type="text" id="admin-popup__input_7" /> */}
          {/*    </label> */}
          {/*  </div> */}
          {/*  <div className="admin-popup__row"> */}
          {/*    <label className="admin-popup__label" htmlFor="admin-popup__input_8"> */}
          {/*      Цена за сутки: */}
          {/*      <input className="admin-popup__input" type="text" id="admin-popup__input_8" /> */}
          {/*    </label> */}
          {/*    <label className="admin-popup__label" htmlFor="admin-popup__input_9"> */}
          {/*      Кол-во спальных мест: */}
          {/*      <input className="admin-popup__input" type="text" id="admin-popup__input_9" /> */}
          {/*    </label> */}
          {/*  </div> */}
          {/*  <h3 className="admin-popup__subtitle"> */}
          {/*    Удобства и услуги */}
          {/*  </h3> */}
          {/*  <div className="admin-popup__facilities"> */}
          {/*    <div className="admin-popup__facility"> */}
          {/*      <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_1" /> */}
          {/*      <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_1"> */}
          {/*        Оплата картой */}
          {/*      </label> */}
          {/*    </div> */}
          {/*    <div className="admin-popup__facility"> */}
          {/*      <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_2" /> */}
          {/*      <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_2"> */}
          {/*        Кондиционер в номерах */}
          {/*      </label> */}
          {/*    </div> */}
          {/*    <div className="admin-popup__facility"> */}
          {/*      <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_3" /> */}
          {/*      <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_3"> */}
          {/*        Можно с животными */}
          {/*      </label> */}
          {/*    </div> */}
          {/*    <div className="admin-popup__facility"> */}
          {/*      <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_4" /> */}
          {/*      <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_4"> */}
          {/*        Телевизор в номерах */}
          {/*      </label> */}
          {/*    </div> */}
          {/*  </div> */}
          {/* </div> */}
          <button type="submit" className="admin-popup__button">
            Добавить отель
          </button>
        </form>
        <button type="button" className="admin-popup__button-close" onClick={handleClosePopup} />
      </div>
    </div>
  );
}

export default AdminRoomPopup;
