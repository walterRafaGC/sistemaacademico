package sistemacademico.back.repositories;

import sistemacademico.back.entities.Padres;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rps_Padres extends JpaRepository<Padres,Long>{
}
