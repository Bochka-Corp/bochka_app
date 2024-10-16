package ru.bochka.back.room;

import java.util.List;

public interface RoomService {
    Room add(Room room);

    Room get(Long id);

    List<Room> getAll();

    List<Room> getAllByHotelId(Long hotelId);

    Room update(Room room);

    void delete(Long id);

    void deleteAll();
}
