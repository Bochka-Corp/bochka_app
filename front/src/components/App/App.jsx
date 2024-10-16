import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Result from '../Result/Result.jsx';
import Hotel from '../Hotel/Hotel.jsx';
import Booking from '../Booking/Booking.jsx';
import Profile from '../Profile/Profile.jsx';
import Bookings from '../Bookings/Bookings.jsx';
import AdminPanel from '../AdminPanel/AdminPanel.jsx';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/search/:city" element={<Result />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/hotel/:hotelId/room/:roomId/booking" element={<Booking />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
