package sistemacademico.back.services;

import java.util.Map;

public interface RegistroApoderadoService {
   Map<String, String> register(String nombre_apoderado, String apellido_apoderado, String tipo_documento_apoderado, Integer dni_apoderado, Integer telefono_apoderado, String direccion_apoderado, String correo_apoderado, String contrasena, String id_hijo_apoderado);
}