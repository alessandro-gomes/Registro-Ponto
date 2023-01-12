package br.com.aporttsistemas.exerciciotecnico.repository;

import br.com.aporttsistemas.exerciciotecnico.model.RegistroPonto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroPontoRepository extends JpaRepository<RegistroPonto, Long> {
    
    
    
}
