package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.RegistroProfesorPeticionDto;
import sistemacademico.back.entities.Profesor;
import sistemacademico.back.services.RegistroProfesorService;
import sistemacademico.back.services.Srv_profesor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/profesor")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_profesor {

    Srv_profesor srv_profesor;
    private final RegistroProfesorService registroProfesorService;

    public Ctl_profesor(Srv_profesor srv_profesor, RegistroProfesorService registroProfesorService) {
        this.srv_profesor = srv_profesor;
        this.registroProfesorService = registroProfesorService;
    }

    @GetMapping()
    public ArrayList<Profesor> obtenerProfesor(){
        return srv_profesor.obtenerProfesor();
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Map<String, Object>> guardarProfesor(@RequestBody RegistroProfesorPeticionDto profesor) {
        Map<String, String> errorMessages = registroProfesorService.register(
                profesor.getNombre_profesor(),
                profesor.getApellido_profesor(),
                profesor.getTipo_documento_profesor(),
                profesor.getDni_profesor(),
                profesor.getTelefono_profesor(),
                profesor.getDireccion_profesor(),
                profesor.getCorreo_profesor(),
                profesor.getGenero_profesor(),
                profesor.getNacionalidad_profesor(),
                profesor.getEdad_profesor(),
                profesor.getFecha_nacimiento_profesor(),
                profesor.getReligion_profesor(),
                profesor.getGrado_academico_profesor(),
                profesor.getCertificado_profesor(),
                profesor.getCv_profesor(),
                profesor.getContrasena_profesor());
        Map<String, Object> response = new HashMap<>();
        response.put("success", errorMessages.isEmpty());
        response.put("errorMessages", errorMessages);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id_profesor}")
    public Optional<Profesor> obtenerProfesorPorId(@PathVariable("id_profesor") Long id_profesor) {
        return this.srv_profesor.obtetenerProfesorPorID(id_profesor);
    }

    //@GetMapping(path = "/login/{dni_profesor}")
    //public Optional<Profesor> obtenerProfesorPorDNI(@PathVariable("dni_profesor") int dni_profesor) {
   //     return this.srv_profesor.obtenerProfesorPorDNI(dni_profesor);
    //}
}