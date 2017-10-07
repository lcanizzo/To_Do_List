DROP DATABASE IF EXISTS to_do_db;

CREATE DATABASE to_do_db;

USE to_do_db;

CREATE TABLE to_dos (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    newTask VARCHAR(255) NOT NULL,
    completed BOOLEAN,
    PRIMARY KEY (id)
);