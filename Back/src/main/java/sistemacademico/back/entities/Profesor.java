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
    @Column(name = "id_profesor")
    private Long id_profesor;

    @Column(name = "nombre_profesor")
    private String nombre_profesor;

    @Column(name = "apellido_profesor")
    private String apellido_profesor;

    @Column(name = "tipo_documento_profesor")
    private String tipo_documento_profesor;

    @Column(name = "dni_profesor")
    private Integer dni_profesor;

    @Column(name = "telefono_profesor")
    private Integer telefono_profesor;

    @Column(name = "direccion_profesor")
    private String direccion_profesor;

    @Column(name = "correo_profesor")
    private String correo_profesor;

    @Column(name = "genero_profesor")
    private String genero_profesor;

    @Column(name = "nacionalidad_profesor")
    private String nacionalidad_profesor;

    @Column(name = "edad_profesor")
    private Integer edad_profesor;

    @Column(name = "fecha_nacimiento_profesor")
    private String fecha_nacimiento_profesor;

    @Column(name = "religion_profesor")
    private String religion_profesor;

    @Column(name = "grado_academico_profesor")
    private String grado_academico_profesor;

    @Column(name = "certificado_profesor")
    private String certificado_profesor;

    @Column(name = "cv_profesor")
    private String cv_profesor;

    @Column(name = "contrasena_profesor")
    private String contrasena_profesor;

    public Profesor() {
    }

    public Profesor(String nombre_profesor, String apellido_profesor, String tipo_documento_profesor,
            Integer dni_profesor, Integer telefono_profesor, String direccion_profesor, String correo_profesor,
            String genero_profesor, String nacionalidad_profesor, Integer edad_profesor,
            String fecha_nacimiento_profesor, String religion_profesor, String grado_academico_profesor,
            String certificado_profesor, String cv_profesor, String contrasena_profesor) {

        this.nombre_profesor = nombre_profesor;
        this.apellido_profesor = apellido_profesor;
        this.tipo_documento_profesor = tipo_documento_profesor;
        this.dni_profesor = dni_profesor;
        this.telefono_profesor = telefono_profesor;
        this.direccion_profesor = direccion_profesor;
        this.correo_profesor = correo_profesor;
        this.genero_profesor = genero_profesor;
        this.nacionalidad_profesor = nacionalidad_profesor;
        this.edad_profesor = edad_profesor;
        this.fecha_nacimiento_profesor = fecha_nacimiento_profesor;
        this.religion_profesor = religion_profesor;
        this.grado_academico_profesor = grado_academico_profesor;
        this.certificado_profesor = certificado_profesor;
        this.cv_profesor = cv_profesor;
        this.contrasena_profesor = contrasena_profesor;
    }

    public Profesor(Long id_profesor, String nombre_profesor, String apellido_profesor, String tipo_documento_profesor,
            Integer dni_profesor, Integer telefono_profesor, String direccion_profesor, String correo_profesor,
            String genero_profesor, String nacionalidad_profesor, Integer edad_profesor,
            String fecha_nacimiento_profesor, String religion_profesor, String grado_academico_profesor,
            String certificado_profesor, String cv_profesor, String contrasena_profesor) {
        this.id_profesor = id_profesor;
        this.nombre_profesor = nombre_profesor;
        this.apellido_profesor = apellido_profesor;
        this.tipo_documento_profesor = tipo_documento_profesor;
        this.dni_profesor = dni_profesor;
        this.telefono_profesor = telefono_profesor;
        this.direccion_profesor = direccion_profesor;
        this.correo_profesor = correo_profesor;
        this.genero_profesor = genero_profesor;
        this.nacionalidad_profesor = nacionalidad_profesor;
        this.edad_profesor = edad_profesor;
        this.fecha_nacimiento_profesor = fecha_nacimiento_profesor;
        this.religion_profesor = religion_profesor;
        this.grado_academico_profesor = grado_academico_profesor;
        this.certificado_profesor = certificado_profesor;
        this.cv_profesor = cv_profesor;
        this.contrasena_profesor = contrasena_profesor;
    }

    public Long getId_profesor() {
        return this.id_profesor;
    }

    public void setId_profesor(Long id_profesor) {
        this.id_profesor = id_profesor;
    }

    public String getNombre_profesor() {
        return this.nombre_profesor;
    }

    public void setNombre_profesor(String nombre_profesor) {
        this.nombre_profesor = nombre_profesor;
    }

    public String getApellido_profesor() {
        return this.apellido_profesor;
    }

    public void setApellido_profesor(String apellido_profesor) {
        this.apellido_profesor = apellido_profesor;
    }

    public String getTipo_documento_profesor() {
        return this.tipo_documento_profesor;
    }

    public void setTipo_documento_profesor(String tipo_documento_profesor) {
        this.tipo_documento_profesor = tipo_documento_profesor;
    }

    public Integer getDni_profesor() {
        return this.dni_profesor;
    }

    public void setDni_profesor(Integer dni_profesor) {
        this.dni_profesor = dni_profesor;
    }

    public Integer getTelefono_profesor() {
        return this.telefono_profesor;
    }

    public void setTelefono_profesor(Integer telefono_profesor) {
        this.telefono_profesor = telefono_profesor;
    }

    public String getDireccion_profesor() {
        return this.direccion_profesor;
    }

    public void setDireccion_profesor(String direccion_profesor) {
        this.direccion_profesor = direccion_profesor;
    }

    public String getCorreo_profesor() {
        return this.correo_profesor;
    }

    public void setCorreo_profesor(String correo_profesor) {
        this.correo_profesor = correo_profesor;
    }

    public String getGenero_profesor() {
        return this.genero_profesor;
    }

    public void setGenero_profesor(String genero_profesor) {
        this.genero_profesor = genero_profesor;
    }

    public String getNacionalidad_profesor() {
        return this.nacionalidad_profesor;
    }

    public void setNacionalidad_profesor(String nacionalidad_profesor) {
        this.nacionalidad_profesor = nacionalidad_profesor;
    }

    public Integer getEdad_profesor() {
        return this.edad_profesor;
    }

    public void setEdad_profesor(Integer edad_profesor) {
        this.edad_profesor = edad_profesor;
    }

    public String getFecha_nacimiento_profesor() {
        return this.fecha_nacimiento_profesor;
    }

    public void setFecha_nacimiento_profesor(String fecha_nacimiento_profesor) {
        this.fecha_nacimiento_profesor = fecha_nacimiento_profesor;
    }

    public String getReligion_profesor() {
        return this.religion_profesor;
    }

    public void setReligion_profesor(String religion_profesor) {
        this.religion_profesor = religion_profesor;
    }

    public String getGrado_academico_profesor() {
        return this.grado_academico_profesor;

    }

    public void setGrado_academico_profesor(String grado_academico_profesor) {
        this.grado_academico_profesor = grado_academico_profesor;
    }

    public String getCertificado_profesor() {
        return this.certificado_profesor;
    }

    public void setCertificado_profesor(String certificado_profesor) {
        this.certificado_profesor = certificado_profesor;
    }

    public String getCv_profesor() {
        return this.cv_profesor;
    }

    public void setCv_profesor(String cv_profesor) {
        this.cv_profesor = cv_profesor;
    }

    public String getContrasena_profesor() {
        return this.contrasena_profesor;
    }
    public void setContrasena_profesor(String contrasena_profesor) {
        this.contrasena_profesor = contrasena_profesor;
    }
}
