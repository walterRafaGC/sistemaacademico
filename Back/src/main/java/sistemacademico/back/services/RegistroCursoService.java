package sistemacademico.back.services;

import java.util.Map;

public interface RegistroCursoService {
    Map<String, String> register(String nombre, String grado);
}
