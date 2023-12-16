package sistemacademico.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="curso")
public class Curso {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id_curso;

    @Column(name="nombre")
    private String nombre;

    @Column(name="grado")
    private String grado;

    public Curso() {
    }

    public Curso(String nombre, String grado) {
        this.nombre = nombre;
        this.grado = grado;
    }

    public Curso(Integer id_curso, String nombre, String grado) {
        this.id_curso = id_curso;
        this.nombre = nombre;
        this.grado = grado;
    }

    public Integer getId_curso() {
        return this.id_curso;
    }

    public void setId_curso(Integer id_curso) {
        this.id_curso = id_curso;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getGrado() {
        return this.grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }
}