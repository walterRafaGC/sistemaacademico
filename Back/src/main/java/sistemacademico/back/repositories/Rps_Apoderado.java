package sistemacademico.back.repositories;

import sistemacademico.back.entities.Apoderado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rps_Apoderado extends JpaRepository<Apoderado, Long>{ 
    
    Apoderado findByDni_apoderado(String dni);
}