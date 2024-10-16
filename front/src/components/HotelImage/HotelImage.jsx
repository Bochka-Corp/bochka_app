import React from 'react';

function HotelImage({ image }) {
  return (
    <img src={image} alt="фото отеля" className="hotel-image" />
  );
}

export default HotelImage;
