package br.com.example.senai_auto.resource;

import br.com.example.senai_auto.entity.Administrador;
import br.com.example.senai_auto.repository.AdministradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdministradorResource {
    @Autowired
    private AdministradorRepository administradorRepository;

    @PostMapping("/cadastrar")
    public Administrador cadastraAdm(@RequestBody Administrador administrador) {
        return administradorRepository.save(administrador);
    }

    @GetMapping
    public List<Administrador> getAdmins() {
        return administradorRepository.findAll();
    }
}
