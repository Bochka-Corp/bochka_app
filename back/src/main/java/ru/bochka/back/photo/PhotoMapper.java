package ru.bochka.back.photo;

import org.mapstruct.Mapper;

@Mapper()
public abstract class PhotoMapper {
    abstract public Photo photoDtoToPhoto(PhotoDto photoDto);

    abstract public PhotoDto photoToPhotoDto(Photo photo);
}
