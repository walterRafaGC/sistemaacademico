package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Alumno;
import sistemacademico.back.repositories.AlumnoRepository;

@Service
public class Srv_alumno {
    AlumnoRepository rps_alumno;

    public Srv_alumno(AlumnoRepository rps_alumno){
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
