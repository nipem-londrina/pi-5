package com.eikaeika.pi5server.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Erich Knoor
 */
@Entity
@Data
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
public class Partida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NonNull
    private int jogador1;
    @NonNull
    private int jogador2;
    @NonNull
    private short resultado;
    @NonNull
    private double jogador1elo;
    @NonNull
    private double jogador2elo;
}
