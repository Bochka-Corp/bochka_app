import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import BookingCard from '../BookingCard/BookingCard.jsx';
import api from '../../utils/Api.js';
import Loader from '../Loader/Loader.jsx';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    api.getBookings()
      .then((res) => setBookings(res))
      .finally(setIsLoad(true));
  }, []);

  return (
    (
      isLoad ? (
        <section className="bookings">
          <Header />
          <div className="bookings__container">
            <div className="bookings__title">
              Мои бронирования
            </div>
            <div className="bookings__content">
              {
                bookings.map((booking) => (
                  <BookingCard booking={booking} key={booking.id} />
                ))
              }
            </div>
          </div>
        </section>
      ) : (<Loader />)
    )
  );
}

export default Bookings;
