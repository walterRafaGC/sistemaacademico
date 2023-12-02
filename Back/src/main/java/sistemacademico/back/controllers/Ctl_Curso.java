package sistemacademico.back.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.entities.Curso;
import sistemacademico.back.services.Srv_curso;

@RestController
@RequestMapping("api/curso")
@CrossOrigin(origins="http://localhost:3000")
public class Ctl_Curso {
    
    Srv_curso srv_curso;

    @Autowired
    public Ctl_Curso(Srv_curso srv_curso){
        this.srv_curso = srv_curso;
    }

    @GetMapping()
    public ArrayList<Curso> obtenerCurso(){
        return srv_curso.obtenerCurso();
    }
}
