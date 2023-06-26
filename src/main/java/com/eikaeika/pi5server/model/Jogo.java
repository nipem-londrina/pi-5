package com.eikaeika.pi5server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Erich Knoor
 */
@Entity
@Data
@NoArgsConstructor
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;

    public Jogo(int id, String nome) {
        this.id = id;
        this.nome = nome;
    }
}
