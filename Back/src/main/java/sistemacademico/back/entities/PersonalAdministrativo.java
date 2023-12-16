package sistemacademico.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "personal_administrativo")
public class PersonalAdministrativo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String Nombres;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "fecha_nacimiento")
    private String fecha_nacimiento;

    @Column(name = "genero")
    private String genero;

    @Column(name = "tipo_documento")
    private String tipo_documento;

    @Column(name = "dni")
    private Integer dni;

    @Column(name = "fotografia")
    private String fotografia;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "telefono")
    private String telefono;

    @Column(name = "email")
    private String email;

    @Column(name = "puesto")
    private String puesto;

    @Column(name = "fecha_inicio")
    private String fecha_inicio;

    @Column(name = "area")
    private String area;

    @Column(name = "salario")
    private Double salario;

    @Column(name = "tipo_contrato")
    private String tipo_contrato;

    @Column(name = "turno_horario")
    private String turno_horario;

    @Column(name="contrasena")
    private String contrasena;

    public PersonalAdministrativo() {
    }

    public PersonalAdministrativo(Long id, String Nombres, String apellido, String fecha_nacimiento, String genero,
            String tipo_documento, Integer dni, String fotografia, String direccion, String telefono,
            String email, String puesto, String fecha_inicio, String area, Double salario, String tipo_contrato,
            String turno_horario, String contrasena) {
        this.id = id;
        this.Nombres = Nombres;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.fotografia = fotografia;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.puesto = puesto;
        this.fecha_inicio = fecha_inicio;
        this.area = area;
        this.salario = salario;
        this.tipo_contrato = tipo_contrato;
        this.turno_horario = turno_horario;
        this.contrasena=contrasena;
    }

    public PersonalAdministrativo(String Nombres, String apellido, String fecha_nacimiento, String genero,
            String tipo_documento, Integer dni, String fotografia, String direccion, String telefono,
            String email, String puesto, String fecha_inicio, String area, Double salario, String tipo_contrato,
            String turno_horario, String contrasena) {

        this.Nombres = Nombres;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
        this.tipo_documento = tipo_documento;
        this.dni = dni;
        this.fotografia = fotografia;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.puesto = puesto;
        this.fecha_inicio = fecha_inicio;
        this.area = area;
        this.salario = salario;
        this.tipo_contrato = tipo_contrato;
        this.turno_horario = turno_horario;
        this.contrasena=contrasena;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombres() {
        return this.Nombres;
    }

    public void setNombres(String Nombres) {
        this.Nombres = Nombres;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFecha_nacimiento() {
        return this.fecha_nacimiento;
    }

    public void setFecha_nacimiento(String fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public String getGenero() {
        return this.genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getTipo_documento() {
        return this.tipo_documento;
    }

    public void setTipo_documento(String tipo_documento) {
        this.tipo_documento = tipo_documento;
    }

    public Integer getdni() {
        return this.dni;
    }

    public void setdni(Integer dni) {
        this.dni = dni;
    }

    public String getFotografia() {
        return this.fotografia;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return this.telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPuesto() {
        return this.puesto;
    }

    public void setPuesto(String puesto) {
        this.puesto = puesto;
    }

    public String getFecha_inicio() {
        return this.fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) {
        this.fecha_inicio = fecha_inicio;
    }

    public String getArea() {
        return this.area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Double getSalario() {
        return this.salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public String getTipo_contrato() {
        return this.tipo_contrato;
    }

    public void setTipo_contrato(String tipo_contrato) {
        this.tipo_contrato = tipo_contrato;
    }

    public String getTurno_horario() {
        return this.turno_horario;
    }

    public void setTurno_horario(String turno_horario) {
        this.turno_horario = turno_horario;
    }

    public String getContrasena(){
        return this.contrasena;
    }

    public void setContrasena(String contrasena){
        this.contrasena=contrasena;
    }
}