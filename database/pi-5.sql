CREATE TABLE `partida`
(
    `id`          INT      NOT NULL AUTO_INCREMENT,
    `jogador1`    INT      NOT NULL,
    `jogador2`    INT      NOT NULL,
    `resultado`   SMALLINT NOT NULL,
    `jogador1elo` INT      NOT NULL,
    `jogador2elo` INT      NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `jogador`
(
    `id`        INT          NOT NULL AUTO_INCREMENT,
    `idUsuario` INT          NOT NULL,
    `idJogo`    INT          NOT NULL,
    `nome`      VARCHAR(255) NOT NULL UNIQUE,
    `elo`       INT          NOT NULL,
    `equipe`    INT          NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `equipe`
(
    `id`        INT          NOT NULL AUTO_INCREMENT,
    `nome`      VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `jogo`      INT          NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `jogo`
(
    `id`   INT          NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `usuario`
(
    `id`    INT          NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(255) NOT NULL,
    `hash` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
);

ALTER TABLE `partida`
    ADD CONSTRAINT `partida_fk0` FOREIGN KEY (`jogador1`) REFERENCES `jogador` (`id`);

ALTER TABLE `partida`
    ADD CONSTRAINT `partida_fk1` FOREIGN KEY (`jogador2`) REFERENCES `jogador` (`id`);

ALTER TABLE `jogador`
    ADD CONSTRAINT `jogador_fk0` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);

ALTER TABLE `jogador`
    ADD CONSTRAINT `jogador_fk1` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`id`);

ALTER TABLE `jogador`
    ADD CONSTRAINT `jogador_fk2` FOREIGN KEY (`equipe`) REFERENCES `equipe` (`id`);

ALTER TABLE `equipe`
    ADD CONSTRAINT `equipe_fk0` FOREIGN KEY (`jogo`) REFERENCES `jogo` (`id`);






