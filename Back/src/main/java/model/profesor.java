public class profesor {

private String nombre;
private int edad;
private int dni;
private String codigo;

public profesor(){}
public profesor(String nombre, int edad, int dni, String codigo) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.codigo = codigo;
}

public String getNombre() {
    return nombre;
}
public void setNombre(String nombre) {
    this.nombre = nombre;
}
public int getEdad() {
    return edad;
}
public void setEdad(int edad) {
    this.edad = edad;
}
public int getDni() {
    return dni;
}
public void setDni(int dni) {
    this.dni = dni;
}
public String getCodigo() {
    return codigo;
}
public void setCodigo(String codigo) {
    this.codigo = codigo;
}



}


