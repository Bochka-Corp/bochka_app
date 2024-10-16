package ru.bochka.back.booking;

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
@RequestMapping("/bookings")
@RequiredArgsConstructor
@Tag(name = "bookings", description = "Controller for Bookings")
@CrossOrigin("*")
public class BookingController {
    private final BookingService service;
    private final BookingMapper mapper;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation Booking",
            description = "Creation Booking",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation Booking",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = BookingDto.class)
                            )
                    })
    })
    public ResponseEntity<BookingDto> add(@RequestBody @Valid BookingDto booking) {
        return ResponseEntity.ok(mapper.bookingToBookingDto(service.add(mapper.bookingDtoToBooking(booking))));
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting Booking by ID",
            description = "Getting Booking by ID",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting Booking by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = BookingDto.class)
                            )
                    })
    })
    public ResponseEntity<BookingDto> get(@PathVariable Long id) {
        return ResponseEntity.ok(mapper.bookingToBookingDto(service.get(id)));
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Bookings",
            description = "Getting all Bookings",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Bookings",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = BookingDto.class))
                            )
                    })
    })
    public ResponseEntity<List<BookingDto>> getAll() {
        return ResponseEntity.ok(mapper.bookingsToBookingsDto(service.getAll()));
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating Booking",
            description = "Updating Booking",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating Booking",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = BookingDto.class)
                            )
                    })
    })
    public ResponseEntity<BookingDto> update(@RequestBody @Valid BookingDto booking) {
        return ResponseEntity.ok(mapper.bookingToBookingDto(service.update(mapper.bookingDtoToBooking(booking))));
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting Booking By ID",
            description = "Deleting Booking By ID",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Booking By ID"
            )
    })
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Bookings",
            description = "Deleting Bookings",
            tags = {"bookings"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Bookings"
            )
    })
    public void delete() {
        service.deleteAll();
    }
}
