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
    @Column(name = "id_alumno")
    private Long id_alumno;

    @Column(name = "nombre_alumno")
    private String nombre_alumno;

    @Column(name = "apellido_alumno")
    private String apellido_alumno;

    @Column(name = "tipo_documento_alumno")
    private String tipo_documento_alumno;

    @Column(name = "numero_documento_alumno")
    private Integer numero_documento_alumno;

    @Column(name = "codigo_alumno")
    private String codigo_alumno;

    @Column(name = "colegio_procedencia")
    private String colegio_procedencia;

    @Column(name = "grado_academico_alumno")
    private String grado_academico_alumno;

    @Column(name = "certificados_alumno")
    private String certificados_alumno;

    @Column(name = "genero_alumno")
    private String genero_alumno;

    @Column(name = "nacionalidad_alumno")
    private String nacionalidad_alumno;

    @Column(name = "edad_alumno")
    private String edad_alumno;

    @Column(name = "fecha_nacimiento_alumno")
    private String fecha_nacimiento_alumno;

    @Column(name = "direccion_alumno")
    private String direccion_alumno;

    @Column(name = "religion_alumno")
    private String religion_alumno;

    @Column(name = "habilidades_alumno")
    private String habilidades_alumno;

    @Column(name = "sangre_alumno")
    private String sangre_alumno;

    @Column(name = "alergias_alumno")
    private String alergias_alumno;

    @Column(name = "enfermedades_hereditarias")
    private String enfermedades_hereditarias;

    @Column(name = "enfermedades_cronicas")
    private String enfermedades_cronicas;


   public Alumno() {
    }


    public Alumno(Long id_alumno, String nombre_alumno, String apellido_alumno, String tipo_documento_alumno, Integer numero_documento_alumno, String codigo_alumno, String colegio_procedencia, String grado_academico_alumno, String certificados_alumno, String genero_alumno, String nacionalidad_alumno, String edad_alumno, String fecha_nacimiento_alumno, String direccion_alumno, String religion_alumno, String habilidades_alumno, String sangre_alumno, String alergias_alumno, String enfermedades_hereditarias, String enfermedades_cronicas) {
        this.id_alumno = id_alumno;
        this.nombre_alumno = nombre_alumno;
        this.apellido_alumno = apellido_alumno;
        this.tipo_documento_alumno = tipo_documento_alumno;
        this.numero_documento_alumno = numero_documento_alumno;
        this.codigo_alumno = codigo_alumno;
        this.colegio_procedencia = colegio_procedencia;
        this.grado_academico_alumno = grado_academico_alumno;
        this.certificados_alumno = certificados_alumno;
        this.genero_alumno = genero_alumno;
        this.nacionalidad_alumno = nacionalidad_alumno;
        this.edad_alumno = edad_alumno;
        this.fecha_nacimiento_alumno = fecha_nacimiento_alumno;
        this.direccion_alumno = direccion_alumno;
        this.religion_alumno = religion_alumno;
        this.habilidades_alumno = habilidades_alumno;
        this.sangre_alumno = sangre_alumno;
        this.alergias_alumno = alergias_alumno;
        this.enfermedades_hereditarias = enfermedades_hereditarias;
        this.enfermedades_cronicas = enfermedades_cronicas;
    }
   
