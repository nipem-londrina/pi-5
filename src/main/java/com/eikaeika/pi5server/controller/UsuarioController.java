package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.dto.CadastroDto;
import com.eikaeika.pi5server.model.Usuario;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Erich Knoor
 */
@RestController
public class UsuarioController {
    @Autowired
    private UsuarioRepository repository;
    @Autowired
    private PasswordEncoder encoder;

    @PostMapping("/cadastrar")
    void cadastrar(@RequestBody CadastroDto dto) {
        if (!dto.getSenha().equals(dto.getConfirmacao())) throw new IllegalArgumentException();
        repository.save(new Usuario(
                dto.getEmail(),
                encoder.encode(dto.getSenha())
        ));
    }
}
