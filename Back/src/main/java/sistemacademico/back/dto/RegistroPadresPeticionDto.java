package sistemacademico.back.dto;

public class RegistroPadresPeticionDto {

    private String nombre_padre;
    private String tipo_documento_padre;
    private Integer numero_documento_padre;
    private String telefono_padre;
    private String correo_padre;
    private String nombre_madre;
    private String tipo_documento_madre;
    private Integer numero_documento_madre;
    private String telefono_madre;
    private String correo_madre;
    private Integer id_apoderado_padres;
    private Integer id_hijo_padres;

    public RegistroPadresPeticionDto() {
    }

    public RegistroPadresPeticionDto(String nombre_padre, String tipo_documento_padre, Integer numero_documento_padre, String telefono_padre, String correo_padre, String nombre_madre, String tipo_documento_madre, Integer numero_documento_madre, String telefono_madre, String correo_madre, Integer id_apoderado_padres, Integer id_hijo_padres) {
        this.nombre_padre = nombre_padre;
        this.tipo_documento_padre = tipo_documento_padre;
        this.numero_documento_padre = numero_documento_padre;
        this.telefono_padre = telefono_padre;
        this.correo_padre = correo_padre;
        this.nombre_madre = nombre_madre;
        this.tipo_documento_madre = tipo_documento_madre;
        this.numero_documento_madre = numero_documento_madre;
        this.telefono_madre = telefono_madre;
        this.correo_madre = correo_madre;
        this.id_apoderado_padres = id_apoderado_padres;
        this.id_hijo_padres = id_hijo_padres;
    }

    public String getNombre_padre() {
        return this.nombre_padre;
    }

    public void setNombre_padre(String nombre_padre) {
        this.nombre_padre = nombre_padre;
    }

    public String getTipo_documento_padre() {
        return this.tipo_documento_padre;
    }

    public void setTipo_documento_padre(String tipo_documento_padre) {
        this.tipo_documento_padre = tipo_documento_padre;
    }

    public Integer getNumero_documento_padre() {
        return this.numero_documento_padre;
    }

    public void setNumero_documento_padre(Integer numero_documento_padre) {
        this.numero_documento_padre = numero_documento_padre;
    }

    public String getTelefono_padre() {
        return this.telefono_padre;
    }

    public void setTelefono_padre(String telefono_padre) {
        this.telefono_padre = telefono_padre;
    }

    public String getCorreo_padre() {
        return this.correo_padre;
    }

    public void setCorreo_padre(String correo_padre) {
        this.correo_padre = correo_padre;
    }

    public String getNombre_madre() {
        return this.nombre_madre;
    }

    public void setNombre_madre(String nombre_madre) {
        this.nombre_madre = nombre_madre;
    }

    public String getTipo_documento_madre() {
        return this.tipo_documento_madre;
    }

    public void setTipo_documento_madre(String tipo_documento_madre) {
        this.tipo_documento_madre = tipo_documento_madre;
    }

    public Integer getNumero_documento_madre() {
        return this.numero_documento_madre;
    }

    public void setNumero_documento_madre(Integer numero_documento_madre) {
        this.numero_documento_madre = numero_documento_madre;
    }

    public String getTelefono_madre() {
        return this.telefono_madre;
    }

    public void setTelefono_madre(String telefono_madre) {
        this.telefono_madre = telefono_madre;
    }

    public String getCorreo_madre() {
        return this.correo_madre;
    }

    public void setCorreo_madre(String correo_madre) {
        this.correo_madre = correo_madre;
    }

    public Integer getId_apoderado_padres() {
        return this.id_apoderado_padres;
    }

    public void setId_apoderado_padres(Integer id_apoderado_padres) {
        this.id_apoderado_padres = id_apoderado_padres;
    }

    public Integer getId_hijo_padres() {
        return this.id_hijo_padres;
    }

    public void setId_hijo_padres(Integer id_hijo_padres) {
        this.id_hijo_padres = id_hijo_padres;
    }
}
