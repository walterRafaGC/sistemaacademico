package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Padres;
import sistemacademico.back.repositories.Rps_Padres;

@Service
public class RegistroPadreServicelmpl implements RegistroPadreService {
    @Autowired
    public final Rps_Padres rps_Padres;

    public RegistroPadreServicelmpl(Rps_Padres rps_Padres) {
        this.rps_Padres = rps_Padres;
    }

    @Override
    public Map<String, String> register(String nombre_padre, String tipo_documento_padre,
            Integer numero_documento_padre,
            String telefono_padre, String correo_padre, String nombre_madre, String tipo_documento_madre,
            Integer numero_documento_madre, String telefono_madre, String correo_madre, Integer id_apoderado_padres,
            Integer id_hijo_padres) {
        Map<String, String> errorMessages = new HashMap<>();
        Padres padres = new Padres(nombre_padre, tipo_documento_padre, numero_documento_padre,
                telefono_padre, correo_padre, nombre_madre, tipo_documento_madre,
                numero_documento_madre, telefono_madre, correo_madre, id_apoderado_padres,
                id_hijo_padres);
        rps_Padres.save(padres);
        return errorMessages;
    }
}