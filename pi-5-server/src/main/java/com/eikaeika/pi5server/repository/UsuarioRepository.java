package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
}
