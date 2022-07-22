
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

function generatePassword(){
//define variables of pw requirements with character arrays for each type of pw
if (letters == null, special == null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9]
}
else if (letters == letters, upper == upper, special == null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
}
else if (letters == null, special == special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}
else if (letters == letters, upper == null, special == special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}
else if (letters == letters, upper == null, special == null) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
}
else if (letters == letters, upper == upper, special == special) {
  var charInfo = [0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,'`,!,@,#,$,%,^,&,*,(,),_,+,~,|,},{,],[,/,-,=,.,,,:,;,"']
}

// prompt user choose length of pw from 8 to 128; convert to interger; store as var length; edge cases
var pwLength = number(window.prompt('Please choose a password length from 8 to 128 characters.'))

//edge cases
if(pwLength < 8) {
  window.prompt('Please choose a length between 8 and 128 characters.')
console.log(pwLength)
}

else if (pwLength > 128) {
  window.prompt('Please choose a length between 8 and 128 characters.')
  console.log(pwLength)
}
else if (pwLength == 0) {
  window.prompt('Please choose a length between 8 and 128 characters.')
  console.log(pwLength)
}

// prompt user require letters/uppers/specials
else {
var letters = window.confirm('Should the password include letters?')
console.log(letters)

var upper = window.confirm('Should the password include upper case letters?')
console.log(upper)

var special = window.confirm('Should the password include special characters?')
console.log(special)
}

for (var i = 0; i < charInfo.length; i++) 
  password = characters.charInfo(Math.floor(Math.random(characters(pwLength))))

// password generator function
var password = generatePassword()
var passwordText = document.querySelector("#password")
passwordText.value = password


}
generatePassword()
writePassword()

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
