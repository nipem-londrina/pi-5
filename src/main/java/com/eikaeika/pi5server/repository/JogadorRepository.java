package com.eikaeika.pi5server.repository;

import com.eikaeika.pi5server.model.Jogador;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JogadorRepository extends CrudRepository<Jogador, Integer> {
    List<Jogador> findAllByIdjogoOrderByNome(int idJogo);

    List<Jogador> findAllByIdjogoAndNomeContainingIgnoreCaseOrderByNome(int idJogo, String nome);


    @Query("SELECT id FROM Jogador WHERE idusuario = ?1 AND idjogo = ?2")
    int findIdByUsuarioAndJogo(int idUsuario, int idJogo);

    @Query("SELECT elo FROM Jogador where id = ?1")
    double findEloById(int id);
}
