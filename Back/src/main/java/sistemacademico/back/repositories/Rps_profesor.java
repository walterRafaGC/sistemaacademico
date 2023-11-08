package sistemacademico.back.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import sistemacademico.back.models.Mdl_profesor;

@Repository
public interface Rps_profesor extends CrudRepository<Mdl_profesor, Long> {
    public abstract ArrayList<Mdl_profesor> findById_profesor(Long id_profesor);
}
