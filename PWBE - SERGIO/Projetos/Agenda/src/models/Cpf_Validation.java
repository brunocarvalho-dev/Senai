/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package models;

/**
 *
 * @author User
 */
public class Cpf_Validation{
    int digito1 = 0, digito2 = 0;
    private boolean cpf_value;
    private String cpf;

    public boolean isCpf_value() {
        return cpf_value;
    }

    public void setCpf(int cpf) {
        this.cpf = String.valueOf(cpf);
    }   
    public boolean validation(){
        
        Integer [] cpfArray = new Integer[11];
		
        for(int i = 0, teste1 = 10; i <= 8; i++, teste1--){
                int cpf3 = Integer.parseInt(String.valueOf(cpf.charAt(i)));
                digito1 += (cpf3 * teste1);
        }
        for(int i = 0, teste2 = 11; i <= 9; i++, teste2--){
                int cpf3 = Integer.parseInt(String.valueOf(cpf.charAt(i)));
                digito2 += (cpf3 * teste2);
        }
        for(int i = 0; i < cpf.length();i++) {
                int cpf3 = Integer.parseInt(String.valueOf(cpf.charAt(i)));
                cpfArray[i] = cpf3;
        }
        digito1 = (digito1 % 11);
        digito2 = (digito2 % 11);

        if (digito1<2) {
                digito1 = 0;
        }else {
                digito1 = 11 - digito1;
        }
        if (digito2<2) {
                digito2 = 0;
        }else {
                digito2 = 11 - digito2;
        }
        cpf_value = (digito1 == cpfArray[9]) && (digito2 == cpfArray[10]);
        return cpf_value;
    }   
};