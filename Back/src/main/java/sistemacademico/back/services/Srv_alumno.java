package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Alumno;
import sistemacademico.back.repositories.Rps_alumno;

@Service
public class Srv_alumno {
    Rps_alumno rps_alumno;

    @Autowired
    public Srv_alumno(Rps_alumno rps_alumno){
        this.rps_alumno = rps_alumno;
    }

    public ArrayList<Alumno> obtenerAlumno(){
        return (ArrayList<Alumno>) rps_alumno.findAll();
    }

    public Alumno guardarAlumno(Alumno alumno){
        return rps_alumno.save(alumno);
    }

    public Optional<Alumno> obtetenerAlumnoPorID(Long id_alumno){
        return rps_alumno.findById(id_alumno);
    }
}
