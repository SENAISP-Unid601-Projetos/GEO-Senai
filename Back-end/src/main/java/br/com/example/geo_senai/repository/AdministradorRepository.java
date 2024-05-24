package br.com.example.geo_senai.repository;

import br.com.example.geo_senai.entity.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface AdministradorRepository extends JpaRepository<Administrador, Long> {
    Administrador findByUsuarioAdmin(String usuarioAdmin);
    boolean existsByUsuarioAdmin(String usuarioAdmin);
}
