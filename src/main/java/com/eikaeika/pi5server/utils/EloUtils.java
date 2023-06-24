package com.eikaeika.pi5server.utils;

import com.eikaeika.pi5server.model.Partida;

/**
 * @author Erich Knoor
 */
public class EloUtils {
    public static final int FATOR_ESCALA = 32;
    public static final int FATOR_TRANSFORMACAO = 400;

    public double calcExpectativa(double eloJogador, double eloAdversario) {
        return 1 / (1 + Math.pow(10, (eloAdversario - eloJogador) / FATOR_TRANSFORMACAO));
    }


    public void atualizarElo(Partida partida) {
        final int UM_GANHOU = 1;
        final int DOIS_GANHOU = 2;
        final int EMPATE = 0;

        double elo1 = partida.getJogador1elo();
        double elo2 = partida.getJogador2elo();

        if (partida.getResultado() == UM_GANHOU) {
            partida.setJogador1elo(elo1 + FATOR_ESCALA * (1 - calcExpectativa(elo1, elo2)));
            partida.setJogador2elo(elo2 + FATOR_ESCALA * (0 - calcExpectativa(elo2, elo1)));
            return;
        }

        if (partida.getResultado() == DOIS_GANHOU) {
            partida.setJogador1elo(elo1 + FATOR_ESCALA * (0 - calcExpectativa(elo1, elo2)));
            partida.setJogador2elo(elo2 + FATOR_ESCALA * (1 - calcExpectativa(elo2, elo1)));
            return;
        }

        if (partida.getResultado() == EMPATE) {
            partida.setJogador1elo(elo1 + FATOR_ESCALA * (0.5 - calcExpectativa(elo1, elo2)));
            partida.setJogador2elo(elo2 + FATOR_ESCALA * (0.5 - calcExpectativa(elo2, elo1)));
            return;
        }

        throw new IllegalArgumentException("Resultado não é entre 0 e 2.");
    }
}
