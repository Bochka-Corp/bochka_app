package ru.bochka.back.hotel;

import java.util.List;

public interface HotelService {
    Hotel add(Hotel hotel);

    Hotel get(Long id);

    List<Hotel> getAll();

    List<Hotel> getAllByCityName(String cityName);

    Hotel update(Hotel hotel);

    void delete(Long id);

    void deleteAll();
}
