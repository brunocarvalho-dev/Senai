// Selec element
const generatePasswordButton = document.querySelector('#generate-password    ');
const generatePasswordElemente = document.querySelector('#generated-password');


// Letrs, Números e Simbulos
// Minusculas
const getLetterLowerCase = ( ) => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
// Maiusculas
const getLetterUpperCase = ( ) => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// Número
const getNumber = ( ) => {
    return Math.floor(Math.random() * 10).toString();
};

// Número
const getSymbol = ( ) => {
    const Symbols = '"!@#$%¨&*()\|=§[]´~/;.,{}`^?:<>.+-'; 
    return Symbols[Math.floor(Math.random() * Symbols.length)].toString();
};

// Funçoes
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) =>{
    let password ="";

    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for (let i = 0; i < passwordLength;i = i + 4) {
        generators.forEach(() => {
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]();
            
           password +=(randomValue);
        });  
    };
    password = password.slice(0, passwordLength);
    generatePasswordElemente.style.display = "block";
    generatePasswordElemente.querySelector('h4').innerText = password;
};
    
// Eventos
generatePasswordButton.addEventListener("click", () =>{
    generatePassword (
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    );

});
