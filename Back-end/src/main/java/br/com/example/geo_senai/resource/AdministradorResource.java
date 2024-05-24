package br.com.example.geo_senai.resource;

import br.com.example.geo_senai.entity.Administrador;
import br.com.example.geo_senai.repository.AdministradorRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdministradorResource {
    @Autowired
    private AdministradorRepository administradorRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<Administrador> cadastraAdm(@Valid @RequestBody Administrador administrador) {
        try {
            if (administradorRepository.existsByUsuarioAdmin(administrador.getUsuarioAdmin())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).build();
            }
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        Administrador administrador = administradorRepository.findByUsuarioAdmin(request.getUsuarioAdmin());

        if (administrador != null && administrador.getSenhaAdmin().equals(request.getSenhaAdmin())) {
            String token = gerarTokenJWT(request.getUsuarioAdmin());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

    private String gerarTokenJWT(String usuarioAdmin) {
        // Implementar a geração de token JWT
        return "tokenJWT";
    }

    @Data
    static class LoginRequest {
        private String usuarioAdmin;
        private String senhaAdmin;
    }
}