public Alumno(String nombre_alumno, String apellido_alumno, String tipo_documento_alumno, Integer numero_documento_alumno, String codigo_alumno, String colegio_procedencia, String grado_academico_alumno, String certificados_alumno, String genero_alumno, String nacionalidad_alumno, String edad_alumno, String fecha_nacimiento_alumno, String direccion_alumno, String religion_alumno, String habilidades_alumno, String sangre_alumno, String alergias_alumno, String enfermedades_hereditarias, String enfermedades_cronicas) {
      
        this.nombre_alumno = nombre_alumno;
        this.apellido_alumno = apellido_alumno;
        this.tipo_documento_alumno = tipo_documento_alumno;
        this.numero_documento_alumno = numero_documento_alumno;
        this.codigo_alumno = codigo_alumno;
        this.colegio_procedencia = colegio_procedencia;
        this.grado_academico_alumno = grado_academico_alumno;
        this.certificados_alumno = certificados_alumno;
        this.genero_alumno = genero_alumno;
        this.nacionalidad_alumno = nacionalidad_alumno;
        this.edad_alumno = edad_alumno;
        this.fecha_nacimiento_alumno = fecha_nacimiento_alumno;
        this.direccion_alumno = direccion_alumno;
        this.religion_alumno = religion_alumno;
        this.habilidades_alumno = habilidades_alumno;
        this.sangre_alumno = sangre_alumno;
        this.alergias_alumno = alergias_alumno;
        this.enfermedades_hereditarias = enfermedades_hereditarias;
        this.enfermedades_cronicas = enfermedades_cronicas;
    }
   


    public Long getId_alumno() {
        return this.id_alumno;
    }

    public void setId_alumno(Long id_alumno) {
        this.id_alumno = id_alumno;
    }

    public String getNombre_alumno() {
        return this.nombre_alumno;
    }

    public void setNombre_alumno(String nombre_alumno) {
        this.nombre_alumno = nombre_alumno;
    }

    public String getApellido_alumno() {
        return this.apellido_alumno;
    }

    public void setApellido_alumno(String apellido_alumno) {
        this.apellido_alumno = apellido_alumno;
    }

    public String getTipo_documento_alumno() {
        return this.tipo_documento_alumno;
    }

    public void setTipo_documento_alumno(String tipo_documento_alumno) {
        this.tipo_documento_alumno = tipo_documento_alumno;
    }

    public Integer getNumero_documento_alumno() {
        return this.numero_documento_alumno;
    }

    public void setNumero_documento_alumno(Integer numero_documento_alumno) {
        this.numero_documento_alumno = numero_documento_alumno;
    }

    public String getCodigo_alumno() {
        return this.codigo_alumno;
    }

    public void setCodigo_alumno(String codigo_alumno) {
        this.codigo_alumno = codigo_alumno;
    }

    public String getColegio_procedencia() {
        return this.colegio_procedencia;
    }

    public void setColegio_procedencia(String colegio_procedencia) {
        this.colegio_procedencia = colegio_procedencia;
    }

    public String getGrado_academico_alumno() {
        return this.grado_academico_alumno;
    }

    public void setGrado_academico_alumno(String grado_academico_alumno) {
        this.grado_academico_alumno = grado_academico_alumno;
    }

    public String getCertificados_alumno() {
        return this.certificados_alumno;
    }

    public void setCertificados_alumno(String certificados_alumno) {
        this.certificados_alumno = certificados_alumno;
    }

    public String getGenero_alumno() {
        return this.genero_alumno;
    }

    public void setGenero_alumno(String genero_alumno) {
        this.genero_alumno = genero_alumno;
    }

    public String getNacionalidad_alumno() {
        return this.nacionalidad_alumno;
    }

    public void setNacionalidad_alumno(String nacionalidad_alumno) {
        this.nacionalidad_alumno = nacionalidad_alumno;
    }

    public String getEdad_alumno() {
        return this.edad_alumno;
    }

    public void setEdad_alumno(String edad_alumno) {
        this.edad_alumno = edad_alumno;
    }

    public String getFecha_nacimiento_alumno() {
        return this.fecha_nacimiento_alumno;
    }

    public void setFecha_nacimiento_alumno(String fecha_nacimiento_alumno) {
        this.fecha_nacimiento_alumno = fecha_nacimiento_alumno;
    }

    public String getDireccion_alumno() {
        return this.direccion_alumno;
    }

    public void setDireccion_alumno(String direccion_alumno) {
        this.direccion_alumno = direccion_alumno;
    }

    public String getReligion_alumno() {
        return this.religion_alumno;
    }

    public void setReligion_alumno(String religion_alumno) {
        this.religion_alumno = religion_alumno;
    }

    public String getHabilidades_alumno() {
        return this.habilidades_alumno;
    }

    public void setHabilidades_alumno(String hablidades_alumno) {
        this.habilidades_alumno = hablidades_alumno;
    }

    public String getSangre_alumno() {
        return this.sangre_alumno;
    }

    public void setSangre_alumno(String sangre_alumno) {
        this.sangre_alumno = sangre_alumno;
    }

    public String getAlergias_alumno() {
        return this.alergias_alumno;
    }

    public void setAlergias_alumno(String alergias_alumno) {
        this.alergias_alumno = alergias_alumno;
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
