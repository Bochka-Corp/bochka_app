package ru.bochka.back.booking;

import java.util.List;

public interface BookingService {
    Booking add(Booking booking);

    Booking get(Long id);

    List<Booking> getAll();

    Booking update(Booking booking);

    void delete(Long id);

    void deleteAll();
}
