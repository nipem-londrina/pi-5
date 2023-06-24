package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Jogador;
import com.eikaeika.pi5server.repository.JogadorRepository;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Erich Knoor
 */
@RestController
@RequestMapping("/api/v1/jogo/{jogo}/jogador")
public class JogadorController {
    @Autowired
    private JogadorRepository repository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private JogadorRepository jogadorRepository;

    @PostMapping
    Jogador inscrever(@PathVariable int jogo, @RequestBody InscreverDto dto) {
        return repository.save(new Jogador(
                // essa linha pega o id do usuario logado
                usuarioRepository.findByLogin(SecurityContextHolder.getContext().getAuthentication().getName()).getId(),
                jogo,
                dto.getNome(),
                1000
        ));
    }

    @GetMapping("me")
    Jogador meuPerfil(@PathVariable int jogo) {
        // essa linha pega o id do jogador logado
        int jogadorId = jogadorRepository.findIdByUsuarioAndJogo(usuarioRepository.findIdByLogin(SecurityContextHolder.getContext().getAuthentication().getName()), jogo);
        return perfil(jogo, jogadorId);
    }

    @GetMapping("{id}")
    Jogador perfil(@PathVariable int jogo, @PathVariable int id) {
        return repository.findById(id)
                .orElse(null);
    }

    @GetMapping
    List<Jogador> find(@PathVariable int jogo, @RequestParam(required = false) String nome) {
        if (nome == null) return repository.findAllByIdjogoOrderByNome(jogo);
        return repository.findAllByIdjogoAndNomeContainingIgnoreCaseOrderByNome(jogo, nome);
    }

    @Getter
    @Setter
    private static class InscreverDto {
        private String nome;
    }
}
