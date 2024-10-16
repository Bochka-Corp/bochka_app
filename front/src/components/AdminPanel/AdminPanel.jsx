import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.jsx';
import AdminPopup from '../AdminPopup/AdminPopup.jsx';
import AdminCard from '../AdminCard/AdminCard.jsx';
import api from '../../utils/Api.js';

function AdminPanel() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [hotels, setHotels] = useState([]);

  function handleAddButtonClick() {
    setIsPopupOpen(true);
  }

  useEffect(() => {
    api.getAllHotels()
      .then((res) => setHotels(res));
  }, []);

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
              <AdminCard hotel={hotel} key={hotel.id} />
            ))
          }
        </div>
      </div>
      <AdminPopup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
    </section>
  );
}

export default AdminPanel;
