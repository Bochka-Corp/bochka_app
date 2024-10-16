package ru.bochka.back.hotel;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper()
public abstract class HotelMapper {
    abstract public List<Hotel> hotelsDtoToHotels(List<HotelDto> hotelsDto);

    abstract public Hotel hotelDtoToHotel(HotelDto hotelDto);

    abstract public List<HotelDto> hotelsToHotelsDto(List<Hotel> hotels);

    abstract public HotelDto hotelToHotelDto(Hotel hotel);
}
