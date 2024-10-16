import React from 'react';

function Wallpaper({ image }) {
  return (
    <img src={image.path} alt={image.description} className="wallpaper" />
  );
}

export default Wallpaper;
