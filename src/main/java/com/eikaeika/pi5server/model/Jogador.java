package com.eikaeika.pi5server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Jogador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int idUsuario;
    private int idJogo;
    private String nome;
    private int elo;
    private int equipe;
}
