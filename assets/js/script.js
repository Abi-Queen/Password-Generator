
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


var length, upperCase, lowerCase, special, numbers;
var upperCaseLettersArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
var lowerCaseLettersArray = [
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
]
var specialArray = [
  '!', '@', '#', '$', '%', '^', '&', '*'
]
var numbersArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
]






function generatePassword() {

  // prompt user choose length of pw from 8 to 128; convert to interger; store as var length; edge cases
  length = number(window.prompt('Please choose a password length from 8 to 128 characters.'))

  //edge cases
  if (length < 8 || length > 128) {
    alert('Please choose a length between 8 and 128 characters.')
    console.log(length)
  } else {
    lowerCase = confirm('Should the password include lower case letters?')
    console.log(letters)

    upperCase = confirm('Should the password include upper case letters?')
    console.log(upper)

    special = confirm('Should the password include special characters?')
    console.log(special)

    numbers = confirm()
  }

  var possiblePasswordArray = [];
  var passwordArray = [];

  if (lowerCase) {
    possiblePasswordArray = possiblePasswordArray.concat(lowerCaseLettersArray)
  }
  // repeat for upper, special, numbers
  if (upperCase) {
    possiblePasswordArray = possiblePasswordArray.concat(lowerCaseLettersArray)
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



// // STARTER CODE:
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
