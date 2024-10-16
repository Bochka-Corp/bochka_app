import React, { useEffect, useState } from 'react';
import wallpapers from '../../utils/constants/carousel/wallpapers.js';
import Wallpaper from '../Wallpaper/Wallpaper.jsx';
import Search from '../Search/Search.jsx';

function Carousel() {
  const [position, setPosition] = useState(1);
  const [positionStyle, setPositionStyle] = useState({ transition: '1s' });

  useEffect(() => {
    const interval = setInterval(() => {
      if (position === wallpapers.length) {
        setPosition(1);
        setPositionStyle({ transition: '1s' });
      } else {
        setPosition(position + 1);
        setPositionStyle({ transform: `translate(${-100 * position}vw)`, transition: '2s' });
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <section className="carousel">
      <div className="carousel__wallpapers" style={positionStyle}>
        {
          wallpapers.map((imageInfo) => (
            <Wallpaper
              image={imageInfo}
              key={imageInfo.path}
            />
          ))
        }
      </div>
      <div className="carousel__search">
        <h2 className="carousel__tagline">
          Путешествия никогда не были так близко
        </h2>
        <Search />
      </div>
      <h3 className="carousel__text">
        {wallpapers[position - 1].description}
      </h3>
    </section>
  );
}

export default Carousel;
