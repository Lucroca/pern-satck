CREATE DATABASE taskdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    tittle VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);
