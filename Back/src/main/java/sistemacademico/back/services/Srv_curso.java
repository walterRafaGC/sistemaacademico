package sistemacademico.back.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Curso;
import sistemacademico.back.repositories.CursoRepository;

@Service
public class Srv_curso {
    CursoRepository rps_Curso;

    public Srv_curso(CursoRepository rps_Curso){
        this.rps_Curso = rps_Curso;
    }

    public ArrayList<Curso> obtenerCurso(){
        return (ArrayList<Curso>) rps_Curso.findAll();
    }
}
