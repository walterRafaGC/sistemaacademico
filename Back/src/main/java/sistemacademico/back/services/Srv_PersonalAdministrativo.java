package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import sistemacademico.back.entities.PersonalAdministrativo;
import sistemacademico.back.repositories.PersonalAdministrativoRepository;

@Service
public class Srv_PersonalAdministrativo {
    PersonalAdministrativoRepository rps_PersonalAdministrativo;

    public Srv_PersonalAdministrativo(PersonalAdministrativoRepository rps_PersonalAdministrativo){
        this.rps_PersonalAdministrativo=rps_PersonalAdministrativo;
    }

    public ArrayList<PersonalAdministrativo> obtenerPersonal(){
        return (ArrayList<PersonalAdministrativo>) rps_PersonalAdministrativo.findAll();
    }
    
    public PersonalAdministrativo guardarPersonal(PersonalAdministrativo personalAdministrativo){
        return rps_PersonalAdministrativo.save(personalAdministrativo);
    }

    public Optional<PersonalAdministrativo> obtenerPersonalPorID(Long id_PersonalAdministrativo){
        return rps_PersonalAdministrativo.findById(id_PersonalAdministrativo);
    }

   // public Optional<PersonalAdministrativo> obtenerPersonalPorDNI(int Numero_Identificacion){
    //    return rps_PersonalAdministrativo.findByNumero_Identificacion(Numero_Identificacion);
    //}
}
