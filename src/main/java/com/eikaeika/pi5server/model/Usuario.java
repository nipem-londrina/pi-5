package com.eikaeika.pi5server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.security.SecureRandom;

@Entity
@Data
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String login;
    private String senha;

    public Usuario encodeSenha() {
        this.setSenha(encodeSenha(this.getSenha()));
        return this;
    }

    public static String encodeSenha(String senha) {
        return new BCryptPasswordEncoder(10, new SecureRandom()).encode(senha);
    }
}
