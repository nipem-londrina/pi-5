package com.eikaeika.pi5server.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class CadastroDto {
    @NonNull
    private String email;
    @NonNull
    private String senha;
    @NonNull
    private String confirmacao;
}
