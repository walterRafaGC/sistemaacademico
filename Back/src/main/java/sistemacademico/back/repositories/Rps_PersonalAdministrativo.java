package sistemacademico.back.repositories;

import sistemacademico.back.entities.PersonalAdministrativo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rps_PersonalAdministrativo extends JpaRepository<PersonalAdministrativo, Long> {
    Optional<PersonalAdministrativo> findByNumero_Identificacion(Integer numero_Identificacion);
}