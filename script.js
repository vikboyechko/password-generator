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

  var lettersLower = "abcdefghijklmnopqrstuvwxyz"; // using a string rather than array to make the code easier to read
  var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // same as above
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // excluded the double-quotation mark so it doesn't break the string
  var randomNum = Math.floor(Math.random() * 10); // random number from 0 to 9

  var password = ""; // initialize the var with an empty string

  // let's declare  a function that can loop if the passLength is out of bounds, before continuing to the next prompt

  var passLength; // first declares the passLength variable, so we can refer to it inside the loop

  function passLengthValidation() {
    passLength = parseInt(prompt("How long do you want the password to be? "));
      if ((passLength < 8) || (passLength > 128)) {
        alert("Password must be between 8 and 128 characters");
        passLengthValidation(); // runs the function again, although maybe there is an alternative like 'continue' or 'return'
    return passLength; // saves the passLength variable to use globally
      }
  }
  passLengthValidation(); // calls the function above

  // using the confirm function only allows OK or Cancel. In the future I want to use another function that can customize the button text
  var haveLettersLower = confirm("Do you want to include lowercase letters?");
  var haveLettersUpper = confirm("Do you want to include uppercase letters?");
  var haveRandomNums = confirm("Do you want numbers?")
  var haveSpecialChars = confirm("Do you want to include special characters?")

  // can either use a for or while loop, but in this case 'for' works
  for (var i = 0; i < passLength; i++) {

    // For each password character, choose to use case 0, 1, 2, or 3, which represents lowercase, uppercase, number, or special character
    var charType = Math.floor(Math.random() * 4); 
    
    // the switch is automatically choosing a case during each iteration of the loop, if that case is selected by user
    switch (charType) {

      case 0:
        if (haveLettersLower) {
          password += lettersLower.charAt(Math.floor(Math.random() * lettersLower.length)); // selects a random lowercase letter
          break; // stops the current 'switch' choice and continues the 'for' loop
        }

      case 1:
        if (haveLettersUpper) {
          password += lettersUpper.charAt(Math.floor(Math.random() * lettersUpper.length)); // selects a random uppercase letter
          break;
        }

      case 2:
        if (haveRandomNums) {
          password += Math.floor(Math.random() * 10); // selects a random number 0-9
          break;
        }

      case 3:
        if (haveSpecialChars) {
          password += specialChars.charAt(Math.floor(Math.random() * specialChars.length)); // selects a random special character
          break;
        }
    }
  }
  return password;
}