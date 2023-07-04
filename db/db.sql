CREATE DATABASE IF NOT EXISTS `organismdb`; /*!40100 DEFAULT CHARACTER SET utf8 */

USE organismdb;

CREATE TABLE employees (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(50) DEFAULT NULL,
  salary INT(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO employees (name, salary) VALUES
  ('John Doe', 2000),
  ('Jane Doe', 3000),
  ('John Smith', 4000),
  ('Jane Smith', 5000);