package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.models.Mdl_profesor;
import sistemacademico.back.services.Srv_profesor;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/profesor")
public class Ctl_profesor {
    @Autowired
    Srv_profesor srv_profesor;
    
    @GetMapping()
    public ArrayList<Mdl_profesor> obtenerProfesor(){
        return srv_profesor.obtenerProfesor();
    }

    @PostMapping()
    public Mdl_profesor guardarProfesor(@RequestBody Mdl_profesor profesor){
        return this.srv_profesor.guardarProfesor(profesor);
    }
}