// Assignment Code
var generateBtn = document.querySelector("#generate");

window.addEventListener('load', function() {
  var passlength = prompt("How many characters would you like your password to be?")

  if (passlength < 8 || passlength > 128){
  alert("Length must be 8-128 characters")
  }

  if (passlength >= 8 && passlength <= 128){
    var uppercase = confirm("Would you like to use uppercase letters?")
    var lowercase = confirm("Would you like to use lowercase letters?")
    var numbers = confirm("would you like to use numbers?")
    var symbols = confirm("would you like to use special characters?")
  }

  if (uppercase != true && lowercase != true && numbers != true && symbols != true){
  alert("You must select at least one character type!")
    uppercase = confirm("Would you like to use uppercase letters?")
    lowercase = confirm("Would you like to use lowercase letters?")
    numbers = confirm("would you like to use numbers?")
    symbols = confirm("would you like to use special characters?")
  } 

  const resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
  resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, passlength);
});

const randomFunc = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  numbers: getRandomNumber,
  symbols: getRandomSymbol
};

function generatePassword(lowercase, uppercase, numbers, symbols, length) {
  let generatedPassword = '';
  const typesCount = lowercase + uppercase + numbers + symbols;
  const typesArr = [{
    lowercase
  }, {
    uppercase
  }, {
    numbers
  }, {
    symbols
  }

}

function getRandomLower() {
  return rando("qwertyuiopasdfghjklzxcvbnm")
}

function getRandomUpper() {
  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
  return rando(9);
}

function getRandomSymbol() {
  return rando('!@#$%^&*(){}[]=<>/,.');
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("password", writePassword)
