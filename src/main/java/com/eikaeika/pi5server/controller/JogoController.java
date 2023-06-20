package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Jogo;
import com.eikaeika.pi5server.repository.JogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JogoController {
    @Autowired
    public JogoRepository repository;

    @GetMapping("/api/v1/jogador")
    Iterable<Jogo> findAll() {
        return repository.findByOrderByNome();
    }

    @GetMapping("/api/v1/jogador/search/{nome}")
    Iterable<Jogo> search(@PathVariable String nome) {
        return repository.findByNomeContainingIgnoreCaseOrderByNome(nome);
    }
}
