
let temperaturaValor;

function temperaturas(){
    temperaturaValor = document.getElementById("input_temperatura").value;
    temperaturaValor = temperaturaValor.replace(",",".");
    
    let select = document.querySelector('#temperaturaInicial');
    let unidadeTemperatura = select.options[select.selectedIndex].value; 

    console.log(temperaturaValor, unidadeTemperatura);
    
    if(isNaN(temperaturaValor) || temperaturaValor.length == 0){
        alert('Preencha o campo de Temperatura!')
    }else{
        switch (unidadeTemperatura) {
            case 'celsius':
                Celsius();
                break;
            case 'fahrenheit':
                Fahrenheit();
                break;
            case 'kelvin':
                Kelvin();
        }
        
    }    
    

}

function Celsius() {
    let kelvin = (Number(temperaturaValor) + 273.15);
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    exibirResposta(' °c','Kelvin: '+ kelvin +' k','Fahrenheit: '+ fahrenheit+' f');
}

function Fahrenheit() {
    let celsius = (Number(temperaturaValor)-32) *  5/9;
    let kelvin = celsius + 273.15;
    exibirResposta(' °f','Celcius: '+ celsius+' °C','Kelvin: '+ kelvin+ " K");
}

function Kelvin() {
    let fahrenheit = (Number(temperaturaValor)+32) /  9*5;
    let celsius = (fahrenheit - 32) / 1.8;
    exibirResposta(' k', 'Fahrenheit: '+fahrenheit+' °f', 'Celcius: '+celsius+' °c');
}
function exibirResposta(tipoTemp, tempA, tempC) {
    document.getElementById('resposta').innerHTML = `<br>A temperatura ${temperaturaValor} ${tipoTemp} é igual a: <br>
        ${tempA} <br>${tempC}`;
}