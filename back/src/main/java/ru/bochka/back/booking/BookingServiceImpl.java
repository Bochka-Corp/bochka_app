package ru.bochka.back.booking;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookingServiceImpl implements BookingService {
    private final BookingRepository repository;

    @Override
    public Booking add(Booking booking) {
        return repository.save(booking);
    }

    @Override
    public Booking get(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("There is no a booking with id " + id));
    }

    @Override
    public List<Booking> getAll() {
        return repository.findAll();
    }

    @Override
    public Booking update(Booking booking) {
        return repository.save(booking);
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
