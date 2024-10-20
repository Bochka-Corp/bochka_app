import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Map, Placemark, YMaps,
} from '@pbe/react-yandex-maps';
import Header from '../Header/Header.jsx';
import HotelImage from '../HotelImage/HotelImage.jsx';
import RoomCard from '../RoomCard/RoomCard.jsx';
import api from '../../utils/Api.js';
import Loader from '../Loader/Loader.jsx';
import petImage from '../../assets/images/Cat.svg';

function Hotel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({ photoUrl: '', rooms: [], description: '' });
  const [isLoad, setIsLoad] = useState(false);

  const [positionStyle, setPositionStyle] = useState({});
  const [position, setPosition] = useState(0);

  function handleBackButton() {
    navigate(-1);
  }

  function handleClickPrevious() {
    setPosition(position - 1);
  }

  function handleClickNext() {
    setPosition(position + 1);
  }

  useEffect(() => {
    setPositionStyle({ transform: `translate(${-100 * position}%)` });
  }, [position]);

  useEffect(() => {
    api.getHotel(id)
      .then((res) => setHotel(res))
      .finally(setIsLoad(true));
  }, [id]);

  return (
    (
      isLoad ? (
        <main className="hotel">
          <Header />
          <div className="hotel__container">
            <button type="button" className="hotel__btn_back" onClick={handleBackButton}>
              <svg
                width="16"
                height="16"
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
              Назад к отелям
            </button>
            <div className="hotel__header">
              <div className="hotel__description">
                <h1 className="hotel__title">
                  {hotel.name}
                  {' '}
                  {hotel.stars}
                  <svg
                    version="1.1"
                    viewBox="0 0 34 34"
                    width="28"
                    height="28"
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
                <p className="hotel__address">
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
                </p>
                <p className="hotel__address">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.85331 8.06413L17.056 2.29758C17.3919 2.17018 17.7208 2.49907 17.5934 2.83493L11.8268 18.0377C11.6912 18.3953 11.1857 18.3965 11.0484 18.0395L8.75958 12.0887C8.59029 11.6485 8.24246 11.3007 7.80231 11.1314L1.8515 8.8426C1.4945 8.70529 1.49567 8.19978 1.85331 8.06413Z"
                      fill="#3CB371"
                      stroke="#3CB371"
                      strokeWidth="1.25"
                    />
                  </svg>
                  {hotel.distance}
                  {' '}
                  км до центра
                </p>
              </div>
              <div className="hotel__info">
                <div className="hotel__like">
                  <svg width="45" height="45" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_157)">
                      <path
                        d="M9.55804 4.63297L9.99998 5.07491L10.4419 4.63297C12.1505 2.92443 14.9206 2.92443 16.6291 4.63297C18.3377 6.34151 18.3377 9.11161 16.6291 10.8202L10.7366 16.7127C10.3298 17.1195 9.67021 17.1195 9.26341 16.7127L3.37085 10.8202C1.66231 9.11161 1.66231 6.34151 3.37086 4.63297C5.0794 2.92443 7.8495 2.92443 9.55804 4.63297Z"
                        stroke="#3CB371"
                        strokeWidth="1.25"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_157">
                        <rect width="20" height="20" rx="3.33333" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="hotel__review">
                  {hotel.rating}
                </div>
              </div>
            </div>

            <div className="hotel__info_interactive">
              <div className="hotel__gallery">
                <h3 className="hotel__subtitle">
                  Галерея
                </h3>
                <div className="hotel__gallery-container">
                  <div className="hotel__gallery-images" style={positionStyle}>
                    {
                      hotel.photoUrl.split(' ').map((image, index) => (
                        <HotelImage
                          image={image}
                          key={image + index}
                        />
                      ))
                     }
                  </div>
                  <button
                    type="button"
                    className="hotel__gallery-btn hotel__gallery-btn_left"
                    disabled={position === 0}
                    onClick={handleClickPrevious}
                  >
                    <svg
                      width="24"
                      height="24"
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
                    className="hotel__gallery-btn hotel__gallery-btn_right"
                    disabled={hotel.photoUrl.split(' ').length - 1 === position}
                    onClick={handleClickNext}
                  >
                    <svg
                      className="hotel__gallery-icon_right"
                      width="24"
                      height="24"
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
              </div>
              <div className="hotel__map">
                <h3 className="hotel__subtitle">
                  Отель на карте
                </h3>
                <div className="hotel__map-container">
                  <YMaps>
                    <Map className="hotel__map-content" defaultState={{ center: [hotel.latitude, hotel.longitude], zoom: 14 }}>
                      <Placemark
                        geometry={[hotel.latitude, hotel.longitude]}
                        options={
                          {
                            preset: 'islands#circleDotIcon',
                            iconColor: '#3CB371',
                          }
                        }
                      />
                    </Map>
                  </YMaps>
                </div>
              </div>
            </div>

            <h3 className="hotel__subtitle">
              Наличие мест на
              {' '}
              {sessionStorage.getItem('enter')}
              {' '}
              –
              {' '}
              {sessionStorage.getItem('exit')}
              {' '}
              октября для
              {' '}
              {sessionStorage.getItem('guests')}
              {' '}
              взрослых
            </h3>
            <div className="hotel__cards">
              {
                hotel.rooms.map((room) => (
                  <RoomCard data={room} key={room.id} />
                ))
               }
            </div>

            <h3 className="hotel__subtitle">
              Про отель
            </h3>
            <div className="hotel__about">
              {
                hotel.description.split('. ').map((item) => (
                  <p key={item} className="hotel__about-text">
                    {item}
                  </p>
                ))
               }
            </div>

            <h3 className="hotel__subtitle">
              Удобства и услуги
            </h3>
            <div className="hotel__facilities">
              {
                hotel.petFriendly && (
                  <div className="hotel__facility">
                    <img src={petImage} alt="Можно с животными" />
                    Можно с животными
                  </div>
                )
              }
            </div>
          </div>
        </main>
      ) : (<Loader />)
    )
  );
}

export default Hotel;
