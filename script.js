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
  special: true,
}
// Getting info from user
var getInfo = function () {
passwordReq.length = window.prompt("What is the length of the password required? Please enter a number betwee 8 to 128.");
passwordReq.upperCase = window.confirm("Would you like UPPERCASE characters in your password?");
passwordReq.lowerCase = window.confirm("Would you like lowercase characters in your password?");
passwordReq.numeric = window.confirm("Would you like Numeric characters in your password?");
passwordReq.special = window.confirm("Would you like Special characters in your password? Special characters are");
}
// get random characters
var getRandom = function (char) {
  return char[Math.floor(Math.random()*char.length)];
}
//shuffle the characters in the password
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

var generatePassword = function () {
  getInfo();
  
  let password = [""]
  let i = 0;
  charsSet.fullList = [];
  debugger;
  if (passwordReq.lowerCase) {
    password[i]= getRandom(charsSet.lowerCase);
    charsSet.fullList = charsSet.fullList.concat(charsSet.lowerCase);
    i++;
  }
  if (passwordReq.upperCase) {
    password[i]= getRandom(charsSet.upperCase);
    charsSet.fullList = charsSet.fullList.concat(charsSet.upperCase);
    i++;
  }
  if (passwordReq.numeric) {
    password[i]= getRandom(charsSet.numeric);
    charsSet.fullList = charsSet.fullList.concat(charsSet.numeric);
    i++
  }
  if (passwordReq.special) {
    password[i]= getRandom(charsSet.special);
    charsSet.fullList = charsSet.fullList.concat(charsSet.special);
    i++
  }
  for (i ; i < passwordReq.length; i++) {
    password[i] = getRandom(charsSet.fullList);
  }
  password = shuffle(password);
  return (password.join(''));
}

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
