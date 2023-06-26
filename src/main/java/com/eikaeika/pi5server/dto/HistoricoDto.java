package com.eikaeika.pi5server.dto;

import lombok.Value;

@Value
public class HistoricoDto {
    int id;
    String jogador;
    String adversario;
    String resultado;
    double jogadorElo;
    double adversarioElo;


    public HistoricoDto(
            int id,
            int idJogadorInput,
            int idJogador2,
            String jogador1,
            String jogador2,
            double jogador1elo,
            double jogador2elo,
            short resultadoId
    ) {
        this.id = id;
        if (idJogadorInput != idJogador2) {
            this.jogador = jogador1;
            this.adversario = jogador2;
            this.jogadorElo = jogador1elo;
            this.adversarioElo = jogador2elo;
            this.resultado = resultadoToString(resultadoId, 1);
        } else {
            this.jogador = jogador2;
            this.adversario = jogador1;
            this.jogadorElo = jogador2elo;
            this.adversarioElo = jogador1elo;
            this.resultado = resultadoToString(resultadoId, 2);
        }
    }

    private String resultadoToString(int resultadoId, int jogadorNumero) {
        if (resultadoId == 0) return "Empate";
        if (resultadoId == jogadorNumero) return "Vitória";
        return "Derrota";
    }
}
