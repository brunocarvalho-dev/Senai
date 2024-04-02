package dal;
import java.sql.*;

public class ModuloConexcao {
    public static Connection connector(){
        java.sql.Connection conexcao = null;
        String driver = "com.mysql.cj.jdbc.Driver";
        String url ="jdbc:mysql://localhost:3306/usuarios";
        String user = "root";
        String password = "";

        try{
        Class.forName(driver);
        conexcao = DriverManager.getConnection(url,user,password);
        return conexcao;
        }catch(Exception e){
            return null;
        }
    }
}
