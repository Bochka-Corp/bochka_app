package ru.bochka.back.room;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Schema(name = "RoomDtoForHotel", description = "DTO for Rooms for Hotel")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoomDtoForHotel {
    private Long id;

    private String name;

    private String description;

    private Float square;

    private Float price;

    private Integer maxGuestsCount;

    private Integer checkInHours;

    private Integer checkOutHours;

    private Boolean isConditioner;

    private Boolean isWiFi;

    private Boolean isShower;

    private Boolean isTV;

    private String photoUrl;
}
