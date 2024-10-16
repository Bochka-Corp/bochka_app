package ru.bochka.back.city;

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
@RequestMapping("/cities")
@RequiredArgsConstructor
@Tag(name = "cities", description = "Controller for Cities")
@CrossOrigin("*")
public class CityController {
    private final CityService service;

    @PostMapping(produces = {"application/json"})
    @Operation(
            summary = "Creation City",
            description = "Creation City",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Creation City",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = City.class)
                            )
                    })
    })
    public ResponseEntity<City> add(@RequestBody @Valid City city) {
        return ResponseEntity.ok(service.add(city));
    }

    @GetMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Getting City by ID",
            description = "Getting City by ID",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting City by ID",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = City.class)
                            )
                    })
    })
    public ResponseEntity<City> get(@PathVariable Long id) {
        return ResponseEntity.ok(service.get(id));
    }

    @GetMapping(produces = {"application/json"})
    @Operation(
            summary = "Getting all Cities",
            description = "Getting all Cities",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Getting all Cities",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    array = @ArraySchema(schema = @Schema(implementation = City.class))
                            )
                    })
    })
    public ResponseEntity<List<City>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @PutMapping(produces = {"application/json"})
    @Operation(
            summary = "Updating City",
            description = "Updating City",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Updating City",
                    content = {
                            @Content(
                                    mediaType = APPLICATION_JSON_VALUE,
                                    schema = @Schema(implementation = City.class)
                            )
                    })
    })
    public ResponseEntity<City> update(@RequestBody @Valid City city) {
        return ResponseEntity.ok(service.update(city));
    }

    @DeleteMapping(value = "/{id}", produces = {"application/json"})
    @Operation(
            summary = "Deleting City By ID",
            description = "Deleting City By ID",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting City By ID"
            )
    })
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @DeleteMapping(produces = {"application/json"})
    @Operation(
            summary = "Deleting all Cities",
            description = "Deleting Cities",
            tags = {"cities"}
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Deleting Cities"
            )
    })
    public void delete() {
        service.deleteAll();
    }
}
