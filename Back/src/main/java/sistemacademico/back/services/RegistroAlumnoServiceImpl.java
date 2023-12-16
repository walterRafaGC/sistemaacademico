package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Alumno;
import sistemacademico.back.repositories.AlumnoRepository;

@Service
public class RegistroAlumnoServiceImpl implements RegistroAlumnoService {
    @Autowired
    private final AlumnoRepository rps_alumno;

    public RegistroAlumnoServiceImpl(AlumnoRepository rps_alumno) {
        this.rps_alumno = rps_alumno;
    }

    @Override
    public Map<String, String> register(String nombre, String apellido, String tipo_documento, Integer numero_documento,
            String codigo, String colegio_procedencia, String grado_academico, String certificados, String genero,
            String nacionalidad, String edad, String fecha_nacimiento, String direccion, String religion,
            String habilidades, String sangre, String alergias, String enfermedades_hereditarias,
            String enfermedades_cronicas) {
        Map<String, String> errorMessages = new HashMap<>();
        Alumno alumno = new Alumno(nombre, apellido, tipo_documento, numero_documento, codigo, colegio_procedencia,
                grado_academico, certificados, genero, nacionalidad, edad, fecha_nacimiento, direccion, religion,
                habilidades, sangre, alergias, enfermedades_cronicas, enfermedades_cronicas);
        rps_alumno.save(alumno);
        return errorMessages;
    }
}
