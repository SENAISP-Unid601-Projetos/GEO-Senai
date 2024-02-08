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
public class Turma implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_turma;
	private String codigo_turma;
	private String nome_curso;
	private String duracao_curso;
	@Column(length = 500)
	private String desc_curso;
}
