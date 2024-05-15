package br.com.example.geo_senai.repository;

import br.com.example.geo_senai.entity.Sala;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SalaRepository extends JpaRepository<Sala, Long> {
    List<Sala> findByPosicaoSala(String posicaoSala);
    Optional<Sala> findByNomeSala(String nomeSala);
}
