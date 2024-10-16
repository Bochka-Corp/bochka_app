package ru.bochka.back.photo;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Data;
import ru.bochka.back.hotel.Hotel;
import ru.bochka.back.room.Room;

@Entity
@Table(name = "photos")
@Data
@Schema(name = "Photo", description = "Model for Photos")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    private Hotel hotel;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    private Room room;

    @Column(name = "photo_url")
    private String url;
}
