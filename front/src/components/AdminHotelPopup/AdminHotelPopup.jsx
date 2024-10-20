import React, { useEffect, useState } from 'react';
import api from '../../utils/Api.js';

function AdminHotelPopup({ isOpen, setIsOpen }) {
  const [cities, setCities] = useState([]);
  const [matchCities, setMatchCities] = useState([]);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState('');
  const [stars, setStars] = useState('');
  const [city, setCity] = useState('');
  const [cityId, setCityId] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [rating, setRating] = useState('');
  const [reviewCount, setReviewCount] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [distance, setDistance] = useState('');
  const [description, setDescription] = useState('');
  const [petFriendly, setPetFriendly] = useState(false);

  function handleNameInput(e) {
    setName(e.target.value);
  }

  function handleStarsInput(e) {
    setStars(e.target.value);
  }

  function handleCityInput(e) {
    if (!e.target.value) {
      setCity(e.target.value);
      setMatchCities([]);
      setVisible(false);
    } else {
      setCity(e.target.value);
      setVisible(true);
      // eslint-disable-next-line max-len
      const match = cities.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setMatchCities(match);
    }
  }

  function handleSuggestionClick(matchedCity) {
    setCity(matchedCity.name);
    setCityId(matchedCity.id);
    setVisible(false);
  }

  function handleAddressInput(e) {
    setAddress(e.target.value);
  }

  function handleLatitudeInput(e) {
    setLatitude(e.target.value);
  }

  function handleLongitudeInput(e) {
    setLongitude(e.target.value);
  }

  function handleRatingInput(e) {
    setRating(e.target.value);
  }

  function handleReviewCountInput(e) {
    setReviewCount(e.target.value);
  }

  function handlePhotoUrlInput(e) {
    setPhotoUrl(e.target.value);
  }

  function handleDistanceInput(e) {
    setDistance(e.target.value);
  }

  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  function handlePetFriendlyInput(e) {
    setPetFriendly(e.target.checked);
  }

  function handleClosePopup() {
    setIsOpen(false);
    setName('');
    setStars('');
    setCity('');
    setCityId('');
    setAddress('');
    setLongitude('');
    setLatitude('');
    setRating('');
    setReviewCount('');
    setPhotoUrl('');
    setDistance('');
    setDescription('');
    setPetFriendly('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    api.createHotel({
      name,
      stars: Number(stars),
      city: {
        id: cityId,
      },
      address,
      latitude: Number(latitude),
      longitude: Number(longitude),
      rating: Number(rating),
      reviewCount: Number(reviewCount),
      photoUrl,
      distance: Number(distance),
      description,
      petFriendly,
      rooms: [],
    })
      .then(() => handleClosePopup());
  }

  useEffect(() => {
    api.getAllCities()
      .then((res) => setCities(res));
  }, []);

  return (
    <div className={`${isOpen ? 'admin-popup admin-popup_active' : 'admin-popup'}`}>
      <div className="admin-popup__container">
        <h2 className="admin-popup__title">
          Введите данные об отеле
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
              Кол-во звёзд:
              <input className="admin-popup__input" type="number" id="admin-popup__input_2" value={stars} onChange={handleStarsInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_3">
              Город:
              <input className="admin-popup__input" type="text" id="admin-popup__input_3" value={city} onChange={handleCityInput} />
              <div className={visible && matchCities.length !== 0 ? 'admin-popup__suggestions admin-popup__suggestions_active' : 'admin-popup__suggestions'}>
                {
                  matchCities && matchCities.map((matchedCity, index) => (
                    <button type="button" className="admin-popup__suggestion" onClick={() => handleSuggestionClick(matchedCity)} key={matchedCity + index}>
                      {matchedCity.name}
                    </button>
                  ))
                }
              </div>
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_4">
              Адрес:
              <input className="admin-popup__input" type="text" id="admin-popup__input_4" value={address} onChange={handleAddressInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_5">
              Широта:
              <input className="admin-popup__input" type="number" id="admin-popup__input_5" value={latitude} onChange={handleLatitudeInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_6">
              Долгота:
              <input className="admin-popup__input" type="number" id="admin-popup__input_6" value={longitude} onChange={handleLongitudeInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_7">
              Оценка:
              <input className="admin-popup__input" type="number" id="admin-popup__input_7" value={rating} onChange={handleRatingInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_8">
              Кол-во отзывов:
              <input className="admin-popup__input" type="number" id="admin-popup__input_8" value={reviewCount} onChange={handleReviewCountInput} />
            </label>
          </div>
          <div className="admin-popup__row">
            <label className="admin-popup__label" htmlFor="admin-popup__input_9">
              Ссылки на фотографии (через пробел)
              <input className="admin-popup__input" type="text" id="admin-popup__input_9" value={photoUrl} onChange={handlePhotoUrlInput} />
            </label>
            <label className="admin-popup__label" htmlFor="admin-popup__input_9">
              Расстояние до центра
              <input className="admin-popup__input" type="number" id="admin-popup__input_9" value={distance} onChange={handleDistanceInput} />
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
              <input className="admin-popup__checkbox" type="checkbox" id="admin-popup__checkbox_1" checked={petFriendly} onChange={handlePetFriendlyInput} />
              <label className="admin-popup__label_checkbox" htmlFor="admin-popup__checkbox_1">
                Можно с животными
              </label>
            </div>
          </div>
          <button type="submit" className="admin-popup__button">
            Добавить отель
          </button>
        </form>
        <button type="button" className="admin-popup__button-close" onClick={handleClosePopup} />
      </div>
    </div>
  );
}

export default AdminHotelPopup;
