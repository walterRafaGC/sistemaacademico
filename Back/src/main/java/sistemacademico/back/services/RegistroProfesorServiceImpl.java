package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Profesor;
import sistemacademico.back.repositories.ProfesorRepository;

@Service
public class RegistroProfesorServiceImpl implements RegistroProfesorService {
    @Autowired
    private final ProfesorRepository rps_profesor;

    public RegistroProfesorServiceImpl(ProfesorRepository rps_profesor) {
        this.rps_profesor = rps_profesor;
    }

    @Override
    public Map<String, String> register(String nombre_profesor, String apellido_profesor,
            String tipo_documento_profesor, Integer dni_profesor, Integer telefono_profesor, String direccion_profesor,
            String correo_profesor, String genero_profesor, String nacionalidad_profesor, Integer edad_profesor,
            String fecha_nacimiento_profesor, String religion_profesor, String grado_academico_profesor,
            String certificado_profesor, String cv_profesor, String contrasena_profesor) {
        Map<String, String> errorMessages = new HashMap<>();
        Profesor profesor = new Profesor(nombre_profesor, apellido_profesor, tipo_documento_profesor, dni_profesor,
                telefono_profesor, direccion_profesor, correo_profesor, genero_profesor, nacionalidad_profesor,
                edad_profesor, fecha_nacimiento_profesor, religion_profesor, grado_academico_profesor,
                certificado_profesor, cv_profesor, contrasena_profesor);
        rps_profesor.save(profesor);
        return errorMessages;
    }
}
