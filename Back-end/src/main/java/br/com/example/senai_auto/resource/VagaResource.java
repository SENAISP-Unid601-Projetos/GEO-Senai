package br.com.example.senai_auto.resource;

import br.com.example.senai_auto.entity.Vaga;
import br.com.example.senai_auto.repository.VagaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vagas")
public class VagaResource {
    @Autowired
    private VagaRepository vagaRepository;

    @PostMapping("/nova-vaga")
    public Vaga adicionaVaga(@RequestBody Vaga vaga) {
        return vagaRepository.save(vaga);
    }

    @GetMapping
    public List<Vaga> getVagas() {
        return vagaRepository.findAll();
    }

    @DeleteMapping("/deletar/{id}")
    public void deletaVaga(@PathVariable Long id) {
        vagaRepository.deleteById(id);
    }

    @DeleteMapping("/deletar/all")
    public void deletaTudo() {
        vagaRepository.deleteAll();
    }

    @PutMapping("/editar/{id}")
    public Vaga editarVaga(@PathVariable Long id, @RequestBody Vaga vaga) {
        vaga.setId_vaga(id);
        return vagaRepository.save(vaga);
    }
}
