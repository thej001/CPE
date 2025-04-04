CREATE DATABASE cpe_db;
USE cpe_db;

CREATE TABLE cpes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cpe_title VARCHAR(255) NOT NULL,
    cpe_22_uri VARCHAR(500),
    cpe_23_uri VARCHAR(500),
    reference_links TEXT,
    cpe_22_deprecation_date DATE,
    cpe_23_deprecation_date DATE
);
