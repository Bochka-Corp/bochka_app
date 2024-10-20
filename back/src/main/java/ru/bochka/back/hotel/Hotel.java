package ru.bochka.back.hotel;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import ru.bochka.back.city.City;
import ru.bochka.back.room.Room;

import java.util.List;

@Entity
@Table(name = "hotels")
@Data
@Schema(name = "Hotel", description = "Model for Hotels")
public class Hotel {
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

    @Column(name = "stars")
    private Integer stars;

    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    private City city;

    @Column(name = "address")
    @Size(max = 150)
    private String address;

    @Column(name = "latitude")
    private Float latitude;

    @Column(name = "longitude")
    private Float longitude;

    @Column(name = "pet_friendly")
    private Boolean petFriendly;

    @OneToMany(mappedBy = "hotel")
    private List<Room> rooms;

    @Column(name = "photo_url")
    private String photoUrl;

    @Column(name = "review_count")
    private Integer reviewCount;

    @Column(name = "rating")
    private Float rating;

    @Column(name = "distance")
    private Float distance;
}
