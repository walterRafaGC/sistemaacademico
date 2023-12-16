package sistemacademico.back.repositories;

import sistemacademico.back.entities.Apoderado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApoderadoRepository extends JpaRepository<Apoderado, Long>{       
    boolean existsByDni(Integer dni);
    Apoderado findByDni(Integer dni);
}