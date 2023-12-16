package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.repositories.ApoderadoRepository;
import sistemacademico.back.entities.Apoderado;

@Service
public class RegistroApoderadoServicelmpl implements RegistroApoderadoService {
    @Autowired
    private final ApoderadoRepository rps_Apoderado;

    public RegistroApoderadoServicelmpl(ApoderadoRepository rps_Apoderado) {
        this.rps_Apoderado = rps_Apoderado;
    }

    @Override
    public Map<String, String> register(String nombre, String apellido, String tipo_documento, Integer dni,
            Integer telefono,
            String direccion, String correo, String contrasena, String id_hijos) {
        Map<String, String> errorMessages = new HashMap<>();
        Apoderado apoderado = new Apoderado(nombre, apellido, tipo_documento,
                dni, telefono, direccion, correo, contrasena, id_hijos);
        rps_Apoderado.save(apoderado);
        return errorMessages;
    }

}