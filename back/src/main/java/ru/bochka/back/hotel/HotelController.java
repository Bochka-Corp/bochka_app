package ru.bochka.back.hotel;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/hotels")
@RequiredArgsConstructor
@Tag(name = "hotels", description = "Controller for Hotels")
@CrossOrigin("*")
public class HotelController {
    private final HotelService service;
    private final HotelMapper mapper;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation Hotel",
            description = "Creation Hotel",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation Hotel",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = HotelDto.class)
                            )
                    })
    })
    public ResponseEntity<HotelDto> add(@RequestBody @Valid HotelDto hotel) {
        return ResponseEntity.ok(mapper.hotelToHotelDto(service.add(mapper.hotelDtoToHotel(hotel))));
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting Hotel by ID",
            description = "Getting Hotel by ID",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting Hotel by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = HotelDto.class)
                            )
                    })
    })
    public ResponseEntity<HotelDto> get(@PathVariable Long id) {
        return ResponseEntity.ok(mapper.hotelToHotelDto(service.get(id)));
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Hotels",
            description = "Getting all Hotels",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Hotels",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = HotelDto.class))
                            )
                    })
    })
    public ResponseEntity<List<HotelDto>> getAll() {
        return ResponseEntity.ok(mapper.hotelsToHotelsDto(service.getAll()));
    }

    @GetMapping(value = "/city/{cityName}", produces = {"application/json"})
    @Operation(
            summary = "Getting all Hotels by City Name",
            description = "Getting all Hotels by City Name",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Hotels by City Name",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = HotelDto.class))
                            )
                    })
    })
    public ResponseEntity<List<HotelDto>> getAllByCityName(@PathVariable String cityName) {
        return ResponseEntity.ok(mapper.hotelsToHotelsDto(service.getAllByCityName(cityName)));
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating Hotel",
            description = "Updating Hotel",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating Hotel",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = HotelDto.class)
                            )
                    })
    })
    public ResponseEntity<HotelDto> update(@RequestBody @Valid HotelDto hotel) {
        return ResponseEntity.ok(mapper.hotelToHotelDto(service.update(mapper.hotelDtoToHotel(hotel))));
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting Hotel By ID",
            description = "Deleting Hotel By ID",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Hotel By ID"
            )
    })
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Hotels",
            description = "Deleting Hotels",
            tags = {"hotels"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Hotels"
            )
    })
    public void delete() {
        service.deleteAll();
    }
}
