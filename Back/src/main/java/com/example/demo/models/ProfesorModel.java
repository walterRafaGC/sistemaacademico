package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "profesor")

public class ProfesorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String nombreprofesor;
    private int fechanacimientoprofesor;
    private int dniprofesor;
    private String codigoprofesor;

    public String getNombreprofesor() {
        return nombreprofesor;
    }

    public void setNombreprofesor(String nombreprofesor) {
        this.nombreprofesor = nombreprofesor;
    }

    public int getFechanacimientoprofesor() {
        return fechanacimientoprofesor;
    }

    public void setFechanacimientoprofesor(int fechanacimientoprofesor) {
        this.fechanacimientoprofesor = fechanacimientoprofesor;
    }

    public int getDniprofesor() {
        return dniprofesor;
    }

    public void setDniprofesor(int dniprofesor) {
        this.dniprofesor = dniprofesor;
    }

    public String getCodigoprofesor() {
        return codigoprofesor;
    }

    public void setCodigoprofesor(String codigoprofesor) {
        this.codigoprofesor = codigoprofesor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
