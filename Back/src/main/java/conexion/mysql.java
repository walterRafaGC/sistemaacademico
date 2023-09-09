package conexion;

import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.boot.autoconfigure.cassandra.Connection;

public class mysql {

    public static void main(String[] args) {
        

    }

    public static void getConnection() throws SQLException{
        Connection c;
        String database = "bjtuc0nkttom2clvwxqt";
        String user = "usbdwuhbxcy3cjxt";
        String password = "usbdwuhbxcy3cjxt";
        String query = "SELECT * FROM";
        String host = "bjtuc0nkttom2clvwxqt-mysql.services.clever-cloud.com";
        int port = 3306;

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }catch(Exception e){
            System.out.println("Libreria no encontrada: "+ e.getMessage());
        }
        String url = String.format("jdbc:mysql://%s", host);
        c = DriverManager.getConnection("jdbc:mysql://", user, password);
    }

}