package ru.bochka.back.photo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Schema(name = "PhotoDto", description = "DTO for Photo")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PhotoDto {
    private Long id;

    private String url;
}
