package sistemacademico.back.controllers;

import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.RegistroPersonalPeticionDto;
import sistemacademico.back.entities.PersonalAdministrativo;
import sistemacademico.back.services.RegistroPersonalService;
import sistemacademico.back.services.Srv_PersonalAdministrativo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/personalAdministrativo")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_PersonalAdministrativo {

    Srv_PersonalAdministrativo srv_PersonalAdministrativo;
    private final RegistroPersonalService registroPersonalService;

    @Autowired
    public Ctl_PersonalAdministrativo(Srv_PersonalAdministrativo srv_PersonalAdministrativo,
            RegistroPersonalService registroPersonalService) {
        this.srv_PersonalAdministrativo = srv_PersonalAdministrativo;
        this.registroPersonalService = registroPersonalService;
    }
    @GetMapping()
    public ArrayList<PersonalAdministrativo> obtenerPersonal(){
        return srv_PersonalAdministrativo.obtenerPersonal();
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Map<String, Object>> guardarPersonal(
            @RequestBody RegistroPersonalPeticionDto personalAdministrativo) {
        Map<String, String> errorMessages = registroPersonalService.register(
                personalAdministrativo.getNombres_PersonalAdminis(),
                personalAdministrativo.getApellido(),
                personalAdministrativo.getFecha_Nacimiento(),
                personalAdministrativo.getGenero(),
                personalAdministrativo.getTipo_Documento_PersonalAdministrativo(),
                personalAdministrativo.getNumero_Identificacion(),
                personalAdministrativo.getFotografia(),
                personalAdministrativo.getDireccion_Domicilio(),
                personalAdministrativo.getNumero_Telefono(),
                personalAdministrativo.getEmail(),
                personalAdministrativo.getPuesto_Cargo(),
                personalAdministrativo.getFecha_Inicio_Empleo(),
                personalAdministrativo.getDepartamento_Area(),
                personalAdministrativo.getSalario(),
                personalAdministrativo.getTipo_Contrato(),
                personalAdministrativo.getTurno_Horario());
        Map<String, Object> response = new HashMap<>();
        response.put("success", errorMessages.isEmpty());
        response.put("errorMessages", errorMessages);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id_PersonalAdministrativo}")
    public Optional<PersonalAdministrativo> obtenerPersonalPorID(
            @PathVariable("id_PersonalAdministrativo") Long id_PersonalAdministrativo) {
        return this.srv_PersonalAdministrativo.obtenerPersonalPorID(id_PersonalAdministrativo);
    }

    @GetMapping(path = "/login/{Numero_Identificacion}")
    public Optional<PersonalAdministrativo> obtenerPersonalPorDNI (@PathVariable("Numero_Identificacion") int Numero_Identificacion){
        return this.srv_PersonalAdministrativo.obtenerPersonalPorDNI(Numero_Identificacion);
    }
}