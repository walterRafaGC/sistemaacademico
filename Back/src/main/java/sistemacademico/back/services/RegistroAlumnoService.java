package sistemacademico.back.services;

import java.util.Map;

public interface RegistroAlumnoService {
    Map<String, String> register(
            String nombre_alumno, String apellido_alumno, String tipo_documento_alumno, Integer numero_documento_alumno,
            String codigo_alumno, String colegio_procedencia, String grado_academico_alumno, String certificados_alumno,
            String genero_alumno, String nacionalidad_alumno, String edad_alumno, String fecha_nacimiento_alumno,
            String direccion_alumno, String religion_alumno, String habilidades_alumno, String sangre_alumno,
            String alergias_alumno, String enfermedades_hereditarias, String enfermedades_cronicas);
}
