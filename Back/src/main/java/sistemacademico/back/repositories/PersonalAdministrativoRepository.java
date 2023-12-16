package sistemacademico.back.repositories;

import sistemacademico.back.entities.PersonalAdministrativo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonalAdministrativoRepository extends JpaRepository<PersonalAdministrativo, Long> {
   boolean existsByDni(Integer dni);
   PersonalAdministrativo findByDni(Integer dni);
}