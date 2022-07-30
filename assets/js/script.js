// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Define arrays of possible character choices
var length, upperCase, lowerCase, special, numbers;
var upperCaseLettersArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
var lowerCaseLettersArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
var specialArray = [
  '!', '@', '#', '$', '%', '^', '&', '*'
]
var numbersArray = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

function generatePassword() {

  // prompt user choose length of pw from 8 to 128; convert to interger; store as var length; edge cases
  length = parseInt(prompt('Please choose a password length from 8 to 128 characters.'))

  //edge cases
  if (length < 8 || length > 128) {
    alert('Please choose a length between 8 and 128 characters.')
  } else {
    lowerCase = confirm('Should the password include lower case letters?')
    upperCase = confirm('Should the password include upper case letters?')
    special = confirm('Should the password include special characters?')
    numbers = confirm('Should the password include numbers?')
  }

  //Plug in character requirements to arrays for sending to the for loop
  var possiblePasswordArray = [];

  if (lowerCase) {
    possiblePasswordArray = possiblePasswordArray.concat(lowerCaseLettersArray)
  }
  if (upperCase) {
    possiblePasswordArray = possiblePasswordArray.concat(upperCaseLettersArray)
  }
  if (numbers) {
    possiblePasswordArray = possiblePasswordArray.concat(numbersArray)
  }
  if (special) {
    possiblePasswordArray = possiblePasswordArray.concat(specialArray)
  }

  var password = ''

  for (var i = 0; i < length; i++) {
    password += (possiblePasswordArray[Math.floor(Math.random() * possiblePasswordArray.length)])
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

