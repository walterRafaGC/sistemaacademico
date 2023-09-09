package conexion;

import java.sql.DriverManager;
import java.sql.SQLException;
import org.springframework.boot.autoconfigure.amqp.RabbitProperties.Cache.Connection;

public class mysql {


    public static Connection getConexion(){
        String conexionUrl = "jdbc:sqlserver://usbdwuhbxcy3cjxt:EvhPH1RIMjnxdiG0S8vP@bjtuc0nkttom2clvwxqt-mysql.services.clever-cloud.com:3306/bjtuc0nkttom2clvwxqt;"
        +"database=bjtuc0nkttom2clvwxqt;"
        +"user=usbdwuhbxcy3cjxt;"
        +"password=EvhPH1RIMjnxdiG0S8vP;"
        +"loginTimeout=30;";

        try{
            Connection con = DriverManager.getConnection(conexionUrl);
            return con;
        }catch(SQLException ex){
            System.out.println(ex.toString());
            return null;
        }
    }

}