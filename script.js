// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My Code

function generatePassword() {
  var passLength = parseInt(prompt("What length do you want"))
  var password = "";
  var i = 0;

  while (i < passLength) {
    var randomChar = Math.floor(Math.random() * 10);
    password += randomChar;
    i++;
  }
  console.log(password); 

  return password;
}