package sistemacademico.back.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.RegistroPadresPeticionDto;
import sistemacademico.back.entities.Padres;
import sistemacademico.back.services.RegistroPadreService;
import sistemacademico.back.services.Srv_Padres;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/padres")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_Padres {

    Srv_Padres srv_Padres;
    private final RegistroPadreService registroPadreService;

    public Ctl_Padres(Srv_Padres srv_Padres, RegistroPadreService registroPadreService) {
        this.registroPadreService = registroPadreService;
        this.srv_Padres = srv_Padres;
    }

    @GetMapping()
    public ArrayList<Padres> obtenerPadres() {
        return srv_Padres.obtenerPadres();
    }

    @PostMapping(path = "/save")
    public ResponseEntity<Map<String, Object>> guardarPadres(@RequestBody RegistroPadresPeticionDto padre) {
        Map<String, String> errorMessages = registroPadreService.register(
                padre.getNombre_padre(),
                padre.getTipo_documento_padre(),
                padre.getNumero_documento_padre(),
                padre.getTelefono_padre(),
                padre.getCorreo_padre(),
                padre.getNombre_madre(),
                padre.getTipo_documento_madre(),
                padre.getNumero_documento_madre(),
                padre.getTelefono_madre(),
                padre.getCorreo_madre(),
                padre.getId_apoderado_padres(),
                padre.getId_hijo_padres());
        Map<String, Object> response = new HashMap<>();
        response.put("success", errorMessages.isEmpty());
        response.put("errorMessages", errorMessages);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(path = "/{id_padres}")
    public Optional<Padres> obtenerPadrePorID(@PathVariable("id_padres") Long id_padres) {
        return this.srv_Padres.obtenerPadrePorID(id_padres);
    }
}
