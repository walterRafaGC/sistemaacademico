package sistemacademico.back.services;

import java.util.Map;

public interface RegistroAlumnoService {
    Map<String, String> register(String nombre, String apellido, String tipo_documento, Integer numero_documento,
            String codigo, String colegio_procedencia, String grado_academico, String certificados, String genero,
            String nacionalidad, String edad, String fecha_nacimiento, String direccion, String religion,
            String habilidades, String sangre, String alergias, String enfermedades_hereditarias,
            String enfermedades_cronicas);
}
