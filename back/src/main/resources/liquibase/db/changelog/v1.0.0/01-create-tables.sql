--liquibase formatted sql

--changeset id:1
drop table if exists users, cities, hotels, rooms, bookings cascade;

--changeset id:2
create table if not exists users
(
    id       bigint generated always as identity primary key,
    name     varchar(50) not null,
    email    varchar(50) not null,
    password varchar not null
);

--changeset id:3
create table if not exists cities
(
    id   bigint generated always as identity primary key,
    name varchar(50) not null
);

--changeset id:4
create table if not exists hotels
(
    id           bigint generated always as identity primary key,
    name         varchar(150) not null,
    description  varchar(1000),
    stars        int          not null,
    city_id      bigint       references cities (id) on delete set null,
    address      varchar(150) not null,
    latitude     float,
    longitude    float,
    pet_friendly boolean,
    review_count int,
    rating       float,
    distance     float,
    photo_url varchar
);

--changeset id:5
create table if not exists rooms
(
    id               bigint generated always as identity primary key,
    name             varchar(150) not null,
    description      varchar(1000),
    square           float,
    price            float,
    hotel_id         bigint references hotels (id) on delete cascade,
    max_guests_count int,
    check_in_hour    int,
    check_out_hour   int,
    is_conditioner   boolean,
    is_wi_fi         boolean,
    is_shower        boolean,
    is_tv            boolean,
    photo_url varchar
);

--changeset id:6
create table if not exists bookings
(
    id          bigint generated always as identity primary key,
    hotel_id    bigint references hotels (id) on delete cascade,
    room_id     bigint references rooms (id) on delete cascade,
    user_id     bigint references users (id) on delete cascade,
    start_date  date,
    finish_date date,
    created     timestamp
);