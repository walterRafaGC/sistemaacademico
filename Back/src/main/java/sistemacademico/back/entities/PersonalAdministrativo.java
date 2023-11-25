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
    @Column(name = "id_Personal_administrativo")
    private Long id_PersonalAdministrativo;

    @Column(name = "Nombres_Personal_adminis")
    private String Nombres_PersonalAdminis;

    @Column(name = "Apellidos")
    private String Apellido;

    @Column(name = "Fecha_Nacimiento")
    private String Fecha_Nacimiento;

    @Column(name = "Genero")
    private String Genero;

    @Column(name = "Tipo_Documento_Personal_administrativo")
    private String Tipo_Documento_PersonalAdministrativo;

    @Column(name = "Numero_Identificacion")
    private Integer Numero_Identificacion;

    @Column(name = "Fotografia")
    private String Fotografia;

    @Column(name = "Direccion_Domicilio")
    private String Direccion_Domicilio;

    @Column(name = "Numero_Telefono")
    private String Numero_Telefono;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Puesto_Cargo")
    private String Puesto_Cargo;

    @Column(name = "Fecha_Inicio_Empleo")
    private String Fecha_Inicio_Empleo;

    @Column(name = "Departamento_Area")
    private String Departamento_Area;

    @Column(name = "Salario")
    private Double Salario;

    @Column(name = "Tipo_Contrato")
    private String Tipo_Contrato;

    @Column(name = "Turno_Horario")
    private String Turno_Horario;

    public PersonalAdministrativo() {
    }

    public PersonalAdministrativo(String Nombres_PersonalAdminis, String Apellido, String Fecha_Nacimiento,
            String Genero, String Tipo_Documento_PersonalAdministrativo, Integer Numero_Identificacion,
            String Fotografia, String Direccion_Domicilio, String Numero_Telefono, String Email, String Puesto_Cargo,
            String Fecha_Inicio_Empleo, String Departamento_Area, Double Salario, String Tipo_Contrato,
            String Turno_Horario) {
        this.Nombres_PersonalAdminis = Nombres_PersonalAdminis;
        this.Apellido = Apellido;
        this.Fecha_Nacimiento = Fecha_Nacimiento;
        this.Genero = Genero;
        this.Tipo_Documento_PersonalAdministrativo = Tipo_Documento_PersonalAdministrativo;
        this.Numero_Identificacion = Numero_Identificacion;
        this.Fotografia = Fotografia;
        this.Direccion_Domicilio = Direccion_Domicilio;
        this.Numero_Telefono = Numero_Telefono;
        this.Email = Email;
        this.Puesto_Cargo = Puesto_Cargo;
        this.Fecha_Inicio_Empleo = Fecha_Inicio_Empleo;
        this.Departamento_Area = Departamento_Area;
        this.Salario = Salario;
        this.Tipo_Contrato = Tipo_Contrato;
        this.Turno_Horario = Turno_Horario;
    }

    public PersonalAdministrativo(Long id_PersonalAdministrativo, String Nombres_PersonalAdminis, String Apellido,
            String Fecha_Nacimiento, String Genero, String Tipo_Documento_PersonalAdministrativo,
            Integer Numero_Identificacion, String Fotografia, String Direccion_Domicilio, String Numero_Telefono,
            String Email, String Puesto_Cargo, String Fecha_Inicio_Empleo, String Departamento_Area, Double Salario,
            String Tipo_Contrato, String Turno_Horario) {
        this.id_PersonalAdministrativo = id_PersonalAdministrativo;
        this.Nombres_PersonalAdminis = Nombres_PersonalAdminis;
        this.Apellido = Apellido;
        this.Fecha_Nacimiento = Fecha_Nacimiento;
        this.Genero = Genero;
        this.Tipo_Documento_PersonalAdministrativo = Tipo_Documento_PersonalAdministrativo;
        this.Numero_Identificacion = Numero_Identificacion;
        this.Fotografia = Fotografia;
        this.Direccion_Domicilio = Direccion_Domicilio;
        this.Numero_Telefono = Numero_Telefono;
        this.Email = Email;
        this.Puesto_Cargo = Puesto_Cargo;
        this.Fecha_Inicio_Empleo = Fecha_Inicio_Empleo;
        this.Departamento_Area = Departamento_Area;
        this.Salario = Salario;
        this.Tipo_Contrato = Tipo_Contrato;
        this.Turno_Horario = Turno_Horario;
    }

    public Long getId_PersonalAdministrativo() {
        return id_PersonalAdministrativo;
    }

    public void setId_PersonalAdministrativo(Long id_PersonalAdministrativo) {
        this.id_PersonalAdministrativo = id_PersonalAdministrativo;
    }

    public String getNombres_PersonalAdminis() {
        return Nombres_PersonalAdminis;
    }

    public void setNombres_PersonalAdminis(String nombres_PersonalAdminis) {
        Nombres_PersonalAdminis = nombres_PersonalAdminis;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getFecha_Nacimiento() {
        return Fecha_Nacimiento;
    }

    public void setFecha_Nacimiento(String fecha_Nacimiento) {
        Fecha_Nacimiento = fecha_Nacimiento;
    }

    public String getGenero() {
        return Genero;
    }

    public void setGenero(String genero) {
        Genero = genero;
    }

    public String getTipo_Documento_PersonalAdministrativo() {
        return Tipo_Documento_PersonalAdministrativo;
    }

    public void setTipo_Documento_PersonalAdministrativo(String tipo_Documento_PersonalAdministrativo) {
        Tipo_Documento_PersonalAdministrativo = tipo_Documento_PersonalAdministrativo;
    }

    public Integer getNumero_Identificacion() {
        return Numero_Identificacion;
    }

    public void setNumero_Identificacion(Integer numero_Identificacion) {
        Numero_Identificacion = numero_Identificacion;
    }

    public String getFotografia() {
        return Fotografia;
    }

    public void setFotografia(String fotografia) {
        Fotografia = fotografia;
    }

    public String getDireccion_Domicilio() {
        return Direccion_Domicilio;
    }

    public void setDireccion_Domicilio(String direccion_Domicilio) {
        Direccion_Domicilio = direccion_Domicilio;
    }

    public String getNumero_Telefono() {
        return Numero_Telefono;
    }

    public void setNumero_Telefono(String numero_Telefono) {
        Numero_Telefono = numero_Telefono;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPuesto_Cargo() {
        return Puesto_Cargo;
    }

    public void setPuesto_Cargo(String puesto_Cargo) {
        Puesto_Cargo = puesto_Cargo;
    }

    public String getFecha_Inicio_Empleo() {
        return Fecha_Inicio_Empleo;
    }

    public void setFecha_Inicio_Empleo(String fecha_Inicio_Empleo) {
        Fecha_Inicio_Empleo = fecha_Inicio_Empleo;
    }

    public String getDepartamento_Area() {
        return Departamento_Area;
    }

    public void setDepartamento_Area(String departamento_Area) {
        Departamento_Area = departamento_Area;
    }

    public Double getSalario() {
        return Salario;
    }

    public void setSalario(Double salario) {
        Salario = salario;
    }

    public String getTipo_Contrato() {
        return Tipo_Contrato;
    }

    public void setTipo_Contrato(String tipo_Contrato) {
        Tipo_Contrato = tipo_Contrato;
    }

    public String getTurno_Horario() {
        return Turno_Horario;
    }

    public void setTurno_Horario(String turno_Horario) {
        Turno_Horario = turno_Horario;
    }
}