--liquibase formatted sql

--changeset id:2
insert into cities (name)
values ('Москва'),
       ('Санкт-Петербург'),
       ('Сочи'),
       ('Калининград'),
       ('Воронеж'),
       ('Краснодар');


--changeset id:3
insert into hotels (name, description, stars, city_id, address, latitude, longitude, pet_friendly, review_count,
                    rating, distance, photo_url)
values ('Arbat House Hotel',
        'Гостиница «Арбат Хаус» расположена в тихом переулке в центре Москвы, недалеко от Нового Арбата и Красной площади. ' ||
        'Гостям предлагается проживание в номерах различных категорий, включая номера с видом на город.',
        4,
        1,
        'Скатерный переулок, 23',
        55.755814,
        37.594602,
        true,
        100,
        4.5,
        1.2,
        'https://avatars.mds.yandex.net/get-altay/1359533/2a00000163c64b197d59aa9249731da72ab3/XXXL');


--changeset id:4
insert into rooms (name, description, square, price, hotel_id, max_guests_count, check_in_hour, check_out_hour,
                   is_conditioner, is_wi_fi, is_shower, is_tv, photo_url)
values ('Стандартный двухместный номер, вид в холл отеля',
        'Стандартный двухместный номер, вид в холл отеля',
        15,
        3000,
        1,
        2,
        14,
        12,
        true,
        true,
        true,
        true,
        'https://www.arbat-house.com/upload/iblock/ba1/vc91yu2q07bc0qfqni403z5w62y93unk.webp');

--changeset id:6
insert into bookings (hotel_id, room_id, start_date, finish_date, created)
values (1, 1, '2025-01-01', '2025-01-03', now());
