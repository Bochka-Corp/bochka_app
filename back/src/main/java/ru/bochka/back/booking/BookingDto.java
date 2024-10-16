package ru.bochka.back.booking;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bochka.back.hotel.HotelDto;
import ru.bochka.back.room.RoomDto;
import ru.bochka.back.user.User;

import java.sql.Timestamp;
import java.time.LocalDate;

@Data
@Schema(name = "BookingDto", description = "DTO for Bookings")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto {
    private Long id;

    private HotelDto hotel;

    private RoomDto room;

    private User user;

    private LocalDate startDate;

    private LocalDate finishDate;

    private Timestamp created;
}
