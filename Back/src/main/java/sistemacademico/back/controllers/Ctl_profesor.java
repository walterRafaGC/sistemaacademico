package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.models.Mdl_profesor;
import sistemacademico.back.services.Srv_profesor;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping(path = "/{id_profesor}")
    public Optional<Mdl_profesor> obtenerProfesorPorId(@PathVariable("id_profesor") Long id_profesor){
        return this.srv_profesor.obtetenerPorID(id_profesor);
    }

    @DeleteMapping( path = "/{id_profesor}")
    public String eleminarPorId(@PathVariable("id_profesor") Long id_profesor){
        boolean ok = this.srv_profesor.eliminarProfesor(id_profesor);
        if(ok){
            return "Se elemino el profesor con el id: "+id_profesor;
        }else{
            return "No pudo eliminar el profesro con el id: "+id_profesor;
        }
    }
}