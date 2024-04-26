package br.com.example.geo_senai.resource;

import br.com.example.geo_senai.entity.Administrador;
import br.com.example.geo_senai.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/admin")
public class AdministradorResource {
    @Autowired
    private AdministradorRepository administradorRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<Administrador> cadastraAdm(@Valid @RequestBody Administrador administrador) {
        try {
            Administrador novoAdm = administradorRepository.save(administrador);
            return ResponseEntity.status(HttpStatus.CREATED).body(novoAdm);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public List<Administrador> getAdmins() {
        return administradorRepository.findAll();
    }
}
