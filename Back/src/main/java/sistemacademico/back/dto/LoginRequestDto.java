package sistemacademico.back.dto;

/**
 * LoginRequestDto
 */
public class LoginRequestDto {
    private Integer dni;
    private String contrasena;
    

    public LoginRequestDto() {
    }


    public LoginRequestDto(Integer dni, String contrasena) {
        this.dni = dni;
        this.contrasena = contrasena;
    }


    public Integer getDni() {
        return this.dni;
    }

    public void setDni(Integer dni) {
        this.dni = dni;
    }

    public String getContrasena() {
        return this.contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

}