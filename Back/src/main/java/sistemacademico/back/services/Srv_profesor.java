package sistemacademico.back.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.models.Mdl_profesor;
import sistemacademico.back.repositories.Rps_profesor;

@Service
public class Srv_profesor {
    @Autowired
    Rps_profesor rps_profesor;

    public ArrayList<Mdl_profesor>obtenerProfesor(){
        return (ArrayList<Mdl_profesor>) rps_profesor.findAll();
    }

    public Mdl_profesor guardarProfesor(Mdl_profesor profesor){
        return rps_profesor.save(profesor);
    }
}
