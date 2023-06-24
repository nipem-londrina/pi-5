package com.eikaeika.pi5server.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor(force = true)
@RequiredArgsConstructor
public class Jogador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NonNull
    private int idusuario;
    @NonNull
    private int idjogo;
    @NonNull
    private String nome;
    @NonNull
    private double elo;
}
