package sistemacademico.back.services;

import java.util.Map;

public interface RegistroApoderadoService {
   Map<String, String> register(String nombre, String apellido, String tipo_documento, Integer dni, Integer telefono,
   String direccion, String correo, String contrasena, String id_hijos);
}