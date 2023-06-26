package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Jogo;
import com.eikaeika.pi5server.repository.JogoRepository;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Erich Knoor
 */
@RestController
@RequestMapping("/api/v1/jogo")
public class JogoController {
    @Autowired
    public JogoRepository repository;
    @Autowired
    public UsuarioRepository usuarioRepository;

    @GetMapping
    List<Jogo> find(@RequestParam(required = false) String nome) {
        if (nome == null) return repository.findAllByOrderByNome();
        return repository.findAllByNomeContainingIgnoreCaseOrderByNome(nome);
    }

    @GetMapping("me")
    List<Jogo> meusJogos() {
        int usuarioId = usuarioRepository.findIdByLogin(SecurityContextHolder.getContext().getAuthentication().getName());
        return repository.findAllByUsuario(usuarioId);
    }
}
