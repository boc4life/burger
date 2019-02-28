CREATE SCHEMA `burgers_db`;
USE burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(100) NOT NULL,
  `devoured` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));
