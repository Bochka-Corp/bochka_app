import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import AdminHotelPopup from '../AdminHotelPopup/AdminHotelPopup.jsx';
import AdminCard from '../AdminCard/AdminCard.jsx';
import api from '../../utils/Api.js';
import AdminRoomPopup from '../AdminRoomPopup/AdminRoomPopup.jsx';

function AdminPanel() {
  const [isHotelPopupOpen, setIsHotelPopupOpen] = useState(false);
  const [isRoomPopupOpen, setIsRoomPopupOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState('');

  const [hotels, setHotels] = useState([]);

  function handleAddButtonClick() {
    setIsHotelPopupOpen(true);
  }

  function handleAddRoomButtonClick(hotelId) {
    setIsRoomPopupOpen(true);
    setSelectedHotel(hotelId);
  }

  function handleDeleteHotel(id) {
    api.deleteHotel(id)
      .then(() => setHotels(hotels.filter((el) => el.id !== id)));
  }

  function handleDeleteRoom(id) {
    api.deleteRoom(id)
      .then(() => api.getAllHotels()
        .then((res) => setHotels(res)));
  }

  useEffect(() => {
    api.getAllHotels()
      .then((res) => setHotels(res));
  }, [isHotelPopupOpen, isRoomPopupOpen]);

  return (
    <section className="admin-panel">
      <Header />
      <div className="admin-panel__container">
        <div className="admin-panel__nav">
          <h1 className="admin-panel__title">
            Мои отели
          </h1>
          <button type="button" className="admin-panel__button" onClick={handleAddButtonClick}>
            +
          </button>
        </div>
        <div className="admin-panel__content">
          {
            hotels.map((hotel) => (
              // eslint-disable-next-line max-len
              <AdminCard hotel={hotel} handleDeleteHotel={handleDeleteHotel} handleDeleteRoom={handleDeleteRoom} handleOpenPopup={handleAddRoomButtonClick} key={hotel.id} />
            ))
          }
        </div>
      </div>
      <AdminHotelPopup isOpen={isHotelPopupOpen} setIsOpen={setIsHotelPopupOpen} />
      {/* eslint-disable-next-line max-len */}
      <AdminRoomPopup isOpen={isRoomPopupOpen} setIsOpen={setIsRoomPopupOpen} hotel={selectedHotel} setHotel={setSelectedHotel} />
    </section>
  );
}

export default AdminPanel;
