package sistemacademico.back.repositories;

import sistemacademico.back.entities.Apoderado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@Repository
public interface Rps_Apoderado extends JpaRepository<Apoderado, Long>{ 
    Optional<Apoderado> findByDni_apoderado(Integer dni_apoderado);
}