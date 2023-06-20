package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Partida;
import com.eikaeika.pi5server.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/partida")
public class PartidaController {

    @Autowired
    PartidaRepository repository;

    @GetMapping("jogador/{id}")
    Iterable<Partida> findAllByJogador(@PathVariable int id) {
        return repository.findAllByJogador1OrJogador2(id, id);
    }

    @PostMapping
    void save(@RequestBody Partida partida) {
        repository.save(partida);
    }
}
