package br.com.example.geo_senai.entity;

import java.io.Serializable;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Vaga implements Serializable{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_vaga;

    @Column
    private String area_vaga;

    @Column
    private String nome_vaga;

    @Column(length = 500)
    private String desc_vaga;

    @Column(length = 150)
    private String requisitos_vaga;

    @Column
    private String carga_vaga;

    @Column
    private String contato_vaga;

    @Column(nullable = true)
    private String salario_vaga;

    @Column(nullable = true)
    private String imagem_vaga;
}
