
var generateBtn = document.querySelector("#generate");

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

function getRandomUpperCaseLetter() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getRandomLowerCaseLetter () {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getRandomNumber() {
return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
return symbol[Math.floor(Math.random() * symbol.length)];
}

function giveRandomCharacter() {
  var temp = [];
  if (userSelectedUpperCase) {
    temp.push(getRandomUpperCaseLetter());
 }
 
  if (userSelectedLowerCase) {
    temp.push(getRandomLowerCaseLetter());
 }
 
 if (userSelectedNumeric) {
    temp.push(getRandomNumber());
 }
 
 if (userSelectedSymbol) {
    temp.push(getRandomSymbol());
 }
 if (temp.length == 0) {
  return "";
  } else {
  return temp[Math.floor(Math.random() * temp.length)];
  }
}

function generatePassword () {
  var length= 0;
  while (!(length >= 8 && length <= 128)) {
    length = Number(prompt("pls input desired length for your password (at least 8 and at most 128 characters)"))
   }
   userSelectedUpperCase= confirm("do you want to have upper case letter in your password?")
   userSelectedLowerCase= confirm("do you want to have lower case letter in your password?")
    userSelectedNumeric= confirm("do you want to have number in your password?")
    userSelectedSymbol= confirm("do you want to have symbols in your password?")
   var pwd = "";
    for (var i=0;i<length;i++) {
    pwd += giveRandomCharacter();
    console.log(pwd)
}
return pwd;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password)
}
var userSelectedUpperCase = false;
var userSelectedLowerCase = false;
var userSelectedNumeric = false;
var userSelectedSymbol=false;

function giveRandomCharacter() {
 var temp = [];
 if (userSelectedUpperCase) {
   temp.push(getRandomUpperCaseLetter());
}

 if (userSelectedLowerCase) {
   temp.push(getRandomLowerCaseLetter());
}

if (userSelectedNumeric) {
 temp.push(getRandomNumber());
}

if (userSelectedSymbol) {
 temp.push(getRandomSymbol());
}
if (temp.length == 0) {
  return "";
  } else {
  return temp[Math.floor(Math.random() * temp.length)];
  }
}

generateBtn.addEventListener("click", writePassword);
