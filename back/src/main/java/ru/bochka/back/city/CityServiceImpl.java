package ru.bochka.back.city;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CityServiceImpl implements CityService {
    private final CityRepository repository;

    @Override
    public City add(City city) {
        return repository.save(city);
    }

    @Override
    public City get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a city with id " + id));
    }

    @Override
    public List<City> getAll() {
        return repository.findAll();
    }

    @Override
    public City update(City city) {
        return repository.save(city);
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
