const passInput = document.querySelector("#inputPasswordId");
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');
const btnGerar = document.querySelector("#btnGerar");

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbol = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["@", "#", "$", "%", "&", "*", "!", "+", "§", "?"];

const caracters = Array.from(Array(26)).map((_, i) => i +97);
const LowerCasesCaracters = caracters.map((item) => String.fromCharCode(item));
const UpperCasesCaracters = LowerCasesCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener(("input"), ()=>{
    infoLength.innerHTML = lenInput.value;
});

btnGerar.addEventListener("click" , () => {
    generatePassword(
        chkLower.checked,
        chkUpper.checked,
        chkNumber.checked,
        chkSymbol.checked,
        lenInput.value
    );
});

const generatePasseword = (
    hasNumbers,
    hasSymbols,
    hasUppercase,
    hasLowercase,
    Length
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowerCasesCaracters : []),
        ...(hasUppercase ? UpperCasesCaracters : []),
    ];
    
    if(newArray.length ===0)return;

    let password = "";
    for(let i=0; i < Length; i++){
        const rndIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[rndIndex];
    }
    passInput.value = password;
};
