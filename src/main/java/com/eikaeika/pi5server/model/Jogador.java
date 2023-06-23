package com.eikaeika.pi5server.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Jogador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int idusuario;
    private int idjogo;
    private String nome;
    private int elo;
}
