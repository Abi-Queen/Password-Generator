// prompt user choose length of pw from 8 to 128; validate input; store as var length; edge cases
var length = window.prompt('Please choose a password length from 8 to 128 characters.')
//change away from or to and, separate out
if(length == string || length < 8 || length > 128) {
  window.prompt('Please choose a length between 8 and 128 characters.')
}
console.log(length)

// prompt user require letters/uppers/specials; validate input; store as var numeric or var letters; edge cases
var letters = window.confirm('Should the password include letters?')
console.log(letters)

var upper = window.confirm('Should the password include upper case letters?')
console.log(upper)

var special = window.confirm('Should the password include special characters?')
console.log(special)


// in pw generator function, set conditional statements for five types of pw: numeric only, alphanumeric only lower only, alphanumeric only upper and lower, alphanumeric lower only with special characters, alphanumeric lower and upper with special characters
// Write password to the #password input
// CITE SOURCE of function in readme
function writePassword(length) {
  
  for (var i = 0; i < length; i++) {

// create arrays for input pw options *QUESTION: where to put this?
if (letters = 0, special = 0) {
  var charInfo = [0123456789]
}
else if (letters = letters, upper = upper, special = 0) {
  var charInfo = [0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]
}
else if (letters = 0, special = special) {
  var charInfo = [0123456789,'`!@#$%^&*()_+~|}{][/-=.,:;"']
}
else if (letters = letters, upper = 0, special = special) {
  var charInfo = [0123456789abcdefghijklmnopqrstuvwxyz'`!@#$%^&*()_+~|}{][/-=.,:;"']
}
else if (letters = letters, upper = 0, special = 0) {
  var charInfo = [0123456789abcdefghijklmnopqrstuvwxyz]
}
else if (letters = letters, upper = upper, special = special) {
  var charInfo = [0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,'`!@#$%^&*()_+~|}{][/-=.,:;"']
}
  }
  password = characters.charInfo(Math.floor(Math.random()charactersLength));

//from starter code
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword(); 

