package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Erich Knoor
 */
@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    Usuario findByLogin(String login);

    @Query("SELECT id FROM Usuario WHERE login = ?1")
    int findIdByLogin(String login);
}
