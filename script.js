let generateBtn = document.querySelector("#generate");
let upperCharCodes = gamut(65, 90)
let lowerCharCodes = gamut(97, 122)
let numberCharCodes = gamut(48, 57)
let symbolCharCodes = gamut(33, 47).concat(
    gamut(58, 64).concat(
        gamut(91, 96).concat(
            gamut(123, 126)
        )
    )
)

function writePassword() {

    let length = window.prompt("How many characters would you like included in your password?");
    let lower = window.confirm("Press 'OK' to include lower case letters in your password. Press 'Cancel' to omit lower case letters.");
    let upper = window.confirm("Press 'OK' to include upper case letters in your password. Press 'Cancel' to omit upper case letters.");
    let number = window.confirm("Press 'OK' to include numbers in your password. Press 'Cancel' to omit numbers.");
    let symbol = window.confirm("Press 'OK' to include special characters in your password. Press 'Cancel' to omit special characters.");
    let password = generatePassword(length, lower, upper, number, symbol);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(length, lower, upper, number, symbol) {
    if (length >= 8 && length <= 128) {
    let charCodes = lowerCharCodes
    if (upper) charCodes = charCodes.concat
    (upperCharCodes)
    if (number) charCodes = charCodes.concat
    (numberCharCodes)
    if (symbol) charCodes = charCodes.concat
    (symbolCharCodes)
    let passContent = []
    for (i = 0; i < length; i++) {
    let char = charCodes[Math.floor(Math.random() * charCodes.length)]
    passContent.push(String.fromCharCode(char))
    }
    return passContent.join("")
}
else if (length <= 7 || length >= 129) {
    window.alert("Need a valid input between 8 and 128.")}; 
}

function gamut(low, high) {
    let array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

generateBtn.addEventListener("click", writePassword);