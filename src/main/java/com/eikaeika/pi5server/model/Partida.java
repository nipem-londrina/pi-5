package com.eikaeika.pi5server.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Partida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int jogador1;
    private int jogador2;
    private short resultado;
    private int jogador1elo;
    private int jogador2elo;
}
