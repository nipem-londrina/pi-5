package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.dto.HistoricoDto;
import com.eikaeika.pi5server.model.Partida;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Erich Knoor
 */
@Repository
public interface PartidaRepository extends CrudRepository<Partida, Integer> {
    @Query(
            "SELECT new com.eikaeika.pi5server.dto.HistoricoDto(" +
                    "p.id, " +
                    "(?1 + 0), " +
                    "p.jogador2, " +
                    "j1.nome, " +
                    "j2.nome, " +
                    "p.jogador1elo, " +
                    "p.jogador2elo, " +
                    "p.resultado " +
                    ") " +
                    "FROM Partida p " +
                    "JOIN Jogador j1 ON p.jogador1 = j1.id " +
                    "JOIN Jogador j2 ON p.jogador2 = j2.id " +
                    "WHERE p.jogador1 = ?1 OR p.jogador2 = ?1 " +
                    "ORDER BY p.id DESC"
    )
    List<HistoricoDto> findAllByJogador(int jogador);


}
