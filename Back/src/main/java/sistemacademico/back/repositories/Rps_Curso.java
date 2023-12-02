package sistemacademico.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sistemacademico.back.entities.Curso;

@Repository
public interface Rps_Curso extends JpaRepository<Curso,Integer>{
}
