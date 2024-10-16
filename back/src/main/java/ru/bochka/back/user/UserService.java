package ru.bochka.back.user;

import java.util.List;

public interface UserService {
    User add(User user);

    User get(Long id);

    List<User> getAll();

    User update(User user);

    void delete(Long id);

    void deleteAll();
}
