package ru.bochka.back.room;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import ru.bochka.back.hotel.Hotel;

@Entity
@Table(name = "rooms")
@Data
@Schema(name = "Room", description = "Model for Rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    @NotEmpty
    @Size(max = 150, min = 1)
    private String name;

    @Column(name = "description")
    @Size(max = 1000)
    private String description;

    @Column(name = "square")
    private Float square;

    @Column(name = "price")
    private Float price;

    @ManyToOne
    @JoinColumn(name = "hotel_id", referencedColumnName = "id")
    private Hotel hotel;

    @Column(name = "max_guests_count")
    private Integer maxGuestsCount;

    @Column(name = "check_in_hour")
    private Integer checkInHours;

    @Column(name = "check_out_hour")
    private Integer checkOutHours;

    @Column(name = "is_conditioner")
    private Boolean isConditioner;

    @Column(name = "is_wi_fi")
    private Boolean isWiFi;

    @Column(name = "is_shower")
    private Boolean isShower;

    @Column(name = "is_tv")
    private Boolean isTV;

    @Column(name = "photo_url")
    private String photoUrl;
}
