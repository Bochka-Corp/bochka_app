import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RoomImage from '../RoomImage/RoomImage.jsx';
import conditionerImage from '../../assets/images/Conditioner.svg';
import wifiImage from '../../assets/images/wifi.svg';
import bathImage from '../../assets/images/Bath.svg';
import displayImage from '../../assets/images/Display.svg';

function RoomCard({ data, handleDeleteRoom, admin }) {
  const { id } = useParams();

  const [positionStyle, setPositionStyle] = useState({});
  const [position, setPosition] = useState(0);

  function handleClickPrevious() {
    setPosition(position - 1);
  }

  function handleClickNext() {
    setPosition(position + 1);
  }

  useEffect(() => {
    setPositionStyle({ transform: `translate(${-100 * position}%)` });
  }, [position]);

  return (
    <div className={`room-card ${admin && 'room-card_admin'}`}>
      <div className="room-card__gallery">
        <div className="room-card__images" style={positionStyle}>
          {
            data.photoUrl.split(' ').map((image, index) => (
              <RoomImage
                image={image}
                key={image + index}
              />
            ))
          }
        </div>
        <button
          type="button"
          className="room-card__gallery-btn room-card__gallery-btn_left"
          disabled={position === 0}
          onClick={handleClickPrevious}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              className="hotel__btn_back-icon"
              d="M6.41764 8L11.2075 12.7931C11.5979 13.1838 11.5977 13.817 11.207 14.2073C10.8164 14.5977 10.1832 14.5975 9.79281 14.2069L4.29656 8.70687C3.90636 8.3164 3.90636 7.6836 4.29656 7.29313L9.79281 1.79313C10.1832 1.40248 10.8164 1.40226 11.207 1.79265C11.5977 2.18304 11.5979 2.81621 11.2075 3.20687L6.41764 8Z"
              fill="#212a34"
            />
          </svg>
        </button>
        <button
          type="button"
          className="room-card__gallery-btn room-card__gallery-btn_right"
          disabled={data.photoUrl.split(' ').length - 1 === position}
          onClick={handleClickNext}
        >
          <svg
            className="hotel__gallery-icon_right"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              className="hotel__btn_back-icon"
              d="M6.41764 8L11.2075 12.7931C11.5979 13.1838 11.5977 13.817 11.207 14.2073C10.8164 14.5977 10.1832 14.5975 9.79281 14.2069L4.29656 8.70687C3.90636 8.3164 3.90636 7.6836 4.29656 7.29313L9.79281 1.79313C10.1832 1.40248 10.8164 1.40226 11.207 1.79265C11.5977 2.18304 11.5979 2.81621 11.2075 3.20687L6.41764 8Z"
              fill="#212a34"
            />
          </svg>
        </button>
      </div>
      <div className="room-card__info-container">
        <div className="room-card__info">
          <h4 className="room-card__title">
            {data.name}
          </h4>
          <p className="room-card__text">
            Площадь:
            {' '}
            {data.square}
            {' '}
            м
            <sup>2</sup>
          </p>
          <p className="room-card__text">
            В номере:
          </p>
          <div className="room-card__facilities">
            {
              data.isConditioner && (
                <div className="room-card__facility">
                  <img src={conditionerImage} alt="Кондиционер в номере" />
                  Кондиционер в номере
                </div>
              )
            }
            {
              data.isWiFi && (
                <div className="room-card__facility">
                  <img src={wifiImage} alt="Кондиционер в номере" />
                  WiFi в номере
                </div>
              )
            }
            {
              data.isShower && (
                <div className="room-card__facility">
                  <img src={bathImage} alt="Кондиционер в номере" />
                  Душ в номере
                </div>
              )
            }
            {
              data.isTV && (
                <div className="room-card__facility">
                  <img src={displayImage} alt="Кондиционер в номере" />
                  Телевизор в номере
                </div>
              )
            }
          </div>
        </div>
        {
          admin ? (
            <div className="room-card__booking">
              <div className="room-card__pricing">
                <p className="room-card__price">
                  {data.price}
                  ₽
                </p>
                цена за сутки
              </div>
              <button type="button" onClick={() => handleDeleteRoom(data.id)} className="room-card__link room-card__link_delete">
                Удалить комнату
              </button>
            </div>
          ) : (
            <div className="room-card__booking">
              <div className="room-card__pricing">
                <p className="room-card__price">
                  {data.price * sessionStorage.getItem('days')}
                  ₽
                </p>
                цена за
                {' '}
                {sessionStorage.getItem('days')}
                {' '}
                ночи(-ей)
              </div>
              <Link to={`/hotel/${id}/room/${data.id}/booking`} className="room-card__link">
                Забронировать
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default RoomCard;
