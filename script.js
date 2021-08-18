// Assignment code here
//Set variable to hold all options for characters
let charsSet = {
  upperCase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numeric: ["0","1","2","3","4","5","6","7","8","9"],
  special: ["!","@","#","%","^","&","*","(",")","$","+",",","-","_",".",":",";","=","?","[","]","|","~","{","}"]
};

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
  let password = [""]
  let i = 0;
  charsSet.fullList = []; //this will contain the full list of possible characters
  // Getting length from user and validating it
  var passwordLength = 0; 
  while (passwordLength == "" || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("What is the length of the password required? Please enter a number betwee 8 to 128.");
  }
  
  while (i == 0){
    //Asking to confirm which charcters types
    if (window.confirm("Would you like lowercase characters in your password?")) {
      //add at least 1 random char to the password
      password[i]= getRandom(charsSet.lowerCase);
      //add all lower case to the array of possible chars
      charsSet.fullList = charsSet.fullList.concat(charsSet.lowerCase);
      i++;
    }
    //follow with other types of characters
    if (window.confirm("Would you like UPPERCASE characters in your password?")) {
      password[i]= getRandom(charsSet.upperCase);
      charsSet.fullList = charsSet.fullList.concat(charsSet.upperCase);
      i++;
    }
    if (window.confirm("Would you like Numeric characters in your password?")) {
      password[i]= getRandom(charsSet.numeric);
      charsSet.fullList = charsSet.fullList.concat(charsSet.numeric);
      i++
    }
    if (window.confirm("Would you like Special characters in your password? Special characters are " + charsSet.special.join(''))) {
      password[i]= getRandom(charsSet.special);
      charsSet.fullList = charsSet.fullList.concat(charsSet.special);
      i++
    }
    if (i == 0){
      alert("You MUST confirm at least one type of characters in your password!")
    }
  }

  // filling the remained characters of password with random character
  for (i ; i < passwordLength; i++) {
    password[i] = getRandom(charsSet.fullList);
  }

  //Shuffeling the charcters order of the password
  password = shuffle(password);

  //returning the password as string and not array
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
