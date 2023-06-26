package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Jogo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Erich Knoor
 */
@Repository
public interface JogoRepository extends CrudRepository<Jogo, Integer> {
    List<Jogo> findAllByOrderByNome();

    List<Jogo> findAllByNomeContainingIgnoreCaseOrderByNome(String nome);

    @Query("SELECT new com.eikaeika.pi5server.model.Jogo(j.id, j.nome) " +
            "FROM Jogo j " +
            "JOIN Jogador jr ON j.id = jr.idjogo " +
            "WHERE jr.idusuario = ?1")
    List<Jogo> findAllByUsuario(int id);
}
