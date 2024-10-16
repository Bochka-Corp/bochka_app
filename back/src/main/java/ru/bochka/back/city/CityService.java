package ru.bochka.back.city;

import java.util.List;

public interface CityService {
    City add(City city);

    City get(Long id);

    List<City> getAll();

    City update(City city);

    void delete(Long id);

    void deleteAll();
}
