package sistemacademico.back.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Curso;
import sistemacademico.back.repositories.Rps_Curso;

@Service
public class Srv_curso {
    Rps_Curso rps_Curso;

    @Autowired
    public Srv_curso(Rps_Curso rps_Curso){
        this.rps_Curso = rps_Curso;
    }

    public ArrayList<Curso> obtenerCurso(){
        return (ArrayList<Curso>) rps_Curso.findAll();
    }
}
