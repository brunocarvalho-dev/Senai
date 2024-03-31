// Selec element
const generatePasswordButton = document.querySelector('#generate-password');
const generatePasswordElemente = document.querySelector('#generated-password');
const lenInput = document.querySelector("#inputLengthId");
const infoLength = document.querySelector('label[for="inputLengthId"]');

const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["@", "#", "$", "%", "&", "*", "!", "+", "§", "?"];
const caracters = Array.from(Array(26)).map((_, i) => i + 97);

const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

infoLength.innerHTML = lenInput.value;

lenInput.addEventListener("change", () => {
    infoLength.innerHTML = lenInput.value;
});

// Funçoes

const generatePassword = (
    hasNumbers,
    hasSymbols,
    hasLowercase,
    hasUppercase,
    lenght
) => {
    const newArray = [
        ...(hasNumbers ? numbers : []),
        ...(hasSymbols ? symbols : []),
        ...(hasLowercase ? LowercaseCaracters : []),
        ...(hasUppercase ? UppercaseCaracters : []),
    ];

    if (newArray.length === 0) return;

    let password = "";

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length);
        password += newArray[randomIndex];
    }
    generatePasswordElemente.style.display = "block";
    generatePasswordElemente.querySelector('h4').innerText = password;
};
    
// Eventos
generatePasswordButton.addEventListener("click", () =>{
    generatePassword(
        chkNumber.checked,
        chkSymbols.checked,
        chkLower.checked,
        chkUpper.checked,
        lenInput.value
    );

});
