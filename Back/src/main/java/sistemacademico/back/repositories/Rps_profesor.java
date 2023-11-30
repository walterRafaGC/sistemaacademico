package sistemacademico.back.repositories;

import org.springframework.stereotype.Repository;

import sistemacademico.back.entities.Profesor;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface Rps_profesor extends JpaRepository<Profesor, Long>{    
}
