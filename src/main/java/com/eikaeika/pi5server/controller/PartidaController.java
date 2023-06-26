package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.dto.HistoricoDto;
import com.eikaeika.pi5server.model.Jogador;
import com.eikaeika.pi5server.model.Partida;
import com.eikaeika.pi5server.repository.JogadorRepository;
import com.eikaeika.pi5server.repository.PartidaRepository;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import com.eikaeika.pi5server.utils.EloUtils;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
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
    Iterable<HistoricoDto> findAllByJogador(@PathVariable int id) {
        return repository.findAllByJogador(id);
    }

    @PostMapping
    @Transactional
    public void save(@PathVariable int jogo, @RequestBody PartidaDto dto) {
        int usuarioId = usuarioRepository.findIdByLogin(SecurityContextHolder.getContext().getAuthentication().getName());
        Jogador jogador = jogadorRepository.findAllByIdusuarioAndIdjogo(usuarioId, jogo);
        Jogador adversario = jogadorRepository.findAllByNomeAndIdjogo(dto.getAdversario(), jogo);

        Partida partida = new Partida(
                jogador.getId(),
                adversario.getId(),
                dto.getGanhador(),
                jogador.getElo(),
                adversario.getElo()
        );

        EloUtils.atualizarElo(partida);

        jogador.setElo(partida.getJogador1elo());
        adversario.setElo(partida.getJogador2elo());

        repository.save(partida);
        jogadorRepository.save(jogador);
        jogadorRepository.save(adversario);
    }

    @Getter
    @Setter
    private static class PartidaDto {
        private String adversario;
        private short ganhador;
    }
}
