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
public class Turma implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_turma;

	@Column
	private String codigo_turma;

	@Column
	private String nome_curso;

	@Column
	private String sala_turma;

	@Column
	private String duracao_curso;

	@Column(length = 500)
	private String desc_curso;

	// Horários
	@Column(nullable = true)
	private String seg_horario;
	@Column(nullable = true)
	private String ter_horario;
	@Column(nullable = true)
	private String qua_horario;
	@Column(nullable = true)
	private String qui_horario;
	@Column(nullable = true)
	private String sex_horario;
}
