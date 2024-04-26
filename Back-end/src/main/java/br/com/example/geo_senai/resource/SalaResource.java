package br.com.example.geo_senai.resource;

import br.com.example.geo_senai.entity.Sala;
import br.com.example.geo_senai.repository.SalaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salas")
public class SalaResource {
    @Autowired
    private SalaRepository salaRepository;

    @GetMapping
    public List<Sala> getSalas() {
        return salaRepository.findAll();
    }

    @GetMapping("/area1-inferior")
    public List<Sala> getSalasArea1Inferior() {
        return salaRepository.findByPosicaoSala("Área 1 (inferior)");
    }

    @GetMapping("/area1-superior")
    public List<Sala> getSalasArea1Superior() {
        return salaRepository.findByPosicaoSala("Área 1 (superior)");
    }

    @GetMapping("/area2")
    public List<Sala> getSalasArea2() {
        return salaRepository.findByPosicaoSala("Área 2");
    }

    @PostMapping()
    public Sala adicionaSala(@RequestBody Sala sala) {
        return salaRepository.save(sala);
    }

    @PutMapping("/editar/{id}")
        public Sala editarSala(@PathVariable Long id, @RequestBody Sala sala) {
        sala.setId_sala(id);
        return salaRepository.save(sala);
    }
}
