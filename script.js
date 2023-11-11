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
  var lettersLower = "abcdefghijklmnopqrstuvwxyz";
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var randomNum = Math.floor(Math.random() * 10);

  var password = "";

  function passLengthValidation() {
    var passLength = parseInt(prompt("How long do you want the password to be? "));
      if ((passLength < 8) || (passLength > 128)) {
        alert("Password must be between 8 and 128 characters");
        passLengthValidation();
    }
  }
  passLengthValidation();

  var haveLettersLower = confirm("Do you want to include lowercase letters?");
  var haveLettersUpper = confirm("Do you want to include uppercase letters?");
  var haveRandomNums = confirm("Do you want numbers?")
  var haveSpecialChars = confirm("Do you want to include special characters?")


  for (var i = 0; i < passLength; i++) {
    var charType = Math.floor(Math.random() * 4); // For each password character, choose case 0, 1, 2, or 3
    
    var randomChar = Math.floor(Math.random() * 10);
    password += randomChar;
    i++;
  }
  console.log(password); 

  return password;
}