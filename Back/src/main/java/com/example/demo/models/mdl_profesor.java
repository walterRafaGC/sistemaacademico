package com.example.demo.models;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController

public class mdl_profesor {
    @GetMapping("/")
    String hola(){
        return "hola jasjsadjdfsjnadwbijknbhjknadwbjkndfsvbhjkladw";
    }
}
