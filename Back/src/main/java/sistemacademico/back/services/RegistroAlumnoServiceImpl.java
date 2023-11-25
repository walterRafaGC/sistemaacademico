package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Alumno;
import sistemacademico.back.repositories.Rps_alumno;

@Service
public class RegistroAlumnoServiceImpl implements RegistroAlumnoService {
    @Autowired
    private final Rps_alumno rps_alumno;

    public RegistroAlumnoServiceImpl(Rps_alumno rps_alumno) {
        this.rps_alumno = rps_alumno;
    }

    @Override
    public Map<String, String> register(String nombre_alumno, String apellido_alumno, String tipo_documento_alumno, Integer numero_documento_alumno, String codigo_alumno, String colegio_procedencia, String grado_academico_alumno, String certificados_alumno,
            String genero_alumno, String nacionalidad_alumno, String edad_alumno, String fecha_nacimiento_alumno, String direccion_alumno, String religion_alumno, String habilidades_alumno, String sangre_alumno, String alergias_alumno, String enfermedades_hereditarias, String enfermedades_cronicas) {
        Map<String, String> errorMessages = new HashMap<>();
        Alumno alumno = new Alumno(nombre_alumno, apellido_alumno, tipo_documento_alumno, numero_documento_alumno,
                codigo_alumno, colegio_procedencia, grado_academico_alumno, certificados_alumno,
                genero_alumno, nacionalidad_alumno, edad_alumno, fecha_nacimiento_alumno,
                direccion_alumno, religion_alumno, habilidades_alumno, sangre_alumno,
                alergias_alumno, enfermedades_hereditarias, enfermedades_cronicas);
        rps_alumno.save(alumno);
        return errorMessages;
    }
}
