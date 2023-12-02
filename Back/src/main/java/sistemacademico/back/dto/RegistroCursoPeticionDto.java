package sistemacademico.back.dto;

public class RegistroCursoPeticionDto {

    private String nombre;
    private String grado;

    public RegistroCursoPeticionDto() {
    }

    public RegistroCursoPeticionDto(String nombre, String grado) {
        this.nombre = nombre;
        this.grado = grado;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getGrado() {
        return this.grado;
    }

    public void setGrado(String grado) {
        this.grado = grado;
    }

}
