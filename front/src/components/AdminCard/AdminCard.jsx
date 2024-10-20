import React from 'react';
import petImage from '../../assets/images/Cat.svg';
import RoomCard from '../RoomCard/RoomCard.jsx';
import api from '../../utils/Api.js';

function AdminCard({
  hotel, handleDeleteHotel, handleDeleteRoom, handleOpenPopup,
}) {
  return (
    <div className="admin-card">
      <div className="admin-card__container">
        <div className="admin-card__images">
          <img className="admin-card__image" src={hotel?.photoUrl.split(' ')[0]} alt="отель" />
        </div>
        <div className="admin-card__info">
          <div className="admin-card__header">
            <h2 className="admin-card__title">
              {hotel.name}
              {' '}
              {hotel.stars}
              <svg
                version="1.1"
                viewBox="0 0 36 36"
                width="32"
                height="32"
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
            </h2>
            <div className="admin-card__reviews">
              <span className="admin-card__review">
                {hotel.rating}
              </span>
              {hotel.reviewCount}
              {' '}
              отзывов
            </div>
          </div>
          <div className="admin-card__row">
            <div className="admin-card__col">
              <div className="admin-card__info-location">
                <div className="admin-card__location">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="admin-card__location">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
              </div>
            </div>
            <div className="admin-card__col">
              <div className="admin-card__icons">
                {
                  hotel.petFriendly && (
                    <img className="admin-card__icon" src={petImage} alt="удобство" />
                  )
                }
              </div>
            </div>
          </div>
          <div className="admin-card__description">
            {hotel.description}
          </div>
        </div>
      </div>
      <div className="admin-card__rooms">
        {
          hotel.rooms.map((room) => (
            <RoomCard admin handleDeleteRoom={handleDeleteRoom} data={room} key={room.id} />
          ))
        }
        <div className="admin-card__buttons">
          <button type="button" onClick={() => handleDeleteHotel(hotel.id)} className="admin-card__button admin-card__button_delete">
            Удалить отель
          </button>
          <button type="button" onClick={() => handleOpenPopup(hotel.id)} className="admin-card__button">
            Добавить номер
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
