package br.com.example.geo_senai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.example.geo_senai.entity.Turma;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long>{

}
