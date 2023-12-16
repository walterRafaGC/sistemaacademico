package sistemacademico.back.services;

import java.util.Map;

public interface RegistroPersonalService {
    Map<String, String> register(String Nombres_PersonalAdminis, String Apellido, String Fecha_Nacimiento,
            String Genero, String Tipo_Documento_PersonalAdministrativo, Integer dni,
            String Fotografia, String Direccion_Domicilio, String Numero_Telefono, String Email, String Puesto_Cargo,
            String Fecha_Inicio_Empleo, String Departamento_Area, Double Salario, String Tipo_Contrato,
            String Turno_Horario,String Contrasena);
}