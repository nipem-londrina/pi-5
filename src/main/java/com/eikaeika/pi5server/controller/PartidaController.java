package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Partida;
import com.eikaeika.pi5server.repository.JogadorRepository;
import com.eikaeika.pi5server.repository.PartidaRepository;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

/**
 * @author Erich Knoor
 */
@RestController
@RequestMapping("/api/v1/jogo/{jogo}/partida")
public class PartidaController {

    @Autowired
    PartidaRepository repository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    JogadorRepository jogadorRepository;

    @GetMapping("jogador/{id}")
    Iterable<Partida> findAllByJogador(@PathVariable int id) {
        return repository.findAllByJogador1OrJogador2(id, id);
    }

    @PostMapping
    void save(@PathVariable int jogo, @RequestBody PartidaDto dto) {
        int usuarioId = usuarioRepository.findIdByLogin(SecurityContextHolder.getContext().getAuthentication().getName());
        int jogadorId = jogadorRepository.findIdByUsuarioAndJogo(usuarioId, jogo);

        repository.save(new Partida(
                jogadorId,
                dto.getAdversario(),
                dto.getGanhador(),
                jogadorRepository.findEloById(jogadorId),
                jogadorRepository.findEloById(dto.getAdversario())
        ));
    }

    @Getter
    @Setter
    private static class PartidaDto {
        private int adversario;
        private short ganhador;
    }
}
