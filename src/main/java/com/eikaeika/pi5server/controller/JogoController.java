package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Jogo;
import com.eikaeika.pi5server.repository.JogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/jogo")
public class JogoController {
    @Autowired
    public JogoRepository repository;

    @GetMapping
    Iterable<Jogo> find(@RequestParam(required = false) String nome) {
        if (nome == null) return repository.findByOrderByNome();
        return repository.findByNomeContainingIgnoreCaseOrderByNome(nome);
    }
}
