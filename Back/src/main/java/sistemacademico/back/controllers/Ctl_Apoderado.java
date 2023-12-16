package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.RegistroApoderadoPeticionDto;
import sistemacademico.back.entities.Apoderado;
import sistemacademico.back.services.RegistroApoderadoService;
import sistemacademico.back.services.Srv_Apoderado;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/apoderado")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_Apoderado {

    Srv_Apoderado srv_Apoderado;
    private final RegistroApoderadoService registroApoderadoService;

    public Ctl_Apoderado(Srv_Apoderado srv_apoderado, RegistroApoderadoService registroApoderadoService) {
        this.srv_Apoderado = srv_apoderado;
        this.registroApoderadoService = registroApoderadoService;
    }
    
    @GetMapping()
    public ArrayList<Apoderado> obteApoderados(){
        return srv_Apoderado.obtenerApoderado();
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Map<String, Object>> guardarProfesor(@RequestBody RegistroApoderadoPeticionDto apoderado) {
        Map<String, String> errorMessages = registroApoderadoService.register(
                apoderado.getNombre_apoderado(),
                apoderado.getApellido_apoderado(),
                apoderado.getTipo_documento_apoderado(),
                apoderado.getDni_apoderado(),
                apoderado.getTelefono_apoderado(),
                apoderado.getDireccion_apoderado(),
                apoderado.getCorreo_apoderado(),
                apoderado.getContrasena(),
                apoderado.getId_hijo_apoderado());
        Map<String, Object> response = new HashMap<>();
        response.put("success", errorMessages.isEmpty());
        response.put("errorMessages", errorMessages);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id_apoderado}")
    public Optional<Apoderado> obtenerApoderadoPorID(@PathVariable("id_apoderado") Long id_apoderado) {
        return this.srv_Apoderado.obtenerApoderadoPorID(id_apoderado);
    }

   // @GetMapping(path = "/login/{dni_apoderado}")
   // public Optional<Apoderado> obtenerApoderadoPorDNI(@PathVariable("dni_apoderado") int dni_apoderado){
     //   return this.srv_Apoderado.obtenerApoderadoPorDNI(dni_apoderado);
//    }
}