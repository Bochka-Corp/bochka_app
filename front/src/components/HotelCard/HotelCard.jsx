import React from 'react';
import { Link } from 'react-router-dom';
import petImage from '../../assets/images/Cat.svg';

function HotelCard({ data }) {
  return (
    <Link to={`/hotel/${data.id}`} className="hotel-card">
      <div className="hotel-card__carousel">
        <img src={data.photoUrl.split(' ')[0]} alt={data.name} className="hotel-card__img" />
      </div>
      <div className="hotel-card__container">
        <div className="hotel-card__info-main">
          <h2 className="hotel-card__title">
            {data.name}
          </h2>
          <div className="hotel-card__reviews">
            <span className="hotel-card__review">
              {data.rating}
            </span>
            {' '}
            {data.reviewCount}
            {' '}
            отзывов
          </div>
          <div className="hotel-card__info-location">
            <div className="hotel-card__location">
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
              {data.address}
            </div>
            <div className="hotel-card__location">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.85331 8.06413L17.056 2.29758C17.3919 2.17018 17.7208 2.49907 17.5934 2.83493L11.8268 18.0377C11.6912 18.3953 11.1857 18.3965 11.0484 18.0395L8.75958 12.0887C8.59029 11.6485 8.24246 11.3007 7.80231 11.1314L1.8515 8.8426C1.4945 8.70529 1.49567 8.19978 1.85331 8.06413Z"
                  fill="#3CB371"
                  stroke="#3CB371"
                  strokeWidth="1.25"
                />
              </svg>
              {data.distance}
              {' '}
              км до центра
            </div>
          </div>
        </div>
        <div className="hotel-card__info-advantages">
          <div className="hotel-card__star">
            {data.stars}
            {' '}
            <svg
              className="hotel-card__star-icon"
              version="1.1"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z"
                id="XMLID_328_"
              />
            </svg>
          </div>
          <div className="hotel-card__icons">
            {
              data.petFriendly && (
                <img className="hotel-card__icon" src={petImage} alt="удобство" />
              )
            }
          </div>
        </div>
        <div className="hotel-card__info-price">
          <div className="hotel-card__like">
            <button type="button" className="hotel-card__like-btn">
              <svg
                className="hotel-card__like-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            </button>
          </div>
          <div className="hotel-card__price-text">
            Всего:
          </div>
          <div className="hotel-card__price">
            от
            {' '}
            {data.rooms[0]?.price * Number(sessionStorage.getItem('days'))}
            {' '}
            <svg
              fill="#3CB371"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15,2 C18.3137085,2 21,4.6862915 21,8 C21,11.2383969 18.4344251,13.8775718 15.2249383,13.9958615 L15,14 L10,14 L10,16 L14,16 C14.5522847,16 15,16.4477153 15,17 C15,17.5522847 14.5522847,18 14,18 L10,18 L10,21 C10,21.5522847 9.55228475,22 9,22 C8.44771525,22 8,21.5522847 8,21 L8,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L8,16 L8,14 L4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4871642 3.38604019,12.0644928 3.88337887,12.0067277 L4,12 L8,12 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M15,4 L10,4 L10,12 L15,12 C17.209139,12 19,10.209139 19,8 C19,5.85780461 17.3160315,4.10892112 15.1996403,4.00489531 L15,4 Z"
              />
            </svg>
          </div>
          <div className="hotel-card__price-text">
            Сутки:
          </div>
          <div className="hotel-card__price">
            от
            {' '}
            {data.rooms[0]?.price}
            {' '}
            <svg
              fill="#3CB371"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15,2 C18.3137085,2 21,4.6862915 21,8 C21,11.2383969 18.4344251,13.8775718 15.2249383,13.9958615 L15,14 L10,14 L10,16 L14,16 C14.5522847,16 15,16.4477153 15,17 C15,17.5522847 14.5522847,18 14,18 L10,18 L10,21 C10,21.5522847 9.55228475,22 9,22 C8.44771525,22 8,21.5522847 8,21 L8,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 L8,16 L8,14 L4,14 C3.44771525,14 3,13.5522847 3,13 C3,12.4871642 3.38604019,12.0644928 3.88337887,12.0067277 L4,12 L8,12 L8,3 C8,2.44771525 8.44771525,2 9,2 L15,2 Z M15,4 L10,4 L10,12 L15,12 C17.209139,12 19,10.209139 19,8 C19,5.85780461 17.3160315,4.10892112 15.1996403,4.00489531 L15,4 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;
