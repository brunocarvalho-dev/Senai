/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dal;
import java.sql.*;

/**
 *
 * @author User
 */
public class ModuloConexao {
     public static Connection connector(){
        java.sql.Connection conexao = null;
        String driver = "com.mysql.cj.jdbc.Driver";
        String url ="jdbc:mysql://localhost:3306/usuarios";// usado em casa
        //String url ="jdbc:mysql://localhost:3306/usuario_login";// usado no senai
        String user = "root";
        String password = "";

        try{
        Class.forName(driver);
        conexao = DriverManager.getConnection(url,user,password);
        return conexao;
        }catch(Exception e){
            return null;
        }
     }
}
