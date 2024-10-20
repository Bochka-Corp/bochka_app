import axios from 'axios';

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(response) {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getSuggestions(search) {
    return axios.get(`https://suggest-maps.yandex.ru/v1/suggest?apikey=0e42c64c-0045-4b29-ba5d-cb9f4001bc0a&types=locality&results=5&text=${search}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getAllHotels() {
    return axios.get(`${this._baseUrl}/hotels`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getHotels(city) {
    return axios.get(`${this._baseUrl}/hotels/city/${city}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getHotel(id) {
    return axios.get(`${this._baseUrl}/hotels/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  createHotel(hotel) {
    return axios.post(`${this._baseUrl}/hotels`, hotel, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  deleteHotel(id) {
    return axios.delete(`${this._baseUrl}/hotels/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getRoom(id) {
    return axios.get(`${this._baseUrl}/rooms/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  createRoom(room) {
    return axios.post(`${this._baseUrl}/rooms`, room, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  deleteRoom(id) {
    return axios.delete(`${this._baseUrl}/rooms/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getBookings() {
    return axios.get(`${this._baseUrl}/bookings`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  createBooking(booking) {
    return axios.post(`${this._baseUrl}/bookings`, booking, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  getAllCities() {
    return axios.get(`${this._baseUrl}/cities`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${localStorage.getItem('userEmail')}:${localStorage.getItem('userPassword')}`)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  }

  register(userData) {
    return axios.post(`${this._baseUrl}/api/auth/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res))
      .catch((res) => Promise.reject(res.response.data));
  }

  login(userData) {
    return axios.post(`${this._baseUrl}/api/auth/login`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res))
      .catch((res) => Promise.reject(res.response.data));
  }
}

const api = new Api({
  baseUrl: 'http://176.124.200.228:8080',
});

export default api;
