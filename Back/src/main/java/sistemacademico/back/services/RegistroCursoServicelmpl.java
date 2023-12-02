package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Curso;
import sistemacademico.back.repositories.Rps_Curso;

@Service
public class RegistroCursoServicelmpl implements RegistroCursoService {
    @Autowired
    private final Rps_Curso rps_Curso;

    public RegistroCursoServicelmpl(Rps_Curso rps_Curso) {
        this.rps_Curso = rps_Curso;
    }

    @Override
    public Map<String, String> register(String nombre, String grado) {
        Map<String, String> errorMessages = new HashMap<>();
        Curso curso = new Curso(nombre, grado);
        rps_Curso.save(curso);
        return errorMessages;
    }
}
