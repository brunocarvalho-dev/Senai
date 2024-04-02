let media;
function calculaMedia(){
            
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);
    media = ((nota1+nota2+nota3+nota4)/4)


    document.getElementById("mostrarNota1").innerHTML = nota1;
    document.getElementById("mostrarNota2").innerHTML = nota2;
    document.getElementById("mostrarNota3").innerHTML = nota3;
    document.getElementById("mostrarNota4").innerHTML = nota4;
    document.getElementById("mostrarMedia").innerHTML = media;
    
    let situacao;


    if((media >= 70))
    {
        situacao = "APROVADO"
        document.getElementById("notaTabela").style.backgroundColor = "green";
        document.getElementById("mostrarSituacao").innerHTML = situacao;
    }
    else if(media >= 50)
    {
        situacao = "RECUPERAÇÃO"
        document.getElementById("notaTabela").style.backgroundColor = "Yellow";
        document.getElementById("mostrarSituacao").innerHTML = situacao;
    }
    else
    {
        situacao = "REPROVADO"
        document.getElementById("notaTabela").style.backgroundColor = "red";
        document.getElementById("mostrarSituacao").innerHTML = situacao;
    }

    let conceito;

    if (media < 20) {
        
        conceito = "E";
    }
    else if (media < 40)
    {
        
        conceito = "D";
    }
    else if (media < 60)
    {

        conceito = "c";
    }
    else if (media < 80)
    {
        conceito = "B";
    }
    else
    {
        conceito = "A";
    }

    document.getElementById("mostrarConceito").innerHTML = conceito;
}