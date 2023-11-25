package sistemacademico.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "apoderado")
public class Apoderado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_apoderado")
    private Long id_apoderado;

    @Column(name = "nombre_apoderado")
    private String nombre_apoderado;

    @Column(name = "apellido_apoderado")
    private String apellido_apoderado;

    @Column(name = "tipo_documento_apoderado")
    private String tipo_documento_apoderado;

    @Column(name = "dni_apoderado")
    private Integer dni_apoderado;

    @Column(name = "telefono_apoderado")
    private Integer telefono_apoderado;

    @Column(name = "direccion_apoderado")
    private String direccion_apoderado;

    @Column(name = "correo_apoderado")
    private String correo_apoderado;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "id_hijo_apoderado")
    private String id_hijo_apoderado;

    public Apoderado() {
    }

    public Apoderado(Long id_apoderado, String nombre_apoderado, String apellido_apoderado, String tipo_documento_apoderado, Integer dni_apoderado, Integer telefono_apoderado, String direccion_apoderado, String correo_apoderado, String contrasena, String id_hijo_apoderado) {
        this.id_apoderado = id_apoderado;
        this.nombre_apoderado = nombre_apoderado;
        this.apellido_apoderado = apellido_apoderado;
        this.tipo_documento_apoderado = tipo_documento_apoderado;
        this.dni_apoderado = dni_apoderado;
        this.telefono_apoderado = telefono_apoderado;
        this.direccion_apoderado = direccion_apoderado;
        this.correo_apoderado = correo_apoderado;
        this.contrasena = contrasena;
        this.id_hijo_apoderado = id_hijo_apoderado;
    }
   
     public Apoderado(String nombre_apoderado, String apellido_apoderado, String tipo_documento_apoderado, Integer dni_apoderado, Integer telefono_apoderado, String direccion_apoderado, String correo_apoderado, String contrasena, String id_hijo_apoderado) {
        
        this.nombre_apoderado = nombre_apoderado;
        this.apellido_apoderado = apellido_apoderado;
        this.tipo_documento_apoderado = tipo_documento_apoderado;
        this.dni_apoderado = dni_apoderado;
        this.telefono_apoderado = telefono_apoderado;
        this.direccion_apoderado = direccion_apoderado;
        this.correo_apoderado = correo_apoderado;
        this.contrasena = contrasena;
        this.id_hijo_apoderado = id_hijo_apoderado;
    }

    public Long getId_apoderado() {
        return this.id_apoderado;
    }

    public void setId_apoderado(Long id_apoderado) {
        this.id_apoderado = id_apoderado;
    }

    public String getNombre_apoderado() {
        return this.nombre_apoderado;
    }

    public void setNombre_apoderado(String nombre_apoderado) {
        this.nombre_apoderado = nombre_apoderado;
    }

    public String getApellido_apoderado() {
        return this.apellido_apoderado;
    }

    public void setApellido_apoderado(String apellido_apoderado) {
        this.apellido_apoderado = apellido_apoderado;
    }

    public String getTipo_documento_apoderado() {
        return this.tipo_documento_apoderado;
    }

    public void setTipo_documento_apoderado(String tipo_documento_apoderado) {
        this.tipo_documento_apoderado = tipo_documento_apoderado;
    }

    public Integer getDni_apoderado() {
        return this.dni_apoderado;
    }

    public void setDni_apoderado(Integer dni_apoderado) {
        this.dni_apoderado = dni_apoderado;
    }

    public Integer getTelefono_apoderado() {
        return this.telefono_apoderado;
    }

    public void setTelefono_apoderado(Integer telefono_apoderado) {
        this.telefono_apoderado = telefono_apoderado;
    }

    public String getDireccion_apoderado() {
        return this.direccion_apoderado;
    }

    public void setDireccion_apoderado(String direccion_apoderado) {
        this.direccion_apoderado = direccion_apoderado;
    }

    public String getCorreo_apoderado() {
        return this.correo_apoderado;
    }

    public void setCorreo_apoderado(String correo_apoderado) {
        this.correo_apoderado = correo_apoderado;
    }

    public String getContrasena() {
        return this.contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getId_hijo_apoderado() {
        return this.id_hijo_apoderado;
    }

    public void setId_hijo_apoderado(String id_hijo_apoderado) {
        this.id_hijo_apoderado = id_hijo_apoderado;
    }
}