package ru.bochka.back.booking;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper()
public abstract class BookingMapper {
    abstract public List<Booking> bookingsDtoToBookings(List<BookingDto> bookingsDto);

    abstract public Booking bookingDtoToBooking(BookingDto bookingDto);

    abstract public List<BookingDto> bookingsToBookingsDto(List<Booking> bookings);

    abstract public BookingDto bookingToBookingDto(Booking booking);
}
