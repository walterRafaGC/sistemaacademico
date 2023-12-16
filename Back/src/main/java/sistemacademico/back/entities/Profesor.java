package sistemacademico.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "profesor")
public class Profesor {
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

    @Column(name = "genero")
    private String genero;

    @Column(name = "nacionalidad")
    private String nacionalidad;

    @Column(name = "edad")
    private Integer edad;

    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;

    @Column(name = "religion")
    private String religion;

    @Column(name = "grado_academico")
    private String grado_academico;

    @Column(name = "certificado")
    private String certificado;

    @Column(name = "cv")
    private String cv;

    @Column(name = "contrasena")
    private String contrasena;

    public Profesor() {
    }

    public Profesor(Long id, String nombre, String apellido, String tipo_documento, Integer dni, Integer telefono,
            String direccion, String correo, String genero, String nacionalidad, Integer edad, String fecha_nacimiento,
            String religion, String grado_academico, String certificado, String cv, String contrasena) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.religion = religion;
        this.grado_academico = grado_academico;
        this.certificado = certificado;
        this.cv = cv;
        this.contrasena = contrasena;
    }

    public Profesor(String nombre, String apellido, String tipo_documento, Integer dni, Integer telefono,
            String direccion, String correo, String genero, String nacionalidad, Integer edad, String fecha_nacimiento,
            String religion, String grado_academico, String certificado, String cv, String contrasena) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.telefono = telefono;
        this.direccion = direccion;
        this.correo = correo;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.religion = religion;
        this.grado_academico = grado_academico;
        this.certificado = certificado;
        this.cv = cv;
        this.contrasena = contrasena;
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

    public String getGenero() {
        return this.genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getNacionalidad() {
        return this.nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getFecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getReligion() {
        return this.religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getGrado_academico() {
        return this.grado_academico;
    }

    public void setGrado_academico(String grado_academico) {
        this.grado_academico = grado_academico;
    }

    public String getCertificado() {
        return this.certificado;
    }

    public void setCertificado(String certificado) {
        this.certificado = certificado;
    }

    public String getCv() {
        return this.cv;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public String getContrasena() {
        return this.contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

}
