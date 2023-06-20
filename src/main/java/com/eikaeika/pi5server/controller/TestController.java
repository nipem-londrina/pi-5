package com.eikaeika.pi5server.controller;

import com.eikaeika.pi5server.model.Usuario;
import com.eikaeika.pi5server.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/")
    ResponseEntity<Object> index() {
        Map<String, String> data = new HashMap<>();
        data.put("key1", "value1");
        data.put("key2", "value2");
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/test/usuarios")
    Usuario cadastrar(@RequestBody Usuario usuario) {
        return usuarioRepository.save(usuario.encodeSenha());
    }

    @GetMapping(path = "/all")
    Iterable<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
}
