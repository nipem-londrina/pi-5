package com.eikaeika.pi5server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Partida {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int jogador1;
    private int jogador2;
    private short resultado;
    private int jogador1elo;
    private int jogador2elo;
}
