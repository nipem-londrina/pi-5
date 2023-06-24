CREATE TABLE `partida`
(
    `id`          INT      NOT NULL AUTO_INCREMENT,
    `jogador1`    INT      NOT NULL,
    `jogador2`    INT      NOT NULL,
    `resultado`   SMALLINT NOT NULL,
    `jogador1elo` DECIMAL  NOT NULL,
    `jogador2elo` DECIMAL  NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `jogador`
(
    `id`        INT          NOT NULL AUTO_INCREMENT,
    `idUsuario` INT          NOT NULL,
    `idJogo`    INT          NOT NULL,
    `nome`      VARCHAR(255) NOT NULL UNIQUE,
    `elo`       DECIMAL      NOT NULL,
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
    `hash`  VARCHAR(60)  NOT NULL,
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





