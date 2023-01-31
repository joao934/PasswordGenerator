const passwordinput = document.querySelector(".password-box input");
copyicon = document.querySelector(".password-box .copy-icon");
rangeinput = document.querySelector(".range-box input");
sliderNumber = document.querySelector(".range-box .slider-number");
generateButton = document.querySelector(".generate-button");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}.,;*+-#@<>¨=";

const generatePassword = () => {
    let newPassword = "";

    for(let i = 0; i < rangeinput.value; i++){
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    }
    passwordinput.value = newPassword;
    copyicon.classList.replace("ull-file-check-alt", "ull-copy");
};

rangeinput.addEventListener("input", () => {
    sliderNumber.innerText = rangeinput.value;
    generatePassword();
});

copyicon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordinput.value);
    copyicon.classList.replace("ull-copy", "ull-file-check-alt");
});

generatePassword();
generateButton.addEventListener("click", generatePassword);
