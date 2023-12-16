package sistemacademico.back.repositories;

import org.springframework.stereotype.Repository;
import sistemacademico.back.entities.Alumno;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
}