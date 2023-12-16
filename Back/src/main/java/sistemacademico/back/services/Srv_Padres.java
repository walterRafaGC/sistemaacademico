package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Padres;
import sistemacademico.back.repositories.PadresRepository;

@Service
public class Srv_Padres {
    PadresRepository rps_Padres;

    public Srv_Padres(PadresRepository rps_Padres){
        this.rps_Padres = rps_Padres;
    }

    public ArrayList<Padres> obtenerPadres(){
        return (ArrayList<Padres>) rps_Padres.findAll();
    }

    public Padres guardarPadres(Padres padres){
        return rps_Padres.save(padres);
    }
    
    public Optional<Padres> obtenerPadrePorID(Long id_padres){
        return rps_Padres.findById(id_padres);
    }
}
