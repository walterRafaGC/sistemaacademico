package sistemacademico.back.repositories;

import org.springframework.stereotype.Repository;

import sistemacademico.back.entities.Alumno;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface Rps_alumno extends JpaRepository<Alumno, Long> {    
}