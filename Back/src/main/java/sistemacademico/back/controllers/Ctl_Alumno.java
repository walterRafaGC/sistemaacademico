package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.RegistroAlumnoPeticionDto;
import sistemacademico.back.entities.Alumno;
import sistemacademico.back.services.RegistroAlumnoService;
import sistemacademico.back.services.Srv_alumno;

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
@RequestMapping("/api/alumno")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_Alumno {

    Srv_alumno srv_alumno;
    private final RegistroAlumnoService registroAlumnoService;

    public Ctl_Alumno(Srv_alumno srv_alumno, RegistroAlumnoService registroAlumnoService) {
        this.srv_alumno = srv_alumno;
        this.registroAlumnoService = registroAlumnoService;
    }

    @GetMapping
    public ArrayList<Alumno> obtenerAlumno() {
        return srv_alumno.obtenerAlumno();
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Map<String, Object>> guardarAlumno(@RequestBody RegistroAlumnoPeticionDto alumno) {
        Map<String, String> errorMessages = registroAlumnoService.register(
                alumno.getNombre_alumno(),
                alumno.getApellido_alumno(),
                alumno.getTipo_documento_alumno(),
                alumno.getNumero_documento_alumno(),
                alumno.getCodigo_alumno(),
                alumno.getColegio_procedencia(),
                alumno.getGrado_academico_alumno(),
                alumno.getCertificados_alumno(),
                alumno.getGenero_alumno(),
                alumno.getNacionalidad_alumno(),
                alumno.getEdad_alumno(),
                alumno.getFecha_nacimiento_alumno(),
                alumno.getDireccion_alumno(),
                alumno.getReligion_alumno(),
                alumno.getHabilidades_alumno(),
                alumno.getSangre_alumno(),
                alumno.getAlergias_alumno(),
                alumno.getEnfermedades_hereditarias(),
                alumno.getEnfermedades_cronicas());
        Map<String, Object> response = new HashMap<>();
        response.put("success", errorMessages.isEmpty());
        response.put("errorMessages", errorMessages);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id_alumno}")
    public Optional<Alumno> obtenerAlumnoPorId(@PathVariable("id_alumno") Long id_alumno) {
        return this.srv_alumno.obtetenerAlumnoPorID(id_alumno);
    }
}