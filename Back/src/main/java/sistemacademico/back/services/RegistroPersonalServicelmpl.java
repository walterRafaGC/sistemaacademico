package sistemacademico.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.PersonalAdministrativo;
import sistemacademico.back.repositories.PersonalAdministrativoRepository;

@Service
public class RegistroPersonalServicelmpl implements RegistroPersonalService {
    @Autowired
    private final PersonalAdministrativoRepository rps_PersonalAdministrativo;

    public RegistroPersonalServicelmpl(PersonalAdministrativoRepository rps_PersonalAdministrativo) {
        this.rps_PersonalAdministrativo = rps_PersonalAdministrativo;
    }

    @Override
    public Map<String, String> register(String Nombres_PersonalAdminis, String Apellido, String Fecha_Nacimiento,
            String Genero, String Tipo_Documento_PersonalAdministrativo, Integer dni,
            String Fotografia, String Direccion_Domicilio, String Numero_Telefono, String Email, String Puesto_Cargo,
            String Fecha_Inicio_Empleo, String Departamento_Area, Double Salario, String Tipo_Contrato,
            String Turno_Horario, String Contrasena) {
        Map<String, String> errorMessages = new HashMap<>();
        PersonalAdministrativo personal = new PersonalAdministrativo(Nombres_PersonalAdminis, Apellido,
                Fecha_Nacimiento, Genero, Tipo_Documento_PersonalAdministrativo, dni, Fotografia, Direccion_Domicilio,
                Numero_Telefono, Email, Puesto_Cargo, Fecha_Inicio_Empleo, Departamento_Area, Salario, Tipo_Contrato,
                Turno_Horario, Contrasena);
        rps_PersonalAdministrativo.save(personal);
        return errorMessages;
    }
}