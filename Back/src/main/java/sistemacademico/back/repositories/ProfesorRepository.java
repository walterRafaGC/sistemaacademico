package sistemacademico.back.repositories;

import org.springframework.stereotype.Repository;
import sistemacademico.back.entities.Profesor;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface ProfesorRepository extends JpaRepository<Profesor, Long>{
    boolean existsByDni(Integer dni);    
    Profesor findByDni(Integer dni);
}
