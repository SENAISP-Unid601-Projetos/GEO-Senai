package br.com.example.senai_auto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.example.senai_auto.entity.Turma;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Long>{

}
