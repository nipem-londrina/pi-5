package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    Usuario findByLogin(String login);
}
