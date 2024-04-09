package br.com.example.senai_auto.entity;

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
    private String area_vaga;
    private String nome_vaga;
    @Column(length = 500)
    private String desc_vaga;
    @Column(length = 150)
    private String requisitos_vaga;
    private String carga_vaga;
    private String contato_vaga;
    @Column(nullable = true)
    private String salario_vaga;
    @Column(nullable = true)
    private String imagem_vaga;
}
