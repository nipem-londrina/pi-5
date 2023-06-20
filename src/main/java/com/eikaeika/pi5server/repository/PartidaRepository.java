package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Partida;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartidaRepository extends CrudRepository<Partida, Integer> {
    List<Partida> findAllByJogador1OrJogador2(int jogador1, int jogador2);
}
