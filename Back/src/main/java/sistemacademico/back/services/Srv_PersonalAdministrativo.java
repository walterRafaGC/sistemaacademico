package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.PersonalAdministrativo;
import sistemacademico.back.repositories.Rps_PersonalAdministrativo;

@Service
public class Srv_PersonalAdministrativo {
    Rps_PersonalAdministrativo rps_PersonalAdministrativo;

    @Autowired
    public Srv_PersonalAdministrativo(Rps_PersonalAdministrativo rps_PersonalAdministrativo){
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
}
