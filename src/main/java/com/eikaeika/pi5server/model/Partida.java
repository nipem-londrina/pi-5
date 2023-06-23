package com.eikaeika.pi5server.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
public class Partida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int jogador1;
    private int jogador2;
    private short resultado;
    private int jogador1elo;
    private int jogador2elo;
}
