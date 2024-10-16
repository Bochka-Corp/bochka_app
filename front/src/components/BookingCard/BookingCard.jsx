import React from 'react';

function BookingCard({ booking }) {
  return (
    <div className="booking-card">
      <div className="booking-card__carousel">
        <img src={booking.hotel.photos[0].url} alt="отель" className="booking-card__img" />
      </div>
      <div className="booking-card__container">
        <div className="booking-card__info-main">
          <h2 className="booking-card__title">
            {booking.hotel.name}
          </h2>
          <div className="booking-card__info">
            <div className="booking-card__location">
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
              {booking.hotel.address}
            </div>
            <div className="booking-card__dates">
              <p className="booking-card__date">
                Заезд:
                {' '}
                {booking.startDate.slice(-2)}
                {' '}
                окт 2024 в
                {' '}
                {booking.room.checkInHours}
                :00
              </p>
              <p className="booking-card__date">
                Отъезд:
                {' '}
                {booking.finishDate.slice(-2)}
                {' '}
                окт 2024 в
                {' '}
                {booking.room.checkOutHours}
                :00
              </p>
            </div>
          </div>
        </div>
        <div className="booking-card__info-price">
          <div className="booking-card__price-text">
            К оплате:
            {' '}
            {booking.room.price * (booking.finishDate.slice(-2) - booking.startDate.slice(-2))}
            {' '}
            <svg
              fill="#3CB371"
              width="24"
              height="24"
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
    </div>
  );
}

export default BookingCard;
