package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Profesor;
import sistemacademico.back.repositories.Rps_profesor;

@Service
public class Srv_profesor {
    Rps_profesor rps_profesor;

    @Autowired
    public Srv_profesor(Rps_profesor rps_profesor){
        this.rps_profesor = rps_profesor;
    }

    public ArrayList<Profesor> obtenerProfesor(){
        return (ArrayList<Profesor>) rps_profesor.findAll();
    }

    public Profesor guardarProfesor(Profesor profesor){
        return rps_profesor.save(profesor);
    }

    public Optional<Profesor> obtetenerProfesorPorID(Long id_profesor){
        return rps_profesor.findById(id_profesor);
    }

    public Optional<Profesor> obtenerProfesorPorDNI(int dni_profesor) {
        return rps_profesor.findByDniProfesor(dni_profesor);
    }
}
