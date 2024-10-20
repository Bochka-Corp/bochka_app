package ru.bochka.back.room;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bochka.back.hotel.HotelDto;

@Data
@Schema(name = "RoomDto", description = "DTO for Rooms")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomDto {
    private Long id;

    private String name;

    private String description;

    private Float square;

    private Float price;

    private HotelDto hotel;

    private Integer maxGuestsCount;

    private Integer checkInHours;

    private Integer checkOutHours;

    private Boolean isConditioner;

    private Boolean isWiFi;

    private Boolean isShower;

    private Boolean isTV;

    private String photoUrl;
}
