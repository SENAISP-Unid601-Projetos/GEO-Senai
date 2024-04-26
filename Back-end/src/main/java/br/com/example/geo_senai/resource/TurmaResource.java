package br.com.example.geo_senai.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.example.geo_senai.entity.Turma;
import br.com.example.geo_senai.repository.TurmaRepository;

import java.util.List;

@RestController
@RequestMapping("/turmas")
public class TurmaResource {
	@Autowired
	private TurmaRepository turmaRepository;
	
	@PostMapping("/nova-turma")
	public Turma adicionaTurma(@RequestBody Turma turma) {
		return turmaRepository.save(turma);
	}

	@GetMapping
	public List<Turma> getTurmas() {
		return turmaRepository.findAll();
	}

	@DeleteMapping("/deletar/{id}")
	public void deletaTurma(@PathVariable Long id) {
		turmaRepository.deleteById(id);
	}

	@DeleteMapping("/deletar/all")
	public void deletaTudo() {
		turmaRepository.deleteAll();
	}

	@PutMapping("/editar/{id}")
	public Turma editarTurma(@PathVariable Long id, @RequestBody Turma turma) {
		turma.setId_turma(id);
		return turmaRepository.save(turma);
	}
}

