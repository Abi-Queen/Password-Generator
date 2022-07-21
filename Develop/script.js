// Assignment code here

// prompt user welcome

// prompt user choose length of pw from 8 to 128; validate input; store as var length; edge cases

// prompt user require letters; validate input; store as var numeric or var letters; edge cases

// prompt user require upper case letters; validate input; store as var lower or var upper; edge cases

// prompt user require special characters; validate input; store as var special or var no-special; edge cases 

// in pw generator function, set conditional statements for five types of pw: numeric only, alphanumeric only lower only, alphanumeric only upper and lower, alphanumeric lower only with special characters, alphanumeric lower and upper with special characters

// plug conditionals into diff. pw engines within pw generator function; save outputs as password

// prompt user to generate a new pw or cancel 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword(); 

