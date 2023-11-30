package sistemacademico.back.services;

import java.util.Map;

public interface RegistroPadreService {
    Map<String, String> register(
            String nombre_padre, String tipo_documento_padre, Integer numero_documento_padre,
            String telefono_padre, String correo_padre, String nombre_madre, String tipo_documento_madre,
            Integer numero_documento_madre, String telefono_madre, String correo_madre, Integer id_apoderado_padres,
            Integer id_hijo_padres);
}