package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.models.ProfesorModel;
import com.example.demo.services.ProfesorService;

@RestController
@RequestMapping("/profesor")
public class ProfesorController {
    @Autowired
    ProfesorService profesorService;

    @GetMapping()
    public ArrayList<ProfesorModel> obtenerProfesor(){
        return profesorService.obtenerProfesor();
    }
    
    @PostMapping()
    public ProfesorModel guardaProfesor(@RequestBody ProfesorModel profesor){
        return this.profesorService.guardarProfesor(profesor);
    }
}
