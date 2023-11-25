package sistemacademico.back.services;

import java.util.Map;

public interface RegistroProfesorService {
    Map<String, String> register(String nombre_profesor, String apellido_profesor, String tipo_documento_profesor, Integer dni_profesor, Integer telefono_profesor, String direccion_profesor, String correo_profesor, String genero_profesor, String nacionalidad_profesor, Integer edad_profesor, String fecha_nacimiento_profesor, String religion_profesor, String grado_academico_profesor, String certificado_profesor, String cv_profesor, String contrasena_profesor) ; 
}
