package ru.bochka.back.room;

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
@RequestMapping("/rooms")
@RequiredArgsConstructor
@Tag(name = "rooms", description = "Controller for Rooms")
@CrossOrigin("*")
public class RoomController {
    private final RoomService service;
    private final RoomMapper mapper;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation Room",
            description = "Creation Room",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation Room",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = RoomDto.class)
                            )
                    })
    })
    public ResponseEntity<RoomDto> add(@RequestBody @Valid RoomDto room) {
        return ResponseEntity.ok(mapper.roomToRoomDto(service.add(mapper.roomDtoToRoom(room))));
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting Room by ID",
            description = "Getting Room by ID",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting Room by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = RoomDto.class)
                            )
                    })
    })
    public ResponseEntity<RoomDto> get(@PathVariable Long id) {
        return ResponseEntity.ok(mapper.roomToRoomDto(service.get(id)));
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Rooms",
            description = "Getting all Rooms",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Rooms",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = RoomDto.class))
                            )
                    })
    })
    public ResponseEntity<List<RoomDto>> getAll() {
        return ResponseEntity.ok(mapper.roomsToRoomsDto(service.getAll()));
    }

    @GetMapping(value = "/hotel/{hotelId}", produces = {"application/json"})
    @Operation(
            summary = "Getting all Rooms by Hotel ID",
            description = "Getting all Rooms by Hotel ID",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Rooms by Hotel ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = RoomDto.class))
                            )
                    })
    })
    public ResponseEntity<List<RoomDto>> getAllByHotelId(@PathVariable Long hotelId) {
        return ResponseEntity.ok(mapper.roomsToRoomsDto(service.getAllByHotelId(hotelId)));
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating Room",
            description = "Updating Room",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating Room",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = RoomDto.class)
                            )
                    })
    })
    public ResponseEntity<RoomDto> update(@RequestBody @Valid RoomDto room) {
        return ResponseEntity.ok(mapper.roomToRoomDto(service.update(mapper.roomDtoToRoom(room))));
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting Room By ID",
            description = "Deleting Room By ID",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Room By ID"
            )
    })
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Rooms",
            description = "Deleting Rooms",
            tags = {"rooms"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Rooms"
            )
    })
    public void delete() {
        service.deleteAll();
    }
}
