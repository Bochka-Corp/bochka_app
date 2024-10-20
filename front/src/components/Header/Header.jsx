import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ main }) {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'));
  }, [location]);

  return (
    <header className="header">
      <div className={main ? 'header__container header__container_main' : 'header__container'}>
        <Link to="/" className={`${main ? 'header__logo header__logo_white' : 'header__logo header__logo_green'}`} />
        {
          isLoggedIn ? (
            <div className="header__buttons_user">
              {
                location.pathname !== '/bookings' && location.pathname !== '/admin' && (
                  <Link to="/bookings" className="header__button">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.24995 4.3003 7.24997 5.04951 7.25 5.94799V6.02572C5.22882 6.09185 4.01511 6.32803 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9849 6.32803 18.7712 6.09185 16.75 6.02572V5.94801C16.75 5.04954 16.7501 4.3003 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.25 6.00189V6C15.25 5.03599 15.2484 4.38843 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.7516 4.38843 8.75 5.03599 8.75 6V6.00189C9.14203 6 9.55807 6 10 6H14C14.4419 6 14.858 6 15.25 6.00189ZM17 9C17 9.55229 16.5523 10 16 10C15.4477 10 15 9.55229 15 9C15 8.44772 15.4477 8 16 8C16.5523 8 17 8.44772 17 9ZM8 10C8.55228 10 9 9.55229 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10Z"
                        fill="#fff"
                      />
                    </svg>
                  </Link>
                )
              }
              <Link to="/profile" className="header__button">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6Z"
                    fill="#fff"
                  />
                  <path
                    d="M19 22C20.1046 22 21.0222 21.0938 20.7787 20.0164C20.4068 18.3705 19.5761 16.8482 18.364 15.636C16.6761 13.9482 14.3869 13 12 13C9.61305 13 7.32387 13.9482 5.63604 15.636C4.42391 16.8482 3.59324 18.3705 3.22129 20.0164C2.97781 21.0938 3.89543 22 5 22H19Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="header__buttons">
              <div className="header__icon" />
              <Link to="/login" className="header__link">
                Войти
              </Link>
              <Link to="/register" className="header__link">
                Зарегистрироваться
              </Link>
            </div>
          )
        }
      </div>
    </header>
  );
}

export default Header;
