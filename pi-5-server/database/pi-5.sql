CREATE TABLE `Partidas` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`jogador1` INT NOT NULL,
	`jogador2` INT NOT NULL,
	`resultado` smallint NOT NULL,
	`jogador1elo` INT NOT NULL,
	`jogador2elo` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Jogador` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`idUsuario` INT NOT NULL,
	`idJogo` INT NOT NULL,
	`nome` varchar NOT NULL UNIQUE,
	`elo` INT NOT NULL,
	`equipe` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Equipe` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar NOT NULL,
	`descricao` varchar NOT NULL,
	`jogo` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Jogo` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`login` INT NOT NULL,
	`senha` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Partidas` ADD CONSTRAINT `Partidas_fk0` FOREIGN KEY (`jogador1`) REFERENCES `Jogador`(`id`);

ALTER TABLE `Partidas` ADD CONSTRAINT `Partidas_fk1` FOREIGN KEY (`jogador2`) REFERENCES `Jogador`(`id`);

ALTER TABLE `Jogador` ADD CONSTRAINT `Jogador_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `Usuario`(`id`);

ALTER TABLE `Jogador` ADD CONSTRAINT `Jogador_fk1` FOREIGN KEY (`idJogo`) REFERENCES `Jogo`(`id`);

ALTER TABLE `Jogador` ADD CONSTRAINT `Jogador_fk2` FOREIGN KEY (`equipe`) REFERENCES `Equipe`(`id`);

ALTER TABLE `Equipe` ADD CONSTRAINT `Equipe_fk0` FOREIGN KEY (`jogo`) REFERENCES `Jogo`(`id`);






