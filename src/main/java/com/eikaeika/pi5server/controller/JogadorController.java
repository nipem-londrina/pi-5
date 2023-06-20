package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Jogador;
import com.eikaeika.pi5server.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/jogador")
public class JogadorController {
    @Autowired
    private JogadorRepository repository;

    @PostMapping
    void inscrever(@RequestBody Jogador jogador) {
        jogador.setElo(1000);
        jogador.setEquipe(0);
        repository.save(jogador);
    }

    @GetMapping("{id}")
    Jogador perfil(@PathVariable int id) {
        return repository.findById(id)
                .orElse(null);
    }

    @GetMapping
    List<Jogador> pesquisar(String nome) {
        return repository.findAllByNomeContainingIgnoreCaseOrderByNome(nome);
    }

    @GetMapping
    List<Jogador> find(@RequestParam(required = false) String nome) {
        if (nome == null) return repository.findAllByOrderByNome();
        return repository.findAllByNomeContainingIgnoreCaseOrderByNome(nome);
    }
}
