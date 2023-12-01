package sistemacademico.back.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sistemacademico.back.entities.Apoderado;
import sistemacademico.back.repositories.Rps_Apoderado;

@Service
public class Srv_Apoderado {
    Rps_Apoderado rps_Apoderado;

    @Autowired
    public Srv_Apoderado(Rps_Apoderado rps_Apoderado) {
        this.rps_Apoderado = rps_Apoderado;
    }

    public ArrayList<Apoderado> obtenerApoderado() {
        return (ArrayList<Apoderado>) rps_Apoderado.findAll();
    }

    public Apoderado guardarApoderado(Apoderado apoderado) {
        return rps_Apoderado.save(apoderado);
    }

    public Optional<Apoderado> obtenerApoderadoPorID(Long id_apoderado) {
        return rps_Apoderado.findById(id_apoderado);
    }

    public Optional<Apoderado> obtenerApoderadoPorDNI(int dni_apoderado) {
        return rps_Apoderado.findByDni_apoderado(dni_apoderado);
    }
}