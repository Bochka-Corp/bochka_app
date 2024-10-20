package ru.bochka.back.hotel;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bochka.back.city.City;
import ru.bochka.back.room.RoomDtoForHotel;

import java.util.List;

@Data
@Schema(name = "HotelDto", description = "DTO for Hotels")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HotelDto {
    private Long id;

    private String name;

    private String description;

    private Integer stars;

    private City city;

    private String address;

    private Float latitude;

    private Float longitude;

    private Boolean petFriendly;

    private List<RoomDtoForHotel> rooms;

    private String photoUrl;

    private Integer reviewCount;

    private Float rating;

    private Float distance;
}
