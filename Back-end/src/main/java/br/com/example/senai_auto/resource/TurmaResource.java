package br.com.example.senai_auto.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.example.senai_auto.entity.Turma;
import br.com.example.senai_auto.repository.TurmaRepository;

@RestController
@RequestMapping("/senaiauto")
public class TurmaResource {
	@Autowired
	private TurmaRepository turmaRepository;
	
	@PostMapping("/turmas/nova-turma")
	public Turma adicionaTurma(@RequestBody Turma turma) {
		return turmaRepository.save(turma);
	}
}
