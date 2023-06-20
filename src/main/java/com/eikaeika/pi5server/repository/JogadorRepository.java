package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Jogador;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JogadorRepository extends CrudRepository<Jogador, Integer> {
    List<Jogador> findAllByOrderByNome();
    List<Jogador> findAllByNomeContainingIgnoreCaseOrderByNome(String nome);
}
