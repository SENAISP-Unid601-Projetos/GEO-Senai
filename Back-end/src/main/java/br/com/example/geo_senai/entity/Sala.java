package br.com.example.geo_senai.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Sala implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_sala;
    @Column(unique = true)
    private String nomeSala;
    private String posicaoSala;
    @Column(nullable = true)
    private String url_imagem;
}
