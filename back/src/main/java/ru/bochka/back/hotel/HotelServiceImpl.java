package ru.bochka.back.hotel;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class HotelServiceImpl implements HotelService {
    private final HotelRepository repository;

    @Override
    public Hotel add(Hotel hotel) {
        return repository.save(hotel);
    }

    @Override
    public Hotel get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a hotel with id " + id));
    }

    @Override
    public List<Hotel> getAll() {
        return repository.findAll();
    }

    @Override
    public List<Hotel> getAllByCityName(String cityName) {
        return repository.findAllByCity_Name(cityName);
    }

    @Override
    public Hotel update(Hotel hotel) {
        return repository.save(hotel);
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
