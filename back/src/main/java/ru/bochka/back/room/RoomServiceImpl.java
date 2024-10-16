package ru.bochka.back.room;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RoomServiceImpl implements RoomService {
    private final RoomRepository repository;

    @Override
    public Room add(Room room) {
        return repository.save(room);
    }

    @Override
    public Room get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a room with id " + id));
    }

    @Override
    public List<Room> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Room> getAllByHotelId(Long hotelId) {
        return repository.findAllByHotel_Id(hotelId);
    }

    @Override
    public Room update(Room room) {
        return repository.save(room);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        repository.deleteAll();
    }
}
