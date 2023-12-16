package sistemacademico.back.services;

import java.util.Map;

/**
 * Srv_Login
 */
public interface Srv_Login {

    Map<String, Object> login(Integer dni, String password); 
}