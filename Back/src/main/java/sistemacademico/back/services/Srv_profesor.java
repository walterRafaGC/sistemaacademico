package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

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

    public Optional<Mdl_profesor> obtetenerPorID(Long id_profesor){
        return rps_profesor.findById(id_profesor);
    }

    public boolean eliminarProfesor(Long id_profesor){
        try{
            rps_profesor.deleteById(id_profesor);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
