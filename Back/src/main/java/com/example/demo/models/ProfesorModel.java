package example.demo.models;

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

    public ProfesorModel() {

    }

    public ProfesorModel(String nombreprofesor, int fechanacimientoprofesor, int dniprofesor, String codigoprofesor) {
        this.nombreprofesor = nombreprofesor;
        this.fechanacimientoprofesor = fechanacimientoprofesor;
        this.dniprofesor = dniprofesor;
        this.codigoprofesor = codigoprofesor;
    }

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

}
