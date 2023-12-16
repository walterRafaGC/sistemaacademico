package sistemacademico.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "alumno")
public class Alumno {
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

    @Column(name = "numero_documento")
    private Integer numero_documento;

    @Column(name = "codigo")
    private String codigo;

    @Column(name = "colegio_procedencia")
    private String colegio_procedencia;

    @Column(name = "grado_academico")
    private String grado_academico;

    @Column(name = "certificados")
    private String certificados;

    @Column(name = "genero")
    private String genero;

    @Column(name = "nacionalidad")
    private String nacionalidad;

    @Column(name = "edad")
    private String edad;

    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "religion")
    private String religion;

    @Column(name = "habilidades")
    private String habilidades;

    @Column(name = "sangre")
    private String sangre;

    @Column(name = "alergias")
    private String alergias;

    @Column(name = "enfermedades_hereditarias")
    private String enfermedades_hereditarias;

    @Column(name = "enfermedades_cronicas")
    private String enfermedades_cronicas;

    public Alumno() {
    }

    public Alumno(Long id, String nombre, String apellido, String tipo_documento, Integer numero_documento,
            String codigo, String colegio_procedencia, String grado_academico, String certificados, String genero,
            String nacionalidad, String edad, String fecha_nacimiento, String direccion, String religion,
            String habilidades, String sangre, String alergias, String enfermedades_hereditarias,
            String enfermedades_cronicas) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.codigo = codigo;
        this.colegio_procedencia = colegio_procedencia;
        this.grado_academico = grado_academico;
        this.certificados = certificados;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.religion = religion;
        this.habilidades = habilidades;
        this.sangre = sangre;
        this.alergias = alergias;
        this.enfermedades_hereditarias = enfermedades_hereditarias;
        this.enfermedades_cronicas = enfermedades_cronicas;
    }

    public Alumno(String nombre, String apellido, String tipo_documento, Integer numero_documento,
            String codigo, String colegio_procedencia, String grado_academico, String certificados, String genero,
            String nacionalidad, String edad, String fecha_nacimiento, String direccion, String religion,
            String habilidades, String sangre, String alergias, String enfermedades_hereditarias,
            String enfermedades_cronicas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.codigo = codigo;
        this.colegio_procedencia = colegio_procedencia;
        this.grado_academico = grado_academico;
        this.certificados = certificados;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.religion = religion;
        this.habilidades = habilidades;
        this.sangre = sangre;
        this.alergias = alergias;
        this.enfermedades_hereditarias = enfermedades_hereditarias;
        this.enfermedades_cronicas = enfermedades_cronicas;
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

    public Integer getNumero_documento() {
        return this.numero_documento;
    }

    public void setNumero_documento(Integer numero_documento) {
        this.numero_documento = numero_documento;
    }

    public String getCodigo() {
        return this.codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getColegio_procedencia() {
        return this.colegio_procedencia;
    }

    public void setColegio_procedencia(String colegio_procedencia) {
        this.colegio_procedencia = colegio_procedencia;
    }

    public String getGrado_academico() {
        return this.grado_academico;
    }

    public void setGrado_academico(String grado_academico) {
        this.grado_academico = grado_academico;
    }

    public String getCertificados() {
        return this.certificados;
    }

    public void setCertificados(String certificados) {
        this.certificados = certificados;
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

    public String getEdad() {
        return this.edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getFecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getReligion() {
        return this.religion;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getHabilidades() {
        return this.habilidades;
    }

    public void setHabilidades(String habilidades) {
        this.habilidades = habilidades;
    }

    public String getSangre() {
        return this.sangre;
    }

    public void setSangre(String sangre) {
        this.sangre = sangre;
    }

    public String getAlergias() {
        return this.alergias;
    }

    public void setAlergias(String alergias) {
        this.alergias = alergias;
    }

    public String getEnfermedades_hereditarias() {
        return this.enfermedades_hereditarias;
    }

    public void setEnfermedades_hereditarias(String enfermedades_hereditarias) {
        this.enfermedades_hereditarias = enfermedades_hereditarias;
    }

    public String getEnfermedades_cronicas() {
        return this.enfermedades_cronicas;
    }

    public void setEnfermedades_cronicas(String enfermedades_cronicas) {
        this.enfermedades_cronicas = enfermedades_cronicas;
    }

}
