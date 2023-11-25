package sistemacademico.back.dto;

public class RegistroPersonalPeticionDto {

    private String Nombres_PersonalAdminis;
    private String Apellido;
    private String Fecha_Nacimiento;
    private String Genero;
    private String Tipo_Documento_PersonalAdministrativo;

    private Integer Numero_Identificacion;
    private String Fotografia;
    private String Direccion_Domicilio;
    private String Numero_Telefono;
    private String Email;
    private String Puesto_Cargo;
    private String Fecha_Inicio_Empleo;
    private String Departamento_Area;
    private Double Salario;
    private String Tipo_Contrato;
    private String Turno_Horario;

    public RegistroPersonalPeticionDto() {
    }


    public RegistroPersonalPeticionDto(String Nombres_PersonalAdminis, String Apellido, String Fecha_Nacimiento, String Genero, String Tipo_Documento_PersonalAdministrativo, Integer Numero_Identificacion, String Fotografia, String Direccion_Domicilio, String Numero_Telefono, String Email, String Puesto_Cargo, String Fecha_Inicio_Empleo, String Departamento_Area, Double Salario, String Tipo_Contrato, String Turno_Horario) {
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


    public String getNombres_PersonalAdminis() {
        return this.Nombres_PersonalAdminis;
    }

    public void setNombres_PersonalAdminis(String Nombres_PersonalAdminis) {
        this.Nombres_PersonalAdminis = Nombres_PersonalAdminis;
    }

    public String getApellido() {
        return this.Apellido;
    }

    public void setApellido(String Apellido) {
        this.Apellido = Apellido;
    }

    public String getFecha_Nacimiento() {
        return this.Fecha_Nacimiento;
    }

    public void setFecha_Nacimiento(String Fecha_Nacimiento) {
        this.Fecha_Nacimiento = Fecha_Nacimiento;
    }

    public String getGenero() {
        return this.Genero;
    }

    public void setGenero(String Genero) {
        this.Genero = Genero;
    }

    public String getTipo_Documento_PersonalAdministrativo() {
        return this.Tipo_Documento_PersonalAdministrativo;
    }

    public void setTipo_Documento_PersonalAdministrativo(String Tipo_Documento_PersonalAdministrativo) {
        this.Tipo_Documento_PersonalAdministrativo = Tipo_Documento_PersonalAdministrativo;
    }

    public Integer getNumero_Identificacion() {
        return this.Numero_Identificacion;
    }

    public void setNumero_Identificacion(Integer Numero_Identificacion) {
        this.Numero_Identificacion = Numero_Identificacion;
    }

    public String getFotografia() {
        return this.Fotografia;
    }

    public void setFotografia(String Fotografia) {
        this.Fotografia = Fotografia;
    }

    public String getDireccion_Domicilio() {
        return this.Direccion_Domicilio;
    }

    public void setDireccion_Domicilio(String Direccion_Domicilio) {
        this.Direccion_Domicilio = Direccion_Domicilio;
    }

    public String getNumero_Telefono() {
        return this.Numero_Telefono;
    }

    public void setNumero_Telefono(String Numero_Telefono) {
        this.Numero_Telefono = Numero_Telefono;
    }

    public String getEmail() {
        return this.Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getPuesto_Cargo() {
        return this.Puesto_Cargo;
    }

    public void setPuesto_Cargo(String Puesto_Cargo) {
        this.Puesto_Cargo = Puesto_Cargo;
    }

    public String getFecha_Inicio_Empleo() {
        return this.Fecha_Inicio_Empleo;
    }

    public void setFecha_Inicio_Empleo(String Fecha_Inicio_Empleo) {
        this.Fecha_Inicio_Empleo = Fecha_Inicio_Empleo;
    }

    public String getDepartamento_Area() {
        return this.Departamento_Area;
    }

    public void setDepartamento_Area(String Departamento_Area) {
        this.Departamento_Area = Departamento_Area;
    }

    public Double getSalario() {
        return this.Salario;
    }

    public void setSalario(Double Salario) {
        this.Salario = Salario;
    }

    public String getTipo_Contrato() {
        return this.Tipo_Contrato;
    }

    public void setTipo_Contrato(String Tipo_Contrato) {
        this.Tipo_Contrato = Tipo_Contrato;
    }

    public String getTurno_Horario() {
        return this.Turno_Horario;
    }

    public void setTurno_Horario(String Turno_Horario) {
        this.Turno_Horario = Turno_Horario;
    }

}