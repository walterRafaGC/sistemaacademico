package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.repositories.Rps_Apoderado;
import sistemacademico.back.entities.Apoderado;

@Service
public class RegistroApoderadoServicelmpl implements RegistroApoderadoService {
    @Autowired
    private final Rps_Apoderado rps_Apoderado;

    public RegistroApoderadoServicelmpl(Rps_Apoderado rps_Apoderado) {
        this.rps_Apoderado = rps_Apoderado;
    }

    @Override
    public Map<String, String> register(String nombre_apoderado, String apellido_apoderado,
            String tipo_documento_apoderado, Integer dni_apoderado, Integer telefono_apoderado,
            String direccion_apoderado, String correo_apoderado, String contrasena, String id_hijo_apoderado) {
        Map<String, String> errorMessages = new HashMap<>();
        Apoderado apoderado = new Apoderado(nombre_apoderado, apellido_apoderado, tipo_documento_apoderado,
                dni_apoderado, telefono_apoderado, direccion_apoderado, correo_apoderado, contrasena,
                id_hijo_apoderado);
        rps_Apoderado.save(apoderado);
        return errorMessages;
    }

}