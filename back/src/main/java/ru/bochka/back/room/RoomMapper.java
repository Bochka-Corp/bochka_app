package ru.bochka.back.room;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper()
public abstract class RoomMapper {
    abstract public List<Room> roomsDtoToRooms(List<RoomDto> roomsDto);

    abstract public Room roomDtoToRoom(RoomDto roomDto);

    abstract public List<RoomDto> roomsToRoomsDto(List<Room> rooms);

    abstract public RoomDto roomToRoomDto(Room room);

    abstract public List<Room> roomsDtoForHotelToRooms(List<RoomDtoForHotel> roomsDto);

    abstract public Room roomDtoForHotelToRoom(RoomDtoForHotel roomDto);

    abstract public List<RoomDtoForHotel> roomsToRoomsDtoForHotel(List<Room> rooms);

    abstract public RoomDtoForHotel roomToRoomDtoForHotel(Room room);
}
