package sistemacademico.back.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import sistemacademico.back.models.Mdl_profesor;

@Repository
public interface Rps_profesor extends CrudRepository<Mdl_profesor, Long> {

}
