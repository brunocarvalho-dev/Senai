/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

/**
 *
 * @author User
 */
public class Validation_Nome_Email_Tel_Endereco {

    private String nome;
    private boolean nome_valid;
    private String email;
    private boolean email_valid;
    private String tel;
    private boolean tel_valid;
    private String endereco;
    private boolean endereco_valid;

    // Geter
    
    public boolean isNome_valid() {
        return nome_valid;
    }

    public boolean isEmail_valid() {
        return email_valid;
    }

    public boolean isTel_valid() {
        return tel_valid;
    }

    public boolean isEndereco_valid() {
        return endereco_valid;
    }
    
    //  Validaçoes
    public boolean Nome_valiation(String Nome){
        
        //nome tem que ter mais de 3 letras ANA
        nome_valid = (Nome.length() < 3);
        return nome_valid;
    }
    
    public boolean Email_validation(String Email){
        
        // Email tem que ter o @
        for(int i =0; i < Email.length();){
            String test = String.valueOf(Email.charAt(i));
            email_valid = (("@").equals(test))? true : false;
        }
        return email_valid;
    }
    
    public boolean Tel_valiation(String Tel){
        
        // Número de telefone tem que ter 11 digitos (##) 9####-####
        tel_valid = (Tel.length() == 11)? true: false;
        return tel_valid;
    }
    
    public boolean Endereco_valiation(String endereco){
        
        // Se endeco não for vazio e tivar mais que 5 caracteres retorna verdadeiro
        endereco_valid = ((endereco != "") & (endereco.length() > 5))?true:false;
        return endereco_valid;
    }
   
}
