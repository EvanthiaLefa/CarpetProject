CREATE DATABASE  IF NOT EXISTS `contactsdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `contactsdb`;

CREATE TABLE city (
  `id` int NOT NULL,
  `city` varchar(30) DEFAULT NULL,
  `person_id` int,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE state (
  `id` int NOT NULL,
  `state` varchar(30) DEFAULT NULL,
  `person_id` int,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE person (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `street_address` varchar(60) DEFAULT NULL,
  `postal_code` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `city_id_idx` (`city_id`),
  KEY `state_id_idx` (`state_id`),
  CONSTRAINT `city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`),
  CONSTRAINT `state_id` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO city (id,city) VALUES (1,'Thessaloniki');
INSERT INTO city (id,city) VALUES (2,'Alexandroupoli');
INSERT INTO city (id,city) VALUES (3,'Komotini');
INSERT INTO city (id,city) VALUES (4,'Xanthi');
INSERT INTO city (id,city) VALUES (5,'Kavala');
INSERT INTO city (id,city) VALUES (6,'Drama');
INSERT INTO city (id,city) VALUES (7,'Serres');
INSERT INTO city (id,city) VALUES (8,'Veria');
INSERT INTO city (id,city) VALUES (9,'Kozani');
INSERT INTO city (id,city) VALUES (10,'Grevena');
INSERT INTO city (id,city) VALUES (11,'Kastoria');
INSERT INTO city (id,city) VALUES (12,'Florina');
INSERT INTO city (id,city) VALUES (13,'Naousa');
INSERT INTO city (id,city) VALUES (14,'Argos');
INSERT INTO city (id,city) VALUES (15,'Ioannina');
INSERT INTO city (id,city) VALUES (16,'Larisa');
INSERT INTO city (id,city) VALUES (17,'Volos');
INSERT INTO city (id,city) VALUES (18,'Lamia');
INSERT INTO city (id,city) VALUES (19,'Trikala');
INSERT INTO city (id,city) VALUES (20,'Thiva');
INSERT INTO city (id,city) VALUES (21,'Karpenisi');
INSERT INTO city (id,city) VALUES (22,'Amfissa');
INSERT INTO city (id,city) VALUES (23,'Libadia');
INSERT INTO city (id,city) VALUES (24,'Athens');
INSERT INTO city (id,city) VALUES (26,'Piraeus');
INSERT INTO city (id,city) VALUES (27,'Korinthos');
INSERT INTO city (id,city) VALUES (28,'Tripoli');
INSERT INTO city (id,city) VALUES (29,'Sparti');
INSERT INTO city (id,city) VALUES (30,'Patra');
INSERT INTO city (id,city) VALUES (31,'Pirgos');
INSERT INTO city (id,city) VALUES (33,'Iraklio');
INSERT INTO city (id,city) VALUES (34,'Chania');
INSERT INTO city (id,city) VALUES (35,'Ierapetra');
INSERT INTO city (id,city) VALUES (36,'Rodhes');
INSERT INTO city (id,city) VALUES (37,'Ermoupoli');
INSERT INTO city (id,city) VALUES (38,'Chalkida');
INSERT INTO city (id,city) VALUES (39,'Corfu');
INSERT INTO city (id,city) VALUES (40,'Zakinthos');

INSERT INTO state (id, state) VALUES (1,'East Macedonia & Thrace');
INSERT INTO state (id, state) VALUES (2,'Central Macedonia');
INSERT INTO state (id, state) VALUES (3,'Western Macedonia');
INSERT INTO state (id, state) VALUES (4,'Thessaly');
INSERT INTO state (id, state) VALUES (5,'Epirus');
INSERT INTO state (id, state) VALUES (6,'Central Greece');
INSERT INTO state (id, state) VALUES (7,'Attica');
INSERT INTO state (id, state) VALUES (10,'Peloponnese');
INSERT INTO state (id, state) VALUES (11,'Crete');
INSERT INTO state (id, state) VALUES (12,'Ionian Islands');
INSERT INTO state (id, state) VALUES (13,'North Aegean');

INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (1,'Periklis','Papadopoulos','2168478956','periklis@email.com','Aigaiou 10',12345,24,7);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (2,'Fotis','Apostolidis','2168478956','fotis@email.com','Ptolemeou 42',12345,17,4);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (3,'Anthi','Katsapi','2168478956','anthi@email.com','Salaminos 6',12345,13,3);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (4,'Vaggelis','Dimitriou','2168478956','vaggelis@email.com','Papafi 72',12345,1,2);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (5,'Simos','Chatzipanagiotou','2168478956','simos@email.com','Sarantaporou 19',12345,38,6);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (6,'Eleni','Anagnwstidou','2168478956','eleni@email.com','Filippou 162',12345,24,7);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (7,'Stella','Vogiatzi','2168478956','stella@email.com','Sofokleous 44',12345,24,7);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (8,'Olga','Psalti','2168478956','olga@email.com','Dagkli 18',12345,4,1);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (9,'Niki','Ikonomou','2168478956','niki@email.com','Palaion Patrwn 36',12345,28,10);
INSERT INTO person (id,first_name,last_name,phone_number,email,street_address,postal_code,city_id,state_id) VALUES (10,'Kostas','Vrizas','2168478956','kostas@email.com','Anthewn 52',12345,12,3);