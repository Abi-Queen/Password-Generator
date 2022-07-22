//define global variables of pw requirements with character arrays for each type of pw
if (letters = null, special = null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9]
}
else if (letters = letters, upper = upper, special = null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
}
else if (letters = null, special = special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}
else if (letters = letters, upper = null, special = special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}
else if (letters = letters, upper = null, special = null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
}
else if (letters = letters, upper = upper, special = special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}

// prompt user choose length of pw from 8 to 128; convert to interger; store as var length; edge cases
var length = number(window.prompt('Please choose a password length from 8 to 128 characters.'))

//edge cases
if(length < 8) {
  window.prompt('Please choose a length between 8 and 128 characters.')
console.log(length)
}

else if (length > 128) {
  window.prompt('Please choose a length between 8 and 128 characters.')
  console.log(length)
}
else if (length == string) {
  window.prompt('Please choose a length between 8 and 128 characters.')
  console.log(length)
}

// prompt user require letters/uppers/specials; validate input; store as var numeric or var letters; edge cases
else {
var letters = window.confirm('Should the password include letters?')
console.log(letters)

var upper = window.confirm('Should the password include upper case letters?')
console.log(upper)

var special = window.confirm('Should the password include special characters?')
console.log(special)
}

// password generator function
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

// in pw generator function, set conditional statements for five types of pw: numeric only, alphanumeric only lower only, alphanumeric only upper and lower, alphanumeric lower only with special characters, alphanumeric lower and upper with special characters
// Write password to the #password input
// CITE SOURCE of function in readme
function writePassword(length) {

  for (var i = 0; i < length; i++) 
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

