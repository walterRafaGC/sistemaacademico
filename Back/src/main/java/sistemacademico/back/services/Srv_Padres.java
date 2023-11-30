package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Padres;
import sistemacademico.back.repositories.Rps_Padres;

@Service
public class Srv_Padres {
    Rps_Padres rps_Padres;

    @Autowired
    public Srv_Padres(Rps_Padres rps_Padres){
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
