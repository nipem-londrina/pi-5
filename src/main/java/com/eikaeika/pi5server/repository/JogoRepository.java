package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Jogo;
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
}
