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
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "tipo_documento")
    private String tipo_documento;

    @Column(name = "dni")
    private Integer dni;

    @Column(name = "telefono")
    private Integer telefono;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "correo")
    private String correo;

    @Column(name = "contrasena")
    private String contrasena;

    @Column(name = "id_hijos")
    private String id_hijos;

    public Apoderado() {
    }

    public Apoderado(Long id, String nombre, String apellido, String tipo_documento, Integer dni, Integer telefono,
            String direccion, String correo, String contrasena, String id_hijos) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
        this.id_hijos = id_hijos;
    }

    public Apoderado(String nombre, String apellido, String tipo_documento, Integer dni, Integer telefono,
            String direccion, String correo, String contrasena, String id_hijos) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.contrasena = contrasena;
        this.id_hijos = id_hijos;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTipo_documento() {
        return this.tipo_documento;
    }

    public void setTipo_documento(String tipo_documento) {
        this.tipo_documento = tipo_documento;
    }

    public Integer getDni() {
        return this.dni;
    }

    public void setDni(Integer dni) {
        this.dni = dni;
    }

    public Integer getTelefono() {
        return this.telefono;
    }

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCorreo() {
        return this.correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return this.contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getId_hijos() {
        return this.id_hijos;
    }

    public void setId_hijos(String id_hijos) {
        this.id_hijos = id_hijos;
    }

}