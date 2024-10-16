import React from 'react';

function AdminPopup({ isOpen, setIsOpen }) {
  function handleCloseButtonClick() {
    setIsOpen(false);
  }

  return (
    <div className={`${isOpen ? 'admin-popup admin-popup_active' : 'admin-popup'}`}>
      <div className="admin-popup__container">
        <h2 className="admin-popup__title">
          Введите данные об отеле
        </h2>
        <form className="admin-popup__form">
          <h3 className="admin-popup__subtitle">
            Общая информация
          </h3>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_1">
              Название:
              <input className="admin-popup__input" type="text" id="admin-popup__input_1" />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_2">
              Кол-во звёзд:
              <input className="admin-popup__input" type="text" id="admin-popup__input_2" />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_3">
              Адрес:
              <input className="admin-popup__input" type="text" id="admin-popup__input_3" />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_4">
              Расстояние до центра:
              <input className="admin-popup__input" type="text" id="admin-popup__input_4" />
            </label>
          </div>
          <label className="admin-popup__label" htmlFor="admin-popup__input_5">
            Описание:
            <textarea className="admin-popup__input admin-popup__input_textarea" id="admin-popup__input_5" />
          </label>
          <h3 className="admin-popup__subtitle">
            Удобства и услуги
          </h3>
          <div className="admin-popup__facilities">
            <div className="admin-popup__facility">
              <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_1" />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_1">
                Оплата картой
              </label>
            </div>
            <div className="admin-popup__facility">
              <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_2" />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_2">
                Кондиционер в номерах
              </label>
            </div>
            <div className="admin-popup__facility">
              <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_3" />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_3">
                Можно с животными
              </label>
            </div>
            <div className="admin-popup__facility">
              <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_4" />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_4">
                Телевизор в номерах
              </label>
            </div>
          </div>
          <div className="admin-popup__room">
            <h3 className="admin-popup__subtitle">
              Информация о номере
            </h3>
            <div className="admin-popup__row">
              <label className="admin-popup__label" htmlFor="admin-popup__input_6">
                Название:
                <input className="admin-popup__input" type="text" id="admin-popup__input_6" />
              </label>
              <label className="admin-popup__label" htmlFor="admin-popup__input_7">
                Площадь:
                <input className="admin-popup__input" type="text" id="admin-popup__input_7" />
              </label>
            </div>
            <div className="admin-popup__row">
              <label className="admin-popup__label" htmlFor="admin-popup__input_8">
                Цена за сутки:
                <input className="admin-popup__input" type="text" id="admin-popup__input_8" />
              </label>
              <label className="admin-popup__label" htmlFor="admin-popup__input_9">
                Кол-во спальных мест:
                <input className="admin-popup__input" type="text" id="admin-popup__input_9" />
              </label>
            </div>
            <h3 className="admin-popup__subtitle">
              Удобства и услуги
            </h3>
            <div className="admin-popup__facilities">
              <div className="admin-popup__facility">
                <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_1" />
                <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_1">
                  Оплата картой
                </label>
              </div>
              <div className="admin-popup__facility">
                <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_2" />
                <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_2">
                  Кондиционер в номерах
                </label>
              </div>
              <div className="admin-popup__facility">
                <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_3" />
                <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_3">
                  Можно с животными
                </label>
              </div>
              <div className="admin-popup__facility">
                <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_4" />
                <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_4">
                  Телевизор в номерах
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="admin-popup__button">
            Добавить отель
          </button>
        </form>
        <button type="button" className="admin-popup__button-close" onClick={handleCloseButtonClick} />
      </div>
    </div>
  );
}

export default AdminPopup;
