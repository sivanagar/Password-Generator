// Assignment code here
//Set variable to hold all options for characters
let charsSet = {
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numeric: ["0","1","2","3","4","5","6","7","8","9"],
  special: ["!","@","#","%","^","&","*","(",")"]
};
//Set variable with all passwors requirments
let passwordReq ={
  length: 8,
  upperCase: true,
  lowerCase: true,
  numeric: true,
  special: true
}
var getInfo = function () {
passwordReq.length = window.prompt("What is the length of the password required? Please enter a number betwee 8 to 128.");
passwordReq.upperCase = window.confirm("Would you like UPPERCASE characters in your password?");
passwordReq.lowerCase = window.confirm("Would you like lowercase characters in your password?");
passwordReq.numeric = window.confirm("Would you like Numeric characters in your password?");
passwordReq.special = window.confirm("Would you like Special characters in your password? Special characters are"+ passwordReq.special());
}
var generatePassword = function () {
  getInfo();
 
  return "abc";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  debugger;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
