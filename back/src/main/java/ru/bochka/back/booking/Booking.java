package ru.bochka.back.booking;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;
import ru.bochka.back.hotel.Hotel;
import ru.bochka.back.room.Room;
import ru.bochka.back.user.User;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
@Data
@Schema(name = "Booking", description = "Model for Bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    private Hotel hotel;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "finish_date")
    private LocalDate finishDate;

    @Column(name = "created")
    private Timestamp created;
}
