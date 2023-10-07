package com.example.demo.models;

import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)    
	private Long id;

	private String ApellidosNombresApoderado;
    private Double TipoDocumento;
    private int CodigoDocumento;
    private int NumTelefono;
    private String DireccionApoderado;
    private String CorreoElectronico;
    private String InfoColegioProcedencia;
    private String GradoAcadAnterior;
    private String DocumenCertificadoEstu;
    private double GeneroAlumno;
    private String NacionalidadAlumno;
    private int EdadAlumno;
    private Time FechaNacimiento;
    private String DomicilioAlumno;
    private String ReligionAlumno;
    private String TipoSangreal;
    private String AlergiasAlumno;
    private String AntecedenteEnferHereditaria;
    private String AntecendenteEnferCronicas;
    private String Password;
    private String RepetirContraseña;


	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getApellidosNombresApoderado() {
		return this.ApellidosNombresApoderado;
	}

	public void setApellidosNombresApoderado(String ApellidosNombresApoderado) {
		this.ApellidosNombresApoderado = ApellidosNombresApoderado;
	}

	public Double getTipoDocumento() {
		return this.TipoDocumento;
	}

	public void setTipoDocumento(Double TipoDocumento) {
		this.TipoDocumento = TipoDocumento;
	}

	public int getCodigoDocumento() {
		return this.CodigoDocumento;
	}

	public void setCodigoDocumento(int CodigoDocumento) {
		this.CodigoDocumento = CodigoDocumento;
	}

	public int getNumTelefono() {
		return this.NumTelefono;
	}

	public void setNumTelefono(int NumTelefono) {
		this.NumTelefono = NumTelefono;
	}

	public String getDireccionApoderado() {
		return this.DireccionApoderado;
	}

	public void setDireccionApoderado(String DireccionApoderado) {
		this.DireccionApoderado = DireccionApoderado;
	}

	public String getCorreoElectronico() {
		return this.CorreoElectronico;
	}

	public void setCorreoElectronico(String CorreoElectronico) {
		this.CorreoElectronico = CorreoElectronico;
	}

	public String getInfoColegioProcedencia() {
		return this.InfoColegioProcedencia;
	}

	public void setInfoColegioProcedencia(String InfoColegioProcedencia) {
		this.InfoColegioProcedencia = InfoColegioProcedencia;
	}

	public String getGradoAcadAnterior() {
		return this.GradoAcadAnterior;
	}

	public void setGradoAcadAnterior(String GradoAcadAnterior) {
		this.GradoAcadAnterior = GradoAcadAnterior;
	}

	public String getDocumenCertificadoEstu() {
		return this.DocumenCertificadoEstu;
	}

	public void setDocumenCertificadoEstu(String DocumenCertificadoEstu) {
		this.DocumenCertificadoEstu = DocumenCertificadoEstu;
	}

	public double getGeneroAlumno() {
		return this.GeneroAlumno;
	}

	public void setGeneroAlumno(double GeneroAlumno) {
		this.GeneroAlumno = GeneroAlumno;
	}

	public String getNacionalidadAlumno() {
		return this.NacionalidadAlumno;
	}

	public void setNacionalidadAlumno(String NacionalidadAlumno) {
		this.NacionalidadAlumno = NacionalidadAlumno;
	}

	public int getEdadAlumno() {
		return this.EdadAlumno;
	}

	public void setEdadAlumno(int EdadAlumno) {
		this.EdadAlumno = EdadAlumno;
	}

	public Time getFechaNacimiento() {
		return this.FechaNacimiento;
	}

	public void setFechaNacimiento(Time FechaNacimiento) {
		this.FechaNacimiento = FechaNacimiento;
	}

	public String getDomicilioAlumno() {
		return this.DomicilioAlumno;
	}

	public void setDomicilioAlumno(String DomicilioAlumno) {
		this.DomicilioAlumno = DomicilioAlumno;
	}

	public String getReligionAlumno() {
		return this.ReligionAlumno;
	}

	public void setReligionAlumno(String ReligionAlumno) {
		this.ReligionAlumno = ReligionAlumno;
	}

	public String getTipoSangreal() {
		return this.TipoSangreal;
	}

	public void setTipoSangreal(String TipoSangreal) {
		this.TipoSangreal = TipoSangreal;
	}

	public String getAlergiasAlumno() {
		return this.AlergiasAlumno;
	}

	public void setAlergiasAlumno(String AlergiasAlumno) {
		this.AlergiasAlumno = AlergiasAlumno;
	}

	public String getAntecedenteEnferHereditaria() {
		return this.AntecedenteEnferHereditaria;
	}

	public void setAntecedenteEnferHereditaria(String AntecedenteEnferHereditaria) {
		this.AntecedenteEnferHereditaria = AntecedenteEnferHereditaria;
	}

	public String getAntecendenteEnferCronicas() {
		return this.AntecendenteEnferCronicas;
	}

	public void setAntecendenteEnferCronicas(String AntecendenteEnferCronicas) {
		this.AntecendenteEnferCronicas = AntecendenteEnferCronicas;
	}

	public String getPassword() {
		return this.Password;
	}

	public void setPassword(String Password) {
		this.Password = Password;
	}

	public String getRepetirContraseñA() {
		return this.RepetirContraseña;
	}

	public void setRepetirContraseñA(String RepetirContraseña) {
		this.RepetirContraseña = RepetirContraseña;
	}

	


    }



    

