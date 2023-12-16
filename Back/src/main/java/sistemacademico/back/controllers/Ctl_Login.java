package sistemacademico.back.controllers;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import sistemacademico.back.dto.LoginRequestDto;
import sistemacademico.back.services.Srv_Login;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:3000")
public class Ctl_Login {
    private final Srv_Login srv_Login;

    public Ctl_Login(Srv_Login srv_Login) {
        this.srv_Login = srv_Login;
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody LoginRequestDto requestDto) {
        Integer dni = requestDto.getDni();
        String contrasena = requestDto.getContrasena();

        Map<String, Object> response = srv_Login.login(dni, contrasena);

        return ResponseEntity.ok(response);
    }
}
