package com.example.demo.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.ProfesorModel;
import com.example.demo.repositories.ProfesorRepository;

@Service
public class ProfesorService {
    @Autowired
    ProfesorRepository profesorRepository;

    public ArrayList<ProfesorModel> obtenerProfesor(){
        return (ArrayList<ProfesorModel>) profesorRepository.findAll();
    }

    public ProfesorModel guardarProfesor(ProfesorModel profesor){
        return profesorRepository.save(profesor);
    }

}
