
function validar(){
    // GET valor cpf
    var cpf = document.getElementById( "cpf_value").value;

    console.log(cpf);
    console.log(typeof(cpf));
    
    //Convertendo para inteiro separando cada numero 
    cpf = cpf.split('').map(res => parseInt(res)); 
    var cpf2;

    console.log(cpf);
    console.log(typeof(cpf));
    

    for(let i=0; i<9;i++){
        cpf2 += cpf[i];
        
    }
    document.getElementById('cpf_mostrar').innerText = (cpf2);
    console.log(typeof(cpf));

}