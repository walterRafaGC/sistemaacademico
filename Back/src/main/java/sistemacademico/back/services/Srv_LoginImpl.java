package sistemacademico.back.services;

import org.springframework.stereotype.Service;
import sistemacademico.back.entities.Apoderado;
import sistemacademico.back.entities.PersonalAdministrativo;
import sistemacademico.back.entities.Profesor;
import sistemacademico.back.repositories.ApoderadoRepository;
import sistemacademico.back.repositories.PersonalAdministrativoRepository;
import sistemacademico.back.repositories.ProfesorRepository;

import java.util.HashMap;
import java.util.Map;

@Service
public class Srv_LoginImpl implements Srv_Login {

    private final ProfesorRepository profesorRepository;
    private final ApoderadoRepository apoderadoRepository;
    private final PersonalAdministrativoRepository personalAdministrativoRepository;

    public Srv_LoginImpl(ProfesorRepository profesorRepository, ApoderadoRepository apoderadoRepository,
            PersonalAdministrativoRepository personalAdministrativoRepository) {
        this.profesorRepository = profesorRepository;
        this.apoderadoRepository = apoderadoRepository;
        this.personalAdministrativoRepository = personalAdministrativoRepository;
    }

    @Override
    public Map<String, Object> login(Integer dni, String password) {
        Map<String, Object> response = new HashMap<>();

        // Check if the user exists in Profesor
        boolean profesorExists = profesorRepository.existsByDni(dni);
        if (profesorExists) {
            Profesor profesor = profesorRepository.findByDni(dni);
            if (profesor.getContrasena().equals(password)) {
                response.put("status", "ok");
                response.put("userType", "Profesor");
                response.put("message", "Login successful");
                return response;
            }
        }

        // Check if the user exists in Apoderado
        boolean apoderadoExists = apoderadoRepository.existsByDni(dni);
        if (apoderadoExists) {
            Apoderado apoderado = apoderadoRepository.findByDni(dni);
            if (apoderado.getContrasena().equals(password)) {
                response.put("status", "ok");
                response.put("userType", "Apoderado");
                response.put("message", "Login successful");
                return response;
            }
        }

        boolean personalExists = personalAdministrativoRepository.existsByDni(dni);
        if (personalExists) {
            PersonalAdministrativo personalAdministrativo = personalAdministrativoRepository.findByDni(dni);
            if (personalAdministrativo.getContrasena().equals(password)) {
                response.put("status", "ok");
                response.put("userType", "Profesor");
                response.put("message", "Login successful");
                return response;
            }
        }

        // If user doesn't exist in any table or password doesn't match
        response.put("status", "fail");
        response.put("message", "Invalid credentials");
        return response;
    }
}
