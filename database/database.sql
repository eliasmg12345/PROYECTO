--C1 escribiendo la consulta ...solo es un archivo para crear una base de datos
--C2 y para conectarnos vamos a crear un archivo dentro del src llamado database.ts D1
CREATE DATABASE ng_inve_db;

USE ng_inve_db;

CREATE TABLE inven(
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    descripcion VARCHAR(255),
    imag VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE inven to invens;

DESCRIBE inven;